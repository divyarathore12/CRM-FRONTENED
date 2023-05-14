import React from "react";
import { Container,Row,Col,Form,Button } from "react-bootstrap";
export const ResetPassword=({handleonchange,handleonResetsubmit,email,frmswitch})=>{
    
    return (
        <Container >
            <Row>
                <Col>
                <h1 className="text-info text-center">Reset Password</h1>
                < hr/>
                <Form onSubmit={handleonResetsubmit}>
                    <Form.Group>
                        <Form.Label className="marg">Email Address</Form.Label>
                        <Form.Control type="email" name="email" value={email} onChange={handleonchange} placeholder="Enter Your Email Address" ></Form.Control>
                    </Form.Group>
                    
                    <Button type="submit" on className="marg">Reset Password</Button>
                </Form>
                <hr />
                <Row>
                    <Col>
                    <a href="#" className="text-decoration-none" onClick={()=>frmswitch("login")}>Logging now</a>
                    </Col>
                </Row>
                </Col>
            </Row>
        </Container>)
    

    

}