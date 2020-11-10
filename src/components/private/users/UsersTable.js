import React from 'react';
import UsersService from './services/UsersService';
import {ToastContainer,toast} from 'react-toastify';

class UsersTable extends React.Component {
  state = {users: []};
  
  // handleClickOnIconToUpdateUserStatus = (user) => {
  //   // This function is passed as "prop"
  //   user.status = user.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
  //   this.props.onUpdateUserStatus(user);
  // };

  //Evento q se ejecuta cuando se carga el formulario
  componentDidMount() {
    UsersService.getAllUsers().then((response) => {
      this.setState({users: response.data});
    });
  }

  //Eliminamos del state el usuario pasado por parametro, asi se actuaiza nuestra tabla
  removeUserFromCurrentState = (userToDelete) => {

    this.setState(
        prevState => ({
          users: prevState.users.filter(
              user => user.id !== userToDelete.id),
        }));
  };

  //Eliminamos de la base de datos el usuario seleccionado
  handleClickDeleteUser = (user) => {
    if(window.confirm("Seguro que desea eliminar este usuario?"))
    {
      UsersService.deleteUser(user).then((response) => {
        const user = response.data;
        const {name, email} = user;
        toast.success(`Usuario Eliminado: ${name} (${email})`);
  
        // Delete user from current state
        this.removeUserFromCurrentState(user);
      });
    }
    
  };
  render() {

    const {users} = this.state;

    return (
        <div className="b-content container">
          <ToastContainer position="top-center"
            autoClose={8000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover/>
          <h1>Listado de Usuarios</h1>
          <table className="table">
            <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Email</th>
              <th scope="col">Usuario</th>
              <th scope="col">Accion</th>
            </tr>
            </thead>
            <tbody>

            {users.map(user => (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>
                    <button className="btn btn-danger"
                            onClick={() => this.handleClickDeleteUser(
                                user)}>
                      <i className="b-delete far fa-trash-alt">Eliminar</i>
                    </button>
                  </td>
                </tr>))
            }

            </tbody>
          </table>
        </div>
    );
  }
}


export default UsersTable;
