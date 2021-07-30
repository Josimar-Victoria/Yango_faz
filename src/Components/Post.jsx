import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useStateValue } from '../StateProvide'
import '../Styles/post.css'
import { db } from '../firebase';

export const Post = ({title, text, id}) => {
    const [{user}] = useStateValue()

    const removePost = (e) => {
        e.preventDefault()
        db.collection("posts").doc(id).delete()
    }

    return (
        <div className="post">
            <div className="post__body">
                <div className="post__bodyLeft">
                    <Avatar className="avatar" src={user?.photoURL}/>
                    <h2>{title}</h2>
                    <h4>{text}</h4>
                </div>
                <IconButton className="post__iconDele" onClick={removePost}>
                    <DeleteForeverIcon />
                </IconButton>
                
            </div>
            <div className="like__buttom">
            <ThumbUpAltOutlinedIcon/>
            </div>
        </div>
    )
}
