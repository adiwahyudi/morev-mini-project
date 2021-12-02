import React,{useState} from 'react'
import {Row,Col,Form,Button} from 'react-bootstrap'
import styles from './UserDetail.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'

import { storage } from "../../Firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Loading from '../Loading/Loading'

export default function UserDetail(props) {

    const {data,onUpdateUser,loadingUpdateUser} = props;
    const id_user = localStorage.getItem("user_id")
    const navigate = useNavigate()

    const [disable,setDisable] = useState(true)
    const [newData,setNewData] = useState({
        id:id_user,
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        avatar:""

    })

    const onChange = (e) => {
        if (e.target) {
            setNewData({
                ...newData, 
                [e.target.name]:e.target.value
            })
        }
    }
    const valid = newData.email === "" || newData.first_name === "" || newData.last_name === "" || newData.password === "" || newData.avatar === ""
    const onEdit = () => {
        if (disable === false) {
            if (!valid) {
                alert("Update Success")
                onUpdateUser({
                    ...newData
                })
                if (loadingUpdateUser) {
                    <Loading/>
                }
            } else {
                alert("Field Missing")
            }
        }
        setDisable(!disable)
    }

    const onChangeImage = (e) => {
        const file = e.target.files[0];
        const fileRef = ref(storage,`avatar_user/${file.name}`);
        uploadBytes(fileRef, file).then(() => {
          getDownloadURL(fileRef).then((url) => {
            setNewData({ ...newData, avatar: url });
          });
        });
      };


    const logOut = (e) => {
        e.preventDefault()
        console.log("cabs");
        localStorage.removeItem("user_id");
        localStorage.removeItem("first_name");
        navigate("/")
    }

    console.log(newData);
    return (
        <>
            <div className="" style={{paddingTop:75}}>
                <Row className="pt-3">
                    <Col xl={3} className="text-center mb-3">
                        <img 
                            className="mb-3 mt-3"
                            src={data.user[0].avatar}
                            width='200'
                            height='200'
                            alt="avatar-user"
                            style={{objectFit:"cover"}}
                        />
                        <Form.Group controlId="formFile" className="mt-3 mb-3">
                            <Form.Control
                                name="avatar"
                                onChange={onChangeImage}
                                disabled={disable}  
                                type="file" 
                            />
                        </Form.Group>
                    </Col>
                    <Col xl={6}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicFirstName">
                                <Form.Label style={{color:"white"}}>First Name</Form.Label>
                                <Form.Control 
                                    onChange={onChange}
                                    disabled={disable}
                                    name="first_name"
                                    type="text"
                                    placeholder={data.user[0].first_name} 
                                    className={styles['form-control']} 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicLastName">
                                <Form.Label style={{color:"white"}}>Last Name</Form.Label>
                                <Form.Control
                                    onChange={onChange}
                                    disabled={disable}
                                    type="text"
                                    name="last_name"
                                    placeholder={data.user[0].last_name} 
                                    className={styles['form-control']}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label style={{color:"white"}}>Email address</Form.Label>
                                <Form.Control 
                                    onChange={onChange}
                                    disabled={disable}
                                    name="email"
                                    type="email" 
                                    placeholder={data.user[0].email} 
                                    className={styles['form-control']} 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label style={{color:"white"}}>Password</Form.Label>
                                <Form.Control 
                                    onChange={onChange}
                                    disabled={disable}
                                    name="password"
                                    type="password" 
                                    placeholder="input new password.." 
                                    className={styles['form-control']}
                                />
                            </Form.Group>
                            <div className="justify-content-center pb-5">
                                <Button 
                                    className={`${styles['btn-suc']} d-flex justify-content-center primary`} 
                                    variant="success" 
                                    onClick={onEdit}> 
                                    {disable ? (
                                        "Edit Profile"
                                    ) : (
                                        "Save"
                                    )}
                                </Button>
                            </div>
                        </Form>
                    </Col>
                    <Col style={{marginBottom:50}}>
                        <Button
                            className="float-end"
                            style={{width:150,height:50}}
                            onClick={logOut}
                            variant="danger">
                                Logout 
                            <FontAwesomeIcon 
                                className="ms-2"
                                icon={faSignOutAlt}
                            />
                        </Button>
                    </Col>
                </Row>
            </div>
        </>
    )
}
