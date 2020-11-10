import React from 'react';
import LoginForm from './LoginForm';
import {Container, Row, Col} from 'react-bootstrap';
import './style/login.css'

class LoginComponent extends React.Component {
  render() {
    const {location, onLogin} = this.props;

    return (
      <Container className='login-container'>
        <Row className="mt-6">
          <Col md={{ span: 6, offset: 3 }}>
            <LoginForm location={location} onLogin={onLogin}/>
          </Col>
        </Row>          
      </Container>
    );
  }
}

export default LoginComponent;
