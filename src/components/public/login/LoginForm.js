import React from 'react';
import {ToastContainer,toast} from 'react-toastify';
import AuthenticationService
  from '../../../auth/services/AuthenticationService';
import {Redirect} from 'react-router-dom';
import { Button, FormGroup, FormControl, Row, Col, Form } from "react-bootstrap";
import './style/login.css'
import Logo from '../../../assets/menu/logo.ico';
import Loading from '../../../assets/login/loading.gif';
import 'react-toastify/dist/ReactToastify.css'


class LoginForm extends React.Component {

  state = {
    redirectToReferrer: false,
    loading: false
  };

  //Evento que se dispara cuando ejecutamos el Submit del login
  handleLoginAction = (event) => {
    event.preventDefault();

    //Si los campos del formulario estan vacioes
    if (!event.target.checkValidity()) {
      toast.error('Please, fill all the required fields!');
      return;
    }
    this.setState(() => ({
        loading: true,
      }));

    const data = new FormData(event.target);
    const userName = data.get('username');
    const password = data.get('password');

    //Generamos el session storege
    AuthenticationService.login(userName, password).then(() => {     

      this.setState(() => ({
        redirectToReferrer: true,
      }));

    }).catch(error => {   
        this.setState(() => ({
            loading: false,
          }));     

        toast.error(`Usuario o contraseña incorrecto!`);
    });
  };

  render() {

    const {from} = {from: {pathname: '/users'}};
    const {redirectToReferrer} = this.state;
    //si se inicio sesion hacemos un redirect al content
    if (redirectToReferrer) {
      return <Redirect to={from}/>;
    }

    return (
        <div className="login-form">
        <ToastContainer position="top-center"
            autoClose={8000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover/>
        <Form onSubmit={this.handleLoginAction}  > 
          <h2>Wall<img src={Logo} className='logo'>
          </img><br/> </h2>
          <h4>Sistema de Stock</h4>
          <FormGroup controlId="formBasicEmail">
            <FormControl type="text" id="username" name="username" placeholder="Tu Usuario *" required/>
          </FormGroup>      
          <FormGroup controlId="formBasicPassword">
            <FormControl type="password" id="password" name="password" placeholder="Tu Password *" required />
          </FormGroup>
          <FormGroup controlId="formBasicSubmit"> 
            <Row className="mt-9">
            <Col md={{ span: 12, offset: 3 }}>
            {this.state.loading === true ?
                <Button  className="btnSubmit" >Cargando.. <img src={Loading} className='loading'/></Button> 
                :<Button  className="btnSubmit" type="submit">
                    Ingresar
                </Button>}            
            </Col>
          </Row>       
          </FormGroup>
      </Form>
      </div>
    );
  }
}

export default LoginForm;
