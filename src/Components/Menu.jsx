import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { db } from '../firebase';

const ITEM_HEIGHT = 48;

export default function LongMenu({id}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [ListaTarea, setListaTarea] = useState([])
    const [ModoEdit, setModoEdit] = useState(false)
    const [EditText, setEditText] = useState("")

    
  const removePost = (e) => {
    e.preventDefault()
    db.collection("posts").doc(id).delete()
}


const atualuazarTareas = ( id, text) => {
    const ListaAtulizada = ListaTarea.map((e,index) => {
        if(index === id){
            e = text
        }
        return e;
    })
    setListaTarea(ListaAtulizada)
}

const editarPost = () => {
    setModoEdit(true)
}

const manejarEditInput = (e) => {
    setEditText(e.target.value)
}
const handleSutmidEdit = (e) => {
    e.preventDefault();
    atualuazarTareas(id, EditText);
        setEditText("");
        setModoEdit(false)
}

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>

 {   
    !ModoEdit ? 
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        
          <MenuItem onClick={handleClose}>
            <ul>
                <li onClick={removePost}>elimar</li>
                <li onClick={editarPost}>editar</li>
            </ul>
          </MenuItem>
        
      </Menu>
        :<>
        <form className='sub__form' onSubmit={handleSutmidEdit}>
                <input value={EditText} onChange={manejarEditInput} placeholder="Editar Comentario" />
                <button>Guaradar</button>
            </form>
        </>
      }
    </div>
  );
}