import React from "react";
import HeaderSignin from "./Header/HeaderSignin";
import { useState } from "react";
import { Link } from "react-router-dom";
import {Navbar, Container, Nav, Button, Modal, Form,} from 'react-bootstrap'

function Header() {
    
    const [state, setState] = useState({
        isLogin: JSON.parse(window.localStorage.getItem("token")),
    })
        console.log(state.isLogin);
    const handleLogin = (e) =>{
    e.preventDefault()
        setState({isLogin:true})
    // window.localStorage.setItem("token", "true")
    }

    const onOpenModalRegister = () => {
        setState({ register : true})
    }
    const onOpenModalLogin = () => {
        setState({ login : true})
    }
    const onCloseModalRegister = () => {
        setState({ register : false})
    }
    const onCloseModalLogin = () => {
        setState({ login : false})
    }
    const onAlreadyAccount = () => {
        setState({login : true, register : false})
    }
    const onHaveAccount= () => {
        setState({login : false, register : true})
    }
    
    
    return(
        <>
            {state.isLogin ? <HeaderSignin /> : 
            (
            <Navbar bg= 'white' expand= 'xxl'>
                <Container>
                    <Navbar.Brand href="#home">
                    <Link to="/"><img
                        src="/Images/Logo.png"
                        width="75"
                        height="75"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"/>
                    </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="ms-auto d-flex align-items-end gap-2">
                            <Button onClick={onOpenModalLogin} variant="outline-danger">Login</Button>{' '}
                            <Button onClick={onOpenModalRegister} variant="danger">Register</Button>{' '}      
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            )}
        <Modal size="sm" show={state.register} onHide={onCloseModalRegister}>
                <Modal.Body>
                    <Modal.Title className="fw-bold text-danger">Register</Modal.Title>
                    <Form>
                        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                            <Form.Control style={{backgroundColor:"whitesmoke"}} className="formInput" type="email" placeholder="Email"  />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control style={{backgroundColor:"whitesmoke"}} className="formInput" type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicFullName">
                            <Form.Control style={{backgroundColor:"whitesmoke"}} className="formInput" type="text" placeholder="Fullname" />
                        </Form.Group>
                        <div className="d-grid text-center">
                        <Button variant="danger" width="100%" onClick={onCloseModalRegister} >
                            Register
                        </Button>
                        <Form.Text>Already have an account ? Click <a onClick={onAlreadyAccount} className="fw-bold text-dark" style={{textDecoration:"none", cursor:"pointer"}}>Here</a></Form.Text>
                        </div>
                        
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal size="sm" show={state.login} onHide={onCloseModalLogin}>
                <Modal.Body>
                    <Modal.Title className="fw-bold text-danger">Login</Modal.Title>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                            <Form.Control style={{backgroundColor:"whitesmoke"}} className="formInput" type="email" placeholder="Email"  />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control style={{backgroundColor:"whitesmoke"}} className="formInput" type="password" placeholder="Password" />
                        </Form.Group>

                        <div className="d-grid text-center">
                        <Button onClick={handleLogin} variant="danger" width="100%">
                            Login
                        </Button>
                        <Form.Text>Don't have an account ? Click <a onClick={onHaveAccount} className="fw-bold text-dark" style={{textDecoration:"none", cursor:"pointer"}}>Here</a></Form.Text>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>)
        </>
    )
}

export default Header