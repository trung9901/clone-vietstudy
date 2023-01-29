import React from 'react'
import styles from '../../pages/courses/courses.module.css'
import {FaMapMarkerAlt} from 'react-icons/fa'
import Link from 'next/link'
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_top}>
        <div className={styles.header_top_address}>
          <div className={styles.header_top_address_icon}>
            <FaMapMarkerAlt/>
          </div>
          <p>123 6th St. Melbourne, FL 32904</p>
        </div>
      </div>
      <div className={styles.headerbt}>
        <div className={styles.logo}>
          <Link href={`/`}>
           <img src="https://res.cloudinary.com/hungtv/image/upload/v1664512804/logo_netviet-03_vjuvaw.png" alt="" />
          </Link>
        </div>
        <div className={styles.headerbt_nav}>
          <nav>
            <ul>
              <li><Link href={`/`}><a>Home</a></Link></li>
              <li><Link href={`/`}><a>ABOUT US</a></Link></li>
              <li><Link href={`/`}><a>FEATURES</a></Link></li>
              <li><Link href={`/`}><a>LANGUAGE CORNER</a></Link></li>
              <li><Link href={`/`}><a>PRICING</a></Link></li>
              <li><Link href={`/`}><a>CONTACTS</a></Link></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.header_title}>
        <div className={styles.header_title_copy}>
          <div>
            <h3>Language Studies</h3>
          </div>
          <div>
            <Link href={`/`}>Home - </Link>
            <span>Checkout</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header