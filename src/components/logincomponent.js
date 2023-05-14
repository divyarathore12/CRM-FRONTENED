import React from "react";
import { Container,Row,Col,Form,Button } from "react-bootstrap";
export const LoginForm=({handleonchange,handleonsubmit,email,pass,frmswitch})=>{
    
    return (
        <Container >
            <Row>
                <Col>
                <h1 className="text-info text-center">Client Login</h1>
                < hr/>
                <Form onSubmit={handleonsubmit}>
                    <Form.Group>
                        <Form.Label className="marg">Email Address</Form.Label>
                        <Form.Control type="email" name="email" value={email} onChange={handleonchange} placeholder="Enter Your Email Address" ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="marg">Password</Form.Label>
                        <Form.Control type="Password" name="password" value={pass} onChange={handleonchange} placeholder="Enter Your Password" ></Form.Control>
                    </Form.Group>
                    <Button type="submit" on className="marg">Login</Button>
                </Form>
                <hr />
                <Row>
                    <Col>
                    <a href="#" className="text-decoration-none" onClick={()=>frmswitch("reset")}>Forgot Password?</a>
                    </Col>
                </Row>
                </Col>
            </Row>
        </Container>)
    

    

}