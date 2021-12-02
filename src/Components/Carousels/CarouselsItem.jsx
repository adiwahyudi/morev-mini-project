import React from 'react'
import styles from './CarouselsItems.module.css'

export default function CarouselsItem(props) {
    const {banner,name,year} = props;
    return (
        <div className={styles.caro}>
            <img 
                src={banner}
                alt={name}
                className={styles['ini-gambar']}
            />
            <p className="legend">{name} - {year}</p>
        </div>
    )
}
