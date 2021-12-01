import React from 'react'
import {Form,Col,InputGroup,FormControl} from 'react-bootstrap'
import styles from './SearchBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar() {
    return (
        <div className={`${styles['search-bar']} px-3 pb-4`}>
            {/* <InputGroup className="mb-3">
              <FormControl
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
              />
            </InputGroup> */}
          {/* <Form>
            <Form.Group className="mb-3" controlId="formBasicInput">
              <Form.Control 
                type="text" 
                placeholder="Search your movie here.." 
              />
                <FontAwesomeIcon icon={faSearch} color="white" size="2x" onClick={""}/>
            </Form.Group>
          </Form> */}
          <form className="d-flex" >
              <input 
                type="text"
                placeholder="Search your movie here.."/>
            <FontAwesomeIcon 
              icon={faSearch} 
              color="white" 
              size="2x" 
              style={{marginLeft:10}}
            />
          </form>
        </div>
    )
}
