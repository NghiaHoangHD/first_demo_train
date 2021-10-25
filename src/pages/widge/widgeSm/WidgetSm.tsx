import React from 'react'
import '../../../assets/scss/pages/widgetSm.scss'
import { Visibility } from '@material-ui/icons'

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <h3 className="widgetSmTitle">New Join Membership</h3>
      <div className="widgetSmInfoStaff">
        <ul className="widgetSmInfoList">
          <li className="widgetSmInfoItem">
            <img
              src="https://i.pinimg.com/originals/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg"
              alt=""
              className="widgetSmAvatar"
            />

            <div className="widgetSmInfoWorkOfStaff">
              <span className="widgetSmInfoName">Nghia Hoang</span>
              <span className="widgetSmInfoPosition">Software engineer</span>
            </div>

            <button className="widgetSmInfoDisplay">
              <Visibility className="widgetSmIconDisplay" />
              Display
            </button>
          </li>

          <li className="widgetSmInfoItem">
            <img
              src="https://i.pinimg.com/originals/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg"
              alt=""
              className="widgetSmAvatar"
            />

            <div className="widgetSmInfoWorkOfStaff">
              <span className="widgetSmInfoName">Nghia Hoang</span>
              <span className="widgetSmInfoPosition">Software engineer</span>
            </div>

            <button className="widgetSmInfoDisplay">
              <Visibility className="widgetSmIconDisplay" />
              Display
            </button>
          </li>

          <li className="widgetSmInfoItem">
            <img
              src="https://i.pinimg.com/originals/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg"
              alt=""
              className="widgetSmAvatar"
            />

            <div className="widgetSmInfoWorkOfStaff">
              <span className="widgetSmInfoName">Nghia Hoang</span>
              <span className="widgetSmInfoPosition">Software engineer</span>
            </div>

            <button className="widgetSmInfoDisplay">
              <Visibility className="widgetSmIconDisplay" />
              Display
            </button>
          </li>

          <li className="widgetSmInfoItem">
            <img
              src="https://i.pinimg.com/originals/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg"
              alt=""
              className="widgetSmAvatar"
            />

            <div className="widgetSmInfoWorkOfStaff">
              <span className="widgetSmInfoName">Nghia Hoang</span>
              <span className="widgetSmInfoPosition">Software engineer</span>
            </div>

            <button className="widgetSmInfoDisplay">
              <Visibility className="widgetSmIconDisplay" />
              Display
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
