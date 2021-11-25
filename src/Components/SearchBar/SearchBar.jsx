import React from 'react'
import styles from './SearchBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar() {
    return (
        <div className={`${styles['search-bar']} px-3`}>
          <form className="d-flex" >
              <input 
              type="text"
              placeholder="Search your movie here.."/>
            <FontAwesomeIcon icon={faSearch} color="white" size="2x" onClick={""} style={{marginLeft:10}}/>
          </form>
        </div>
    )
}
