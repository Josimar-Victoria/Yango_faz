import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Menu from './Menu'
import '../Styles/post.css'
import { db } from '../firebase';
import { forwardRef } from 'react';

export const Post = forwardRef(({title, text, id, isBlue, ismencanta, avatar, username},ref) => {

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
                    <h3 className='post__titel'>{title}</h3>
                    <h4 className='post__text'>{text}</h4>
                </div>
                <Menu id={id}/>
                
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
