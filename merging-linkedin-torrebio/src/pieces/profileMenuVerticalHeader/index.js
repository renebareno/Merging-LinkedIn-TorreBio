import React, { Component } from "react"
import { slide as Menu } from 'react-burger-menu'

import menuThreeLineIcon from "../../icons/menuThreeLineIcon.png"


class ProfileMenuVerticalHeader extends Component {

	showSettings(event) {
		event.preventDefault();
	}

	render() {
		return (
			<div style={{width: 36 , height:36, background:'white'}} >
				<img src={menuThreeLineIcon} alt="menu" />
				<Menu>
					<a id="Sign in/Sign up" className="menu-item" href="#">Sign in/Sign up</a>
					<a id="Request features" className="menu-item" href="#">Request features</a>
					<a id="code" className="menu-item" href="#">code</a>
					<a id="API for developers" className="menu-item" href="#">API for developers</a>
					<a id="Helps" className="menu-item" href="#">Helps</a>
					<a id="code" className="menu-item" href="#">code</a>
					<a id="Opportunities" className="menu-item" href="#">Opportunities</a>
					<a id="Bios" className="menu-item" href="#">Bios</a>
					<a id="Protocol" className="menu-item" href="#">Protocol</a>
				</Menu>
			</div>
		)
	}
}

export default ProfileMenuVerticalHeader;