import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from './containerBox.module.css'


type Props = {
  children?: ReactNode
  title?: string
}

const ContainerBox = ({ children, title = 'This is the default title' }: Props) => {

  return (
    <div className={styles.container}>

        {children}
    </div>
  )
}

export default ContainerBox