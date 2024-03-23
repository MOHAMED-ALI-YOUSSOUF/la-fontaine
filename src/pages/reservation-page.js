import React from 'react'
import PageHeader from '../components/common/page-header'
import Spacer from '../components/common/spacer'
import Gallery from '../components/gallery-page/galleries'
import ButtonToFacebook from '../components/gallery-page/buuton-to-fb'
import Reservation from '../components/reservation'

const ReservationPage = () => {
  return (
    <div>
      <PageHeader title="reservation"/>
      <Spacer/>
      <Reservation/>
      <Spacer/>
      <ButtonToFacebook/>
      <Spacer/>



    </div>
  )
}

export default ReservationPage
