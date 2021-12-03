import React from 'react'
import styles from './SearchBar.module.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar(props) {

  const {onChangeInput} = props;

  let data;

  return (  
      <div className={`${styles['search-bar']} px-3 pb-4`}>
        <form className="d-flex" >
            <input 
              value={data}
              onChange={onChangeInput}
              type="text"
              placeholder="Search your movie here.."/>
          {/* <FontAwesomeIcon 
            icon={faSearch} 
            color="white" 
            size="2x" 
            style={{marginLeft:10}}
          /> */}
        </form>
      </div>
  )
}
