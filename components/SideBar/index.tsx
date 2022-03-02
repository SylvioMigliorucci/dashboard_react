import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { ReactNode, useState } from 'react'
import Divider from '../Divider'

import styles from './sidebar.module.css'


type Props = {
  children?: ReactNode
  title?: string
}

const SideBar = ({ children, title = 'Dashboard' }: Props) => {

  const [toggle, setToggle] = useState(true)

  function toggleMenu(){
    setToggle(!toggle)
  }

  return (
    <div className={`${styles.container} ${toggle === true ? styles.active : ''}`} >
      <div className={styles.title_section} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size="2x" />
        <div className={`${styles.title}`}>
          {title}
        </div>
      </div>
  
      <Divider></Divider>
      <div className={styles.menu_list}>
        <ul>
          <li className={styles.menu_list_item}>
                {/* <div  className={styles.menu_list_item}> */}
                <FontAwesomeIcon icon={faBars} size="1x"  />
                  <div className={styles.menu_list_item_name}>
                    <Link href="#" >
                          Home
                    </Link>
                  </div>
                {/* </div> */}
          </li>
          <li className={styles.menu_list_item}>
                {/* <div  className={styles.menu_list_item}> */}
                <FontAwesomeIcon icon={faBars} size="1x"  />
                  <div className={styles.menu_list_item_name}>
                    <Link href="#" >
                          Dashboard
                    </Link>
                  </div>
                {/* </div> */}
          </li>
        <Divider></Divider>
        <div  className={styles.menu_list_item}>
          <Link href="#" >
            Current
          </Link>
        </div>
        <div  className={styles.menu_list_item}>
          <Link href="#" >
            Customers
          </Link>
        </div>
        </ul>
      </div>
      

    </div>
  )
}

export default SideBar