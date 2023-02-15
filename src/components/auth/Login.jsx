import { useState } from "react";
import {Link} from 'react-router-dom';

// import '../../styles/index.css';

const Login = () => {

    // State para iniciar Sesión
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    // Extraer de usuario
    const {email, password} = usuario;

    const onChange = e => {
        guardarUsuario({
            ... usuario,
            [e.target.name]: e.target.value
        });
    }

    // Cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        // Valiar campos vacios
        if(email.trim() === '' || password.trim() === ''){

        }

    }
    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h2>Iniciar Sesión</h2>

                <form 
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Tu Email"
                        value={email} 
                        onChange={onChange} 
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Tu Password"
                        value={password}
                        onChange={onChange} 
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="bton btn-primario bton-block" value="Iniciar Sesión" />
                    </div>
                </form>

                <Link to={'/nueva-cuenta'} className='enlace-cuenta'>
                    Obtener Cuenta
                </Link>

            </div>
        </div>
    );
  }
  
  export default Login;
  
  
  