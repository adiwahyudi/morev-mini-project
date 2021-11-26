import React from 'react'
import { Container,Form,Button, Row,Col} from 'react-bootstrap'
import NavigationBar from '../../Components/Navbar/NavigationBar'
import styles from './Login.module.css'

export default function Login() {
    return (
            <div className={styles.body} style={{color:"white",backgroundColor:"#1a1a1a"}}>
                <Container className="pt-5">
                    <NavigationBar/>
                    <h1 className="text-center mb-5 pt-5 fw-bold">Welcome to MO-REV!</h1>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" className={styles['form-control']} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" className={styles['form-control']}/>
                                </Form.Group>
                                <div className="justify-content-center pb-5">
                                    <Button className={`${styles['btn-suc']} d-flex justify-content-center primary`} variant="success" type="submit"> Login </Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
    )
}
