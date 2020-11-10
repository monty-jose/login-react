import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar,Nav, NavDropdown} from 'react-bootstrap';
import AuthenticationService from '../../../auth/services/AuthenticationService';
import './style/Sidebar.css'
import Logout from '../../../assets/menu/logout.ico';
import Logo from '../../../assets/menu/logo.ico';

class Sidebar extends React.Component{
    handleLogout = () => {
        AuthenticationService.logout().then(() => {
          //una vez eliminado el session storage hacemos un redirect al login
        //   this.props.history.push('/');
          window.location = '/login';
        });
      };
    render(){
        
        return(
            
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="navbar-menu">
            <Navbar.Brand >
                Wall
                <img title ='' src={Logo} className='logo'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Partes" id="basic-nav-dropdown">
                        <NavDropdown.Item >
                            <Link  to="/newPart">
                                Nueva Parte
                            </Link>  
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link  to="/partsList">
                                Listar Parte
                            </Link>  
                        </NavDropdown.Item>                        
                    </NavDropdown>
                    <NavDropdown title="Stock" id="collasible-nav-dropdown">
                        <NavDropdown.Item >
                            <Link  to="/newStock">
                                Agregar a Stock
                            </Link>                            
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link  to="/stockList">
                                Listar Stock
                            </Link>     
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Remitos" id="collasible-nav-dropdown">
                        <NavDropdown.Item >
                            <Link  to="/newDispatch">
                                Nuevo Remito
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link  to="/dispatchsList">
                                Listar Remitos
                            </Link>
                        </NavDropdown.Item>                        
                    </NavDropdown>
                    <NavDropdown title="Ordenes de Reparacion" id="collasible-nav-dropdown">
                        <NavDropdown.Item >
                            <Link  to="/newOrder">
                                Nueva Orden de reparacion
                            </Link>                            
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link  to="/orderList">
                                Listar Ordenes
                            </Link>       
                        </NavDropdown.Item>                        
                    </NavDropdown>        
                    <NavDropdown title="Usuarios" id="collasible-nav-dropdown">
                        <NavDropdown.Item>
                            <Link  to="/users">
                                Agregar Usuario
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link  to="/usersTable">
                                Listar Usuarios
                            </Link>                            
                        </NavDropdown.Item>                        
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <label className='navbar-nav-name' >Jose Montivero</label>
                    <Nav.Link eventKey={2} href="#memes" onClick={this.handleLogout}>
                        <img title ='Cerrar Sesion' src={Logout} className='logout'>
                        </img>                        
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Sidebar;
