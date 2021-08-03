import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import '../Styles/post.css'
import { db } from '../firebase';
import { forwardRef } from 'react';

export const Post = forwardRef(({title, text, id, isBlue, ismencanta, avatar, username},ref) => {


    const removePost = (e) => {
        e.preventDefault()
        db.collection("posts").doc(id).delete()
    }

    const likePost = (e) => {
        const likedPost = db.collection("posts").doc(id)
        likedPost.get().then(doc => likedPost.update({
            isBlue: !doc.data().isBlue
        }))
    }

    const meencataPost = (e) => {
        const likedPost = db.collection("posts").doc(id)
        likedPost.get().then(doc => likedPost.update({
            ismencanta: !doc.data().ismencanta
        }))
    }

    return (
        <div className="post" ref={ref}>
            <div className="post__body">
                <div className="post__bodyLeft">
                    <Avatar className="avatar" src={avatar}/>
                    <p className='post__name'>{username}</p>
                    <h3>{title}</h3>
                    <h4>{text}</h4>
                </div>
                <IconButton className="post__iconDele" onClick={removePost}>
                    <DeleteForeverIcon />
                </IconButton>
                
            </div>
            <div className="post__icons">
                <IconButton onClick={likePost} className="like__buttom">
                    <ThumbUpAltOutlinedIcon  color={isBlue ? 'primary' : '#4dc875'} />
                </IconButton>
                <IconButton onClick={meencataPost}>
                    <FavoriteBorderOutlinedIcon color={ismencanta ? 'primary' : ''}/>
                </IconButton>
            </div>
            
        </div>
    )
})
