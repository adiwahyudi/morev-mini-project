import {useEffect} from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from "react-router"
import Loading from '../../Components/Loading/Loading'
import NavigationBar from "../../Components/Navbar/NavigationBar"
import UserDetail from '../../Components/UserDetail/UserDetail'
import useGetMyInformationById from '../../Hooks/useGetMyInformationById'
import useUpdateUser from '../../Hooks/useUpdateUser'

function Profile() {

    const id_user = localStorage.getItem("user_id")

    const navigate = useNavigate()

    const {dataInfo,loadingInfo,errorInfo} = useGetMyInformationById(id_user)
    const {updateUser,loadingUpdateUser} = useUpdateUser()

    const onUpdateUser = (data) => {
        console.log("onUpdateUser",data);
        updateUser({
            variables:{
                ...data,
            }
        })
    }
    
    useEffect(() => {
        if (localStorage.getItem("user_id") === null ){
            navigate("/")
        }
    }, [navigate] )

    if (errorInfo) {
        console.log(errorInfo);
        return <h1>Error</h1>
    }
    return (
        <>
            <NavigationBar/>
            <div className="isi">
                <Container>
                    {loadingInfo ? (
                        <Loading/>
                    ) : ( 
                        <UserDetail data={dataInfo} onUpdateUser={onUpdateUser} onLoadingUpd={loadingUpdateUser}/>
                    )}
                </Container>
            </div>
        </>
    )
}

export default Profile