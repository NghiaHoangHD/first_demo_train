import { Button } from '@material-ui/core'
import React from 'react'
import '../../../assets/scss/pages/widgetLg.scss'

export default function WidgetLg() {
  // var type: string
  //   const Button = ({ type }) => {
  //     return <button className={'widgetLgButton' + type}>{type}</button>
  //   }
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTableTr">
          <th className="widgetLgTableTh">Customer</th>
          <th className="widgetLgTableTh">Date</th>
          <th className="widgetLgTableTh">Amount</th>
          <th className="widgetLgTableTh">Status</th>
        </tr>
        <tr className="widgetLgTableTr">
          <td className="widgetLgTableUser">
            <img
              src="https://cdn.pixabay.com/photo/2021/04/14/16/01/beauty-6178759_960_720.jpg"
              alt=""
              className="widgetLgTableAvatar"
            />
            <span className="widgetLgTableUserName">Nghia Hoang</span>
          </td>
          <td className="widgetLgTableDate">30 Sep 2021</td>
          <td className="widgetLgTableAmount">$122.22</td>
          <td className="widgetLgTableStatus">
            <Button className="widgetLgInfoDisplay" />
          </td>
        </tr>

        <tr className="widgetLgTableTr">
          <td className="widgetLgTableUser">
            <img
              src="https://cdn.pixabay.com/photo/2021/04/14/16/01/beauty-6178759_960_720.jpg"
              alt=""
              className="widgetLgTableAvatar"
            />
            <span className="widgetLgTableUserName">Nghia Hoang</span>
          </td>
          <td className="widgetLgTableDate">30 Sep 2021</td>
          <td className="widgetLgTableAmount">$122.22</td>
          <td className="widgetLgTableStatus">
            <Button className="widgetLgInfoDisplay" />
          </td>
        </tr>

        <tr className="widgetLgTableTr">
          <td className="widgetLgTableUser">
            <img
              src="https://cdn.pixabay.com/photo/2021/04/14/16/01/beauty-6178759_960_720.jpg"
              alt=""
              className="widgetLgTableAvatar"
            />
            <span className="widgetLgTableUserName">Nghia Hoang</span>
          </td>
          <td className="widgetLgTableDate">30 Sep 2021</td>
          <td className="widgetLgTableAmount">$122.22</td>
          <td className="widgetLgTableStatus">
            <Button className="widgetLgInfoDisplay" />
          </td>
        </tr>

        <tr className="widgetLgTableTr">
          <td className="widgetLgTableUser">
            <img
              src="https://cdn.pixabay.com/photo/2021/04/14/16/01/beauty-6178759_960_720.jpg"
              alt=""
              className="widgetLgTableAvatar"
            />
            <span className="widgetLgTableUserName">Nghia Hoang</span>
          </td>
          <td className="widgetLgTableDate">30 Sep 2021</td>
          <td className="widgetLgTableAmount">$122.22</td>
          <td className="widgetLgTableStatus">
            <Button className="widgetLgInfoDisplay" />
          </td>
        </tr>
      </table>
    </div>
  )
}
