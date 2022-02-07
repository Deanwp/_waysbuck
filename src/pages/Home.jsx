import React from "react"
import { Card, Container} from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
    return(
        <Container>
            <div>
                <img src="/images/bg-main.png" alt="" width="100%" />
                <div style={{marginLeft: '100px', position:'absolute', top: '15%'}}className="d-grid text-white col-md-6 col-sm-12 gap-4">
                    <h1 style={{fontSize: '60px'}} className="fw-bold text-white">WAYSBUCK</h1>
                    <p style={{fontSize:'24px'}}>Things are changing, but we’re still here for you</p>
                    <p style={{fontSize:'18px'}} className="col-md-10 col-xxl-6">We have temporarily closed our in-store cafes, but select grocery and drive-thru locations remaining open. Waysbucks Drivers is also available <br/> <br/>Let’s Order...</p>
                </div>
            </div>
            <div className="row align-items-start p-0 mt-5 ">
                <h1 className="text-danger fw-bold mb-4">Lets Order</h1>
                   <div className="col-md-3 col-sm-12">
                   <Link to="/detailproduct"><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/images/Product1.png" />
                        <Card.Body>
                            <Card.Title>Ice Coffee Palm Sugar</Card.Title>
                            <Card.Text> Rp.27.000 </Card.Text>
                        </Card.Body>
                    </Card></Link>
                   </div>
                   <div className="col-md-3 col-sm-12">
                   <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/images/Product2.png" />
                        <Card.Body>
                            <Card.Title>Ice Coffee Green Tea</Card.Title>
                            <Card.Text> Rp.31.000 </Card.Text>
                        </Card.Body>
                    </Card>
                   </div>
                   <div className="col-md-3 col-sm-12">
                   <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/images/Product3.png" />
                        <Card.Body>
                            <Card.Title>Hanami Latte</Card.Title>
                            <Card.Text> Rp.29.000 </Card.Text>
                        </Card.Body>
                    </Card>
                   </div>
                   <div className="col-md-3 col-sm-12">
                   <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/images/Product4.png" />
                        <Card.Body>
                            <Card.Title>Clepon Coffee</Card.Title>
                            <Card.Text> Rp.28.000 </Card.Text>
                        </Card.Body>
                    </Card>
                   </div>
                </div>
        </Container>
    )
  }
  
  export default Home;