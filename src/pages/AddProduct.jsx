import React from "react";
import {Navbar, Container, Nav, Button, Modal, Form,} from 'react-bootstrap'

function AddProduct() {
    return(
        <Container>
            
            <div className="row">
                <div className="col-7 mt-5">
                    <h1 className="mt-5 mb-5 text-danger">Product</h1>
                    <Form className="align-item-center">
                        <Form.Group className="mb-4 mt-5" controlId="formToppingName">
                            <Form.Control style={{backgroundColor:"whitesmoke"}} className='formInput' type="email" placeholder="Product Name"  />
                        </Form.Group>
                        <Form.Group className="mb-4 mt-4" controlId="formToppingPrice">
                            <Form.Control style={{backgroundColor:"whitesmoke"}} className='formInput' type="password" placeholder="Price" />
                        </Form.Group>
                        <Form.Group className="mb-4 mt-4" controlId="formToppingPhoto">
                            <div className="input-image form-group " style={{backgroundColor:"whitesmoke"}}>
                                <label for="inputImage" className="d-flex justify-content-between align-text-center">
                                    <p className="m-0">Product Photo</p>
                                    <img src="/images/imageIcon.png" alt="" width="20px" height='30px'  />
                                </label>
                                <input type="file" id="inputImage" hidden />
                            </div>
                        </Form.Group>
                        <div className="d-grid col-10 mx-auto">
                        <Button variant="danger" width="100%" className="">
                            Add Product
                        </Button>
                        </div>
                        
                    </Form>
                </div>
                <div className="col-5 pt-5 mt-3">
                    <img src="/images/addproduct.png" alt="" width="100%" />
                </div>
            </div>
        </Container>
    )
}

export default AddProduct