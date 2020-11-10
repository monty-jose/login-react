import React from 'react';
import {ToastContainer,toast} from 'react-toastify';
import UsersService from './services/UsersService';

class UsersFormCreate extends React.Component {

  //evento que se ejecuta a la hora de hacer el submit
  handleSubmitWithFormData = (event) => {
    event.preventDefault();

    if (!event.target.checkValidity()) {
      // form es invalido
      toast.error('Por favor completar los campos requeridos!');
      return;
    }

    const data = new FormData(event.target);

    UsersService.createUser(data).then((response) => {
      const user = response.data;
      const {name, email} = user;
      toast.success(`Usuario Creado: ${name} (${email})`);

      // Execute the callback passed by the parent
      this.props.onCreateUser(user);
      
    });

  };
  

  render() {

    return (
  
        <div className="b-form">
          <ToastContainer position="top-center"
            autoClose={8000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover/>
          <h1>Crear Usuario</h1>
          <form onSubmit={this.handleSubmitWithFormData} noValidate>
            <div className="form-group">
              <label htmlFor="name">Nombre* :</label>
              <input id="name" name="name" className="form-control"
                     type="text" required/>
            </div>
            <div className="form-group">
              <label htmlFor="username">Email* :</label>
              <input id="email" name="email" className="form-control"
                     type="email" required/>
            </div>
            <div className="form-group">
              <label htmlFor="username">Username* :</label>
              <input id="username" name="username" className="form-control"
                     type="text" required/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password* :</label>
              <input id="password" name="password" className="form-control"
                     type="password" required/>
            </div>
            <button type="submit" className="btn btn-primary">Guardar
            </button>
          </form>
        </div>
    );
  }
}

export default UsersFormCreate;
