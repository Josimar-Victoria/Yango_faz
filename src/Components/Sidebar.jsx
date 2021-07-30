import { useStateValue } from '../StateProvide';
import '../Styles/sidebar.css';

export const Sidebar = () => {
    const [{user}] = useStateValue()
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h4>Cyty Name</h4>
                <p>Imagen nubes</p>
                <h1>Temp °C</h1>
            </div>
            <div className="sidebar__bottom">
                <h4>Bienvenidos</h4>
                <p>{user?.displayName}</p>
            </div>
        </div>
    )
}
