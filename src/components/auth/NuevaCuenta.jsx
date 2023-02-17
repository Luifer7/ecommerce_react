
import { useState } from "react";
import {Link} from 'react-router-dom';

// import '../../styles/index.css';

const NuevaCuenta = () => {

    // State para iniciar Sesión
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    // Extraer de usuario
    const {nombre, email, password, confirmar} = usuario;

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

        // Password minimo 6 caracteres

        // los 2 passwords iguales

    }
    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h2 className="headingForm">Obtener una Cuenta</h2>

                <form 
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                        type="text" 
                        name="nombre" 
                        id="nombre" 
                        placeholder="Tu Nombre"
                        value={nombre} 
                        onChange={onChange} 
                        />
                    </div>
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
                        <label htmlFor="password">Confirmar Password</label>
                        <input 
                        type="password" 
                        name="confirmar" 
                        id="confirmar" 
                        placeholder="Confirma Password"
                        value={confirmar}
                        onChange={onChange} 
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="bton btn-primario bton-block" value="Registrarme" />
                    </div>
                </form>

                <Link to={'/login'} className='enlace-cuenta'>
                    Volver a Iniciar Sesión
                </Link>
            </div>
        </div>
    );
  }
  
  export default NuevaCuenta;
  
  
  