import { Link } from 'gatsby'
import React from 'react'
import Head from '../components/head'
import Layout from '../components/layout/layout'

const NotFound = () => {
  return (
  <Layout>
    <Head title='404' />
    <h1>NOT FOUND :(</h1>
    <p><Link to="/">Head home!</Link></p>
  </Layout>
  )
}

export default NotFound
