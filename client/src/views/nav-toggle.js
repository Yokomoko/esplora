import Snabbdom from 'snabbdom-pragma'
import { nativeAssetId } from '../const'
import { updateQuery } from '../util'

const staticRoot = process.env.STATIC_ROOT || ''
const hasCam = process.browser && navigator.mediaDevices && navigator.mediaDevices.getUserMedia
const otherTheme = { dark: 'light', light: 'dark' }

export default (t, theme, page) =>

<div className="toggle-container">
    <div className="burger-icon">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className="toggle-menu">
      <div className="toggle-menu-header">
        { process.browser ? <div className="switch-theme-icon toggle-theme"></div>
                        : <a href={page.pathname.substr(1) + updateQuery(page.query, { theme: otherTheme[theme] })} className="switch-theme-icon"></a>
        }
      </div>
      <div className="section1">
        <h4 className="menu-title">Wallets</h4>
        <div className="wallets-link">
            <p>GRS BlueWallet</p>
            <div>
            <a href="https://apps.apple.com/us/app/grs-bluewallet/id1518766083" target="_blank"><img src={`${staticRoot}img/icons/apple.png`} /><span>App Store</span></a>
            <a href="https://play.google.com/store/apps/details?id=org.groestlcoin.bluewallet" target="_blank"><img src={`${staticRoot}img/icons/google-play.png`} /><span>Google Play</span></a>
            </div>
        </div>
        <div className="wallets-link">
            <p>Electrum-GRS</p>
            <div>
              <a href="https://play.google.com/store/apps/details?id=org.groestlcoin.electrumgrs" target="_blank"><img src={`${staticRoot}img/icons/google-play.png`} /><span>Google Play</span></a>
              <a href="https://github.com/Groestlcoin/electrum-grs/releases/download/v4.1.5/electrum-grs-4.1.5-x86_64.AppImage"><img src={`${staticRoot}img/icons/linux.png`} /><span>Linux</span></a>
              <a href="https://www.groestlcoin.org/groestlcoin-electrum-wallet/" target="_blank">+2 more</a>
            </div>
        </div>
      </div>
      <div className="section2">
        <div className="link-list">
          <h4 className="menu-title">Explorers</h4>
          <ul>
            <li><a href="https://esplora.groestlcoin.org/" rel="external">Groestlcoin</a></li>
            <li><a href="https://esplora-test.groestlcoin.org/" rel="external" target="_blank">Groestlcoin Testnet</a></li>
            <li><a href="https://esplora-signet.groestlcoin.org/" rel="external">Groestlcoin Signet</a></li>
          </ul>
          <h4 className="menu-title">Developer Tools</h4>
          <ul>
            <li><a href="https://github.com/Groestlcoin/esplora/blob/master/API.md" target="_blank">API</a></li>
            <li><a href="tx/push">Broadcast Transactions</a></li>
            <li> { hasCam ? <a href="scan-qr">Scan QR</a> : ""}</li>
            <li> { process.env.IS_ELEMENTS ? <a href={`asset/${nativeAssetId}`}>Pegs</a> : ""}</li>
          </ul>
        </div>
      </div>
    </div>
</div>
