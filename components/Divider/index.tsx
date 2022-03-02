import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from './divider.module.css'


type Props = {
  children?: ReactNode
}

const Divider = ({ children }: Props) => {

  return (
    <hr></hr>
  )
}

export default Divider