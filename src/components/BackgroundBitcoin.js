import React from "react"

function BackgroundBitcoin () {
    return(
        <>
         <div className="background">
        <div className="col-2">
          <div className="rectangle-background-bitcoin-wallet"></div>
          <div className="rectangle-background-chart"></div>
          <div className="row no-space-between-inline-blocks">
            <div className="rectangle-background-buy-btc"></div>
            <div className="rectangle-background-sell-btc"></div>
          </div>
        </div>
        <div className="background-bottom"></div>
        <div className="background-header"></div>
        <div className="ui-iphone-x-time-signal-wifi-battery">
          <div className="row-3 group">
            <img
              className="icons-signal-wifi-battery"
              src={require("../images/icons_signal_wifi_battery.png")}
              alt=""
              width="232"
              height="40"
            />
            <p className="text">9:45</p>
          </div>
          <div className="bitcoin-wallet group">
            <div className="icon-bitcoin group">
              <div className="circle-holder">
                <img
                  className="icon-bitcoin-2"
                  src={require("../images/icon_bitcoin.png")}
                  alt=""
                  width="56"
                  height="82"
                />
              </div>
              <p className="bitcoin">Bitcoin</p>
              <p className="btc">BTC</p>
            </div>
            <div className="balance-bitcoinb group">
              <p className="text-2">3.529020 BTC</p>
              <p className="text-3">$19.153 USD</p>
            </div>
            <div className="group-2">
              - 2.32%
            </div>
            <img
              className="icon-arrow-down-detailed-statistic"
              src="images/icon_arrow_down_detailed_.png"
              alt=""
              width="109"
              height="33"
            />
          </div>
          <div className="sort-by-day-week-month-year group">
            <p className="day">Day</p>
            <div className="rectangle-selected-holder">
              Week
            </div>
            <p className="month">Month</p>
            <p className="year">Year</p>
          </div>
          <div className="row-2 group">
            <div className="buy-btc">
              <div className="circle-holder-2">
                <img
                  className="icon-dollar"
                  src={require("../images/icon_dollar_2.png")}
                  alt=""
                  width="40"
                  height="76"
                />
              </div>
              <p className="text-5">Buy BTC</p>
            </div>
            <div className="sell-btc">
              <div className="circle-holder-3">
                <img
                  className="icon-dollar-2"
                  src="images/icon_dollar.png"
                  alt=""
                  width="40"
                  height="76"
                />
              </div>
              <p className="text-6">Sell BTC</p>
            </div>
          </div>
          <div className="row-4 group">
            <img src={require("../images/icon_wallet.png")}alt="" width="88" height="87" />
            <img
              src={require("../images/icon_explore_coins.png")}
              alt=""
              width="88"
              height="88"
            />
            <img
              className="icon-notification"
              src={require("../images/icon_notification.png")}
              alt=""
              width="72"
              height="86"
            />
            <img src={require("../images/icon_settings.png")} alt="" width="88" height="88" />
          </div>
          <div className="iphone-x-bar-home"></div>
        </div>
        <div className="header group">
          <img
            className="icon-back"
            src={require("../images/icon_back.png")}
            alt=""
            width="47"
            height="80"
          />
          <p className="text-7">Bitcoin Wallet</p>
          <img
            className="icon-more"
            src={require("../images/icon_more.png")}
            alt=""
            width="17"
            height="80"
          />
        </div>
        <div className="chart group">
          <div className="price-lower-higher group">
            <div className="circle-magenta-lower"></div>
            <p className="text-8">Lower: $4.895</p>
            <p className="text-9">Higher: $6.857</p>
            <div className="circle-green-higher"></div>
          </div>
          <div className="design-chart group">
            <div className="wrapper-4">
              <div className="circle-chart"></div>
            </div>
            <div className="bitcoin-live-prize group">
              <div className="elipse-1"></div>
              <p className="text-10">1 BTC = $5.483</p>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default BackgroundBitcoin;