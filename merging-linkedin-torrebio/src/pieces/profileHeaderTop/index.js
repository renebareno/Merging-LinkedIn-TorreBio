import React, { Component } from 'react'
import '../../index.css';
import protocol from '../../icons/protocol.png';
import oportunities from '../../icons/piece.png';
import bios from '../../icons/person.png';
import ProfileMenuVerticalHeader from "../../pieces/profileMenuVerticalHeader"

class ProfileHeaderTop extends Component {

  render() {
    return (
      <div class="flex-container">
      <div class="menuItemLarger" >
        <ProfileMenuVerticalHeader />
      </div>
        <div class="menuItemLarger" >
          Torre
        </div>
        <div>
          <input placeholder='Search' />
        </div>
        <div>
           <img src={oportunities} className="menuIcon" alt="oportunities" />
           <div class="menuLittleTittle"> Oportunities</div>
        </div>
        <div>
        <img src={bios} className="menuIcon" alt="bios" />
           <div class="menuLittleTittle">Bios</div>
        </div>
        <div>
           <img src={protocol} className="menuIcon" alt="protocol" />
           <div class="menuLittleTittle"> Protocol</div>
        </div>
      </div>
    )
  }
}
export default ProfileHeaderTop