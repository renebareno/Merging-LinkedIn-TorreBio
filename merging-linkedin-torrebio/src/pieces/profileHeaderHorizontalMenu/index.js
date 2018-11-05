import React, { Component } from 'react'
import ReactDOM from "react-dom"
import '../../index.css';

class ProfileHeaderHorizontalMenu extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="flex-container">
                <div>
                    <div class="menuCenterBlue"> {this.props.userName}</div>
                </div>
                <div>
                    <div class="menuCenterBlue">ASPIRATIONS</div>
                </div>
                <div>
                    <div class="menuCenterBlue">RECOMMENDATIONS</div>
                </div>
                <div>
                    <div class="menuCenterBlue">ACHIEVEMENTS /AWARDS</div>
                </div>
                <div>
                    <div class="menuCenterBlue">EDUCATION</div>
                </div>

            </div>

        )
    }
}
export default ProfileHeaderHorizontalMenu