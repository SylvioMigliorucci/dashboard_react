import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from './button.module.css'


type Props = {
  children?: ReactNode
  title?: string
}

const Button = ({ children, title = 'This is the default title' }: Props) => {

  return (
    <button className={styles.container} >
      {title}
    </button>
  )
}

export default Button