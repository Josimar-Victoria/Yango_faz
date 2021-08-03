import TextField from '@material-ui/core/TextField';
import { Post } from './Post'
import '../Styles/main.css'
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { useStateValue } from '../StateProvide';

export const Main = () => {
    const [{user}] = useStateValue()
    const [posts, setposts] = useState([])
    const [input, setinput] = useState({
        title: '',
        text: ''
    })

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc")
        .onSnapshot(snapshot => 
            setposts(snapshot
            .docs.map(doc => ({ 
            id: doc.id,
            data: doc.data()
        }))))
    },[])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.text){
            db.collection("posts").add({
                title: input.title,
                text: input.text,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                isBlue: false,
                ismencanta: false,
                username: user?.displayName,
                avatar: user?.photoURL,

            })
            setinput({
                title: '',
                text: ''
            })
        }else{
            alert('Agg un posts')
        }

        console.log(posts);
    }
    return (
        <div className="main">
            <div className="main__input">
                <form  noValidate autoComplete="off">
                    <div className="main__inputForm">
                        <TextField value={input.title} onChange={e => setinput({...input, title: e.target.value})} id="standard-basic" label="Title" />
                        <TextField value={input.text} onChange={e => setinput({...input, text: e.target.value})} className="main__inpuntFormText" id="outlined-basic" label="Agg Text...." variant="outlined" />
                    </div> 
                    <button type="submit" className="button" onClick={handleSubmit}></button>
                </form>
            </div>

            <div className="main__post">

            
                <FlipMove>
                {
                    posts.map(({id, data: {title, text, isBlue,ismencanta, username, avatar}}) => 
                    <Post key={id} 
                    id={id} 
                    title={title} 
                    text={text} 
                    isBlue={isBlue} 
                    ismencanta={ismencanta} 
                    username={username} 
                    avatar={avatar}/>)
                }
                </FlipMove>
            </div>
        </div>
    )
}
