import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'
import { actionsTypes } from '../reducer'
import { useStateValue } from '../StateProvide'
import '../Styles/login.css'

export const Login = () => {
    const [{user}, dispatch] = useStateValue()
    const signIn = (e) => {
        auth.signInWithPopup(provider).then(results => dispatch({
            type: actionsTypes.SET_USER,
            user: results.user,
        })).catch((err) => alert(err)) 
    }
    return (
        <div className="login">
            <h1>Bienvenidos a Yango_faz</h1>
            <Button onClick={signIn} variant="contained" color='primary'>
                Sign in with Google
            </Button>
        </div>
    )
}
