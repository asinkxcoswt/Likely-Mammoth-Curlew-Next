import React from 'react'
import Head from 'next/head'

import Navbar4 from '../components/navbar4'
import Hero9 from '../components/hero9'
import Features22 from '../components/features22'
import Gallery7 from '../components/gallery7'
import Team14 from '../components/team14'
import Contact3 from '../components/contact3'
import Footer15 from '../components/footer15'

const Page1 = (props) => {
  return (
    <>
      <div className="page1-container">
        <Head>
          <title>Page1 - Likely Mammoth Curlew</title>
          <meta property="og:title" content="Page1 - Likely Mammoth Curlew" />
        </Head>
        <div className="page1-navbar1">
          <Navbar4></Navbar4>
        </div>
        <div className="page1-hero2">
          <Hero9></Hero9>
        </div>
        <div className="page1-features3">
          <Features22></Features22>
        </div>
        <div className="page1-gallery4">
          <Gallery7></Gallery7>
        </div>
        <div className="page1-team5">
          <Team14></Team14>
        </div>
        <div className="page1-contact6">
          <Contact3></Contact3>
        </div>
        <div className="page1-footer11">
          <Footer15></Footer15>
        </div>
      </div>
      <style jsx>
        {`
          .page1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page1-navbar1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .page1-hero2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .page1-features3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .page1-gallery4 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .page1-team5 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .page1-contact6 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .page1-footer11 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default Page1
