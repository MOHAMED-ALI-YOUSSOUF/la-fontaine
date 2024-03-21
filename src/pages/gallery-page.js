import React from 'react'
import PageHeader from '../components/common/page-header'
import Spacer from '../components/common/spacer'
import Gallery from '../components/gallery-page/galleries'
import ButtonToFacebook from '../components/gallery-page/buuton-to-fb'

const GalleryPage = () => {
  return (
    <div>
      <PageHeader title="Gallery"/>
      <Spacer/>
      <Gallery/>
      <Spacer/>
      <ButtonToFacebook/>
      <Spacer/>



    </div>
  )
}

export default GalleryPage
