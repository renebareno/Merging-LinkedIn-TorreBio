import React, { Component } from 'react'
import ReactDOM from "react-dom"
import { StickyContainer, Sticky } from 'react-sticky'
import Drawer from 'react-motion-drawer'
import { Header } from "../header"
import ProfileMenuVerticalHeader from "../../pieces/profileMenuVerticalHeader"
import ProfileHeaderHorizontalMenu from "../../pieces/profileHeaderHorizontalMenu"
import ProfileHeaderTop from "../../pieces/profileHeaderTop"

import { getUserTorreBio } from "../../services/Services";


class ProfileHeader extends Component {

  componentDidMount(){
    console.log('didMount')
    getUserTorreBio('renebareno')
      .then(user => {
        this.setState({ user })
      }).catch(error => {
        alert(`${error.message}, meanwhile using hasrcoded values;  `)
        this.setState( user = {"id":"AMWWnzMn","publicId":"renebareno","name":"René Arturo","email":"rene.bareno@gmail.com","hasEmail":true,"showEmail":true,"professionalHeadline":"A versatile Software Engineer with excellent communication, organization and coordination skills. I´m also a full stack developer with ten years of experience i","location":"Bogota D.C., Colombia","picture":"https://starrgate.s3.amazonaws.com:443/users/d637393413312fa00c1358b31372550daed2fc38/profile_BJJs0VW.jpg","theme":"blue900","phone":"","showPhone":true,"weight":0,"completion":1,"verified":true,"claimant":true,"flags":{"featureDiscovery":false,"canary":false,"onBoarded":false,"benefits":false,"fake":false,"importingLinkedin":false},"stats":{"recommendations":0,"recommendationsSent":0,"verifiers":0,"itemsVerified":0},"media":[],"links":[{"id":"OMvnY3M8","name":"twitter","address":"https://twitter.com/renebareno"},{"id":"XMq9zJM5","name":"facebook","address":"https://facebook.com/renebareno"}]}) 
      });
  }

  render() {
    return (
      <div >
        {/* <div>  <ProfileMenuVerticalHeader /></div> */}
        <ProfileHeaderTop/>
        <ProfileHeaderHorizontalMenu userName={this.state.user.name} />

      </div>

    )
  }
}
export default ProfileHeader