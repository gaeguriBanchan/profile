import React, { useEffect } from 'react'
import Layout from '../common/Layout'

const Community = () => {
  useEffect(()=>{
    console.log('mount: 컴포넌트 생성');
    return()=>{
      console.log('unmount: 컴포넌트 제거');
    }
  },[])
  return (
    <Layout title={'Community'}>Community</Layout>
  )
}

export default Community