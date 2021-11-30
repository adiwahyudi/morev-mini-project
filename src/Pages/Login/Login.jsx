import React, {useState} from 'react'
import { useNavigate } from 'react-router'
import { Container,Form,Button, Row,Col} from 'react-bootstrap'
import NavigationBar from '../../Components/Navbar/NavigationBar'
import styles from './Login.module.css'
import useGetMyInformationLogin from '../../Hooks/useGetMyInformationLogin'

export default function Login() {

    const navigate = useNavigate();

    const {getMyInformationLogin,data,error} = useGetMyInformationLogin();

    const [input,setInput] = useState({
        email:"",
        password:""
    })

    const onChange = (e) => {
        if (e.target) {
            setInput({
                ...input, 
                [e.target.name]:e.target.value})
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        getMyInformationLogin({variables: {...input}})
        if(error) {
            console.log(error);
        }
    }
    if (data !== undefined) {
        localStorage.setItem("user_id",data?.user[0].id)
        localStorage.setItem("first_name",data?.user[0].first_name)
        navigate("/")
        // localStorage.setItem("last_name",data?.user[0].last_name)
        // localStorage.setItem("user_id",data?.user[0].id)
        // localStorage.setItem("user_id",data?.user[0].id)
    }
    
    return (
            <div className={styles.body} style={{color:"white",backgroundColor:"#1a1a1a"}}>
                <Container className="pt-5">
                    <NavigationBar/>
                    <Row>
                    <h1 className="text-center mb-5 pt-5 fw-bold">Welcome to MO-REV!</h1>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form onSubmit={onSubmit} >
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control 
                                        name="email"
                                        type="email" 
                                        placeholder="Enter email" 
                                        onChange={onChange} 
                                        className={styles['form-control']} 
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        name="password"
                                        type="password" 
                                        placeholder="Password" 
                                        onChange={onChange} 
                                        className={styles['form-control']}
                                    />
                                </Form.Group>
                                <div className="justify-content-center pb-5">
                                    <Button className={`${styles['btn-suc']} d-flex justify-content-center primary`} variant="success" type="submit" onClick={getMyInformationLogin}> Login </Button>
                                    
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
    )
}
