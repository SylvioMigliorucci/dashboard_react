import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from './flexrow.module.css'


type Props = {
  children?: ReactNode
}

const FlexRow = ({ children }: Props) => {

  return (
    <div className={styles.container} >
      {children}
    </div>
  )
}

export default FlexRow