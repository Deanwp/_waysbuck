import { Divider } from "@mui/material";
import React from "react"
import { Card, Container, Button, Form, FloatingLabel} from "react-bootstrap";
import { Link } from "react-router-dom";

function Cart() {
    return(
        <Container className="text-danger">
            <h1 className="fw-bold mb-5 ">My Cart</h1>
            <p>Review Your Order</p>
            <div className="row text-danger gap-5">
                
                <div className="col-7 text-danger ">
                    <Divider></Divider>
                        <div className="d-flex">
                            <div className="row card-body p-0 mb-3">
                                    <div className="col-2 p-0 mb-2 mt-5">
                                        <img src="/images/productpict.png" alt="" height='120px'/>
                                    </div>
                                    <div className="d-flex p-0 col-10 mb-2 mt-5 ">
                                        <div className="col-8">
                                            <h4 className="mb-1 fw-bold">Ice Coffe Palm Sugar</h4>
                                            <p className="mb-1"> <span className="fw-bold">Toping :</span>  : Bill Berry Boba, Bubble Tea Gelatin </p>
                                        </div>
                                        <div className="col-4 mx-0 text-end " >
                                            <p className="mb-1 mx-0">Price : Rp.33.000</p>
                                            <img src="/images/Delete.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-2 p-0 mt-2">
                                        <img src="/images/productpict.png" alt="" height='120px'/>
                                    </div>
                                    <div className="d-flex p-0 col-10 mb-2 mt-5 ">
                                        <div className="col-8">
                                            <h4 className="mb-1 fw-bold">Ice Coffe Palm Sugar</h4>
                                            <p className="mb-1"> <span className="fw-bold">Toping :</span>  : Bill Berry Boba, Manggo </p>
                                        </div>
                                        <div className="col-4 mx-0 text-end " >
                                            <p className="mb-1 mx-0">Price : Rp.36.000</p>
                                            <img src="/images/Delete.png" alt="" />
                                        </div>
                                    </div>
                            </div>
                        </div>
                    <Divider></Divider>

                    <div className="row card-body p-0 mb-3 gap-5">
                        <div className="d-flex col-6 p-0 mb-2 mt-5">
                            <div className="col-8 p-0">
                                <Divider></Divider>
                                <p className="mb-2 fw-bold">Subtotal</p>
                                <p className="mb-2"> Qty </p>
                                <Divider></Divider>
                                <p className="mb-2 fw-bold"> Total </p>
                            </div>
                            <div className="col-4 mx-0 text-end p-0 " >
                                <Divider></Divider>
                                <p className="mb-2 mx-0">Price : Rp.36.000</p>
                                <p className="mb-2">2</p>
                                <Divider></Divider>
                                <p className="mb-2 fw-bold"> 69.000 </p>
                            </div>
                        <Divider></Divider>
                        </div>
                        <div className="receipt p-2 col-5 mb-2 mt-5 text-center border-danger mr-2">
                                <img className="mb-3" src="/images/receip.png" alt="" />
                                <p>Attache of Transaction</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 text-danger">
                <Form >
                        <Form.Group className="mb-3" controlId="form">
                            <Form.Control style={{backgroundColor:"whitesmoke"}} className="formInput" type="text" placeholder="Name"  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="form">
                            <Form.Control style={{backgroundColor:"whitesmoke"}} className="formInput" type="email" placeholder="Email"  />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="form">
                            <Form.Control style={{backgroundColor:"whitesmoke"}} className="formInput" type="number" placeholder="Phone" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="form">
                            <Form.Control style={{backgroundColor:"whitesmoke"}} className="formInput" type="number" placeholder="Postcode"  />
                        </Form.Group>

                        <Form.Group className="mb-3 text-dark" controlId="form">
                        <FloatingLabel controlId="floatingTextarea2" label="Address" style={{backgroundColor:"whitesmoke"}}>
                            <Form.Control
                            
                            className="formInput"
                            as="textarea"
                            style={{ height: '200px' }}
                            />
                        </FloatingLabel>
                        </Form.Group>
                        <div className="d-grid text-center mt-5">
                        <Button variant="danger" width="100%">
                            Pay
                        </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </Container>
    )
}

export default Cart