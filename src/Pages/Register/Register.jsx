import React,{useState} from 'react'
import { Container,Row,Col,Form,Button} from 'react-bootstrap'
import NavigationBar from '../../Components/Navbar/NavigationBar'
import useCreateUser from '../../Hooks/useCreateUser'
import styles from './Register.module.css'
import {useNavigate} from 'react-router-dom'
import Loading from '../../Components/Loading/Loading'

export default function Register() {

    const default_avatar = "https://firebasestorage.googleapis.com/v0/b/morev-alterra.appspot.com/o/avatar_user%2Fdefault-avatar.png?alt=media&token=3b53a5a1-f286-4552-ac42-c6cef45c8555"
    const {createUser,loadingCreateUser} = useCreateUser()
    const navigate = useNavigate()
    
    const [data,setData] = useState({
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        avatar:default_avatar
    })

    const onCreateUser = (val) => {
        createUser({
            variables:{
                ...val,
            }
        })
    }

    const onChange = (e) => {
        if (e.target) {
            setData({
                ...data, 
                [e.target.name]:e.target.value
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/login")
        if(loadingCreateUser) {
            <Loading/>
        }
        onCreateUser({ 
            ...data,
        })
        alert("sucess")
    }
    return (
        <div className={styles.isi}>
            <NavigationBar/>
            <Container className="pt-5">
                <Row>
                    <h1 className="text-center mb-5 pt-5 fw-bold" style={{color:"white"}}>Register to MO-REV!</h1>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control 
                                        onChange={onChange}
                                        name="first_name"
                                        placeholder="John" 
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control 
                                        onChange={onChange}
                                        name="last_name"
                                        placeholder="Doe" 
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control 
                                        onChange={onChange}
                                        name="email"
                                        type="email" 
                                        placeholder="example@mail.com" 
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        onChange={onChange}
                                        name="password"
                                        type="password" 
                                        placeholder="Password" 
                                    />
                                </Form.Group>
                            </Form>
                            <div className="text-center pt-3">
                                <Button 
                                    onClick={handleSubmit}
                                    className={`${styles['btn-suc']} px-4 primary float-end`} 
                                    variant="success" 
                                    type="submit"> 
                                    Register 
                                </Button>
                            </div>
                        </Col>
                    </Row>

            </Container>
        </div>
    )
}
