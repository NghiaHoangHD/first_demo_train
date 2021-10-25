import React from 'react'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import '../../assets/scss/pages/featureInfo.scss'
export default function FeatureInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,124</span>
          <span className="featuredMoneyRate">
            -2.22
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <div className="featuredSub">Compare to last month</div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,124</span>
          <span className="featuredMoneyRate">
            -2.22
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <div className="featuredSub">Compare to last month</div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,124</span>
          <span className="featuredMoneyRate">
            +2.22
            <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <div className="featuredSub">Compare to last month</div>
      </div>
    </div>
  )
}
