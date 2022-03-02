import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { css, cx } from '@emotion/css'
import Button from '../components/Button'
import SideBar from '../components/SideBar'
import FlexRow from '../components/FlexRow'
import ContainerBox from '../components/ContainerBox'

const color = 'white'
const Home: NextPage = () => {
  return (
    <>
    
    <FlexRow>
      
      <SideBar></SideBar>
      <FlexRow>
        <ContainerBox>
            <h1>Hello World</h1>
            <Button title='Meu botão'></Button>
      
        </ContainerBox>
      </FlexRow>
    </FlexRow>
    
   
    </>
  )
}

export default Home
