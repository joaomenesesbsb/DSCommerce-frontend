import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as authService from '../../services/auth-service';
import { ContextToken } from '../../utils/context-token';

export default function LoggerdUser() {

    const navigate = useNavigate();

    const { contextTokenPayload, setContextTokenPayload } = useContext(ContextToken);

    function handleLogoutClick(){
        authService.logout();
        navigate('/catalog');
        setContextTokenPayload(undefined);
    }

    return (
        contextTokenPayload && authService.isAuthenticated()
            ?
            <div className="dsc-logged-user">
                <p>{contextTokenPayload.user_name}</p>
                <span onClick={handleLogoutClick}>Sair</span>
            </div>
            :
            <Link to={"/login"}>
                Entrar
            </Link>
    );
}