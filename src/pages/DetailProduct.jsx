import React from "react"
import { Card, Container, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

function DetailProduct() {
    return(
        <Container>
            <div className="row">
                <div className="col-4 pt-5 mt-3">
                    <img src="/images/addproduct.png" alt="" width="100%" />
                </div>
                <div className="col-8 pt-5 mt-3 text-danger">
                    <h1 className="fw-bold mb-3">Ice Coffee Palm Sugar</h1>
                    <p className="fs-5 mb-5">Rp. 27.000</p>
                    <div className="row text-center mt-5">
                        <div className="col-3">
                            <img src="/images/bubletea.png" className="m-3" alt="" width= '90px' height= '90px;' />
                            <p>Bubble Tea Gelatin</p>
                        </div>
                        <div className="col-3">
                            <img src="/images/manggo.png" className="m-3" alt="" width= '90px' height= '90px;' />
                            <p>Manggo</p>
                        </div>
                        <div className="col-3">
                            <img src="/images/greencoconut.png" className="m-3" alt="" width= '90px' height= '90px;' />
                            <p>Green Coconut</p>
                        </div>
                        <div className="col-3">
                            <img src="/images/bobamanggo.png" className="m-3" alt="" width= '90px' height= '90px;' />
                            <p>Boba Manggo</p>
                        </div>
                        <div className="col-3">
                            <img src="/images/berryboba.png" className="m-3" alt="" width= '90px' height= '90px;' />
                            <p>Bill Berry Boba</p>
                        </div>
                        <div className="col-3">
                            <img src="/images/kiwipopping.png" className="m-3" alt="" width= '90px' height= '90px;' />
                            <p>Kiwi Popping Pearl</p>
                        </div>
                        <div className="col-3">
                            <img src="/images/matcha.png" className="m-3" alt="" width= '90px' height= '90px;' />
                            <p>Matcha Cantaloupe</p>
                        </div>
                        <div className="col-3">
                            <img src="/images/starwberry.png" className="m-3" alt="" width= '90px' height= '90px;' />
                            <p>Strawberry Popping</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between fw-bold mt-5 mb-5">
                        <h2>Total</h2>
                        <h2>27.000</h2>
                    </div>
                    <Link to="/cart"><div className="addCart d-grid text-center mt-5">
                        <Button variant="danger" width="100%">
                           Add to Cart 
                        </Button>
                    </div></Link> 
                </div>
            </div>
        </Container>
    )
}

export default DetailProduct 