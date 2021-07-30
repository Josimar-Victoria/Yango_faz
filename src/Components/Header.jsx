import '../Styles/header.css'
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import { Button, IconButton, Switch } from '@material-ui/core';
import { useStateValue } from '../StateProvide';
import { actionsTypes } from '../reducer'
import { auth } from '../firebase'
export const Header = () => {
    const [{isopen, user}, dispatch] = useStateValue();

    const toggleMenu = () => {
        dispatch({
            type: actionsTypes.TOGGLE_MENU,
            isopen: !isopen
        })
    }
    const signOut = (e) => {
        e.preventDefault()
        auth.signOut().then((user)=> dispatch({
            type: actionsTypes.SET_USER,
            user: null,
        }))
    }

    return (
        <div className="header">
            <div className="header__left">
                <img width='40px' src='http://www.edutic.pe/galeria/storage/cache/images/000/057/letra-MAYUS-azul-10,medium.2x.1532902910.png' alt="logo" />
                <IconButton onClick={toggleMenu}>
                    <MenuIcon fontSize="large"/>
                </IconButton>
            </div>
            <div className="header__right">
                <Avatar src={user?.photoURL}/>
              
                {
                    user && <Button onClick={signOut}>Sigm out</Button>
                }
                  <Switch/>
            </div>
        </div>
    )
}
