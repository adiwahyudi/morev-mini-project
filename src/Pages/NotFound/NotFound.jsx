import React from 'react'
import { Row,Col, Container,Button } from 'react-bootstrap'
import styles from './NotFound.module.css'
import JohnTravolta from '../../Images/john-travolta-404.png'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className={styles['not-found']}>
            <Container className="pt-5 mt-5">
            <Row>
                <Col>
                    <img
                        src={JohnTravolta}
                        alt="404"
                    />
                </Col>
                <Col>
                    <div className={`${styles.message}`}>
                        <h1 className="fw-bold mb-2"> YEAH, WE'RE CONFUSED, TOO.</h1>
                        <h2 className="fw-light mb-3">LOOKS LIKE THIS PAGE DOESN'T EXIST</h2>
                        <Link to="/">
                        <Button className="mb-3 fw-light" variant="light"> GO HOME </Button>
                        </Link>
                        <h6 className="fw-light fst-italic pb-3">AND THATS ALL YOU'RE GONNA DO</h6>
                    </div>
                </Col>    
            </Row>
            </Container>
        </div>
    )
}
