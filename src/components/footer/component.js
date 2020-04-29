import React from 'react';

import AFRImage from './partners/AFR.png';
import FSDUImage from './partners/fsdu.png';
import FSDKImage from './partners/fsdk.png';
import FSDZImage from './partners/fsdz.png';
import EfinaImage from './partners/efina.png';
import GeoPollImage from './partners/geopoll.png';
import MathematicaImage from './partners/mathematica.png';
import VizzualityImage from './partners/vizzuality.png';

const Footer = () => (
  <footer className="c-footer">
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Partners</h2>
          <ul className="partners-list">
            <li>
              <a href="http://afr.rw/" title="Access to finance Rwanda">
                <img className="partner-logo" src={AFRImage} alt="Access to finance Rwanda" />
              </a>
            </li>
            <li>
              <a href="https://fsduganda.or.ug/" title="FSDUganda">
                <img className="partner-logo" src={FSDUImage} alt="FSDUganda" />
              </a>
            </li>
            <li>
              <a href="https://fsdkenya.org/" title="FSDKenya">
                <img className="partner-logo" src={FSDKImage} alt="FSDKenya" />
              </a>
            </li>
            <li>
              <a href="https://www.fsdzambia.org/" title="FSDZambia">
                <img className="partner-logo" src={FSDZImage} alt="FSDZambia" />
              </a>
            </li>
            <li>
              <a href="https://www.efina.org.ng/" title="Enhancing Financial Innovation and access">
                <img className="partner-logo" src={EfinaImage} alt="Enhancing Financial Innovation and access" />
              </a>
            </li>
            <li>
              <a href="https://www.geopoll.com/" title="GeoPoll">
                <img className="partner-logo" src={GeoPollImage} alt="GeoPoll" />
              </a>
            </li>
            <li>
              <a href="https://mathematica.org/" title="Mathematica">
                <img className="partner-logo" src={MathematicaImage} alt="Mathematica" />
              </a>
            </li>
            <li>
              <a href="https://www.vizzuality.com/" title="Vizzuality">
                <img className="partner-logo" src={VizzualityImage} alt="Vizzuality" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
