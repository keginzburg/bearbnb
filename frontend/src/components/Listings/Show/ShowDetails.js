import Reservation from "../../Reservations";

import medal from './assets/superbear-medal.png';
import ac from './assets/ac-icon.png';
import backyard from './assets/backyard-icon.png';
import hairdryer from './assets/hairdryer-icon.png';
import kitchen from './assets/kitchen-icon.png';
import parking from './assets/parking-icon.png';
import pets from './assets/pets-icon.png';
import wifi from './assets/wifi-icon.png';

import './ShowDetails.css';

const ShowDetails = () => {
    return (
        <div className="show-details-container">
            <div className="show-details-1">
                <div className="show-details-1-info">
                    <h3>Bear hosted by HostName</h3>
                    <div className="show-details-1-info-gbbb">
                        <h4>4 guests</h4>
                        <div className="div-dot">•</div>
                        <h4>2 bedrooms</h4>
                        <div className="div-dot">•</div>
                        <h4>2 beds</h4>
                        <div className="div-dot">•</div>
                        <h4>1 bath</h4>
                    </div>
                </div>
                <div className="show-details-1-host">
                    <i className="fa-solid fa-person"></i>
                </div>
            </div>
            <div className="show-details-2">
                <div className="show-details-2-info">
                    <div className="superbear-icon">
                            <img src={medal} alt='Superbear Icon'/>
                    </div>
                    <div className="show-details-2-amen">
                        <h3>Frank is a Superbear</h3>
                        <h4>Superbears are experienced, highly rated bears who are committed to providing great stays for guests.</h4>
                    </div>
                </div>
            </div>
            <div className="show-details-3">
                <div className="show-details-3-info">
                    <h3>Let all your day-to-day worries fade away in this beautifully remodeled A-frame bear! Our 2 bedrooms can sleep 4 adults, and with our queen mattress and couch, you can sleep up to 4! Relax by the fire pit out back, all materials are provided. The large, custom dinner table seats 4 comfortably with lots of room to hang, play games, watch movies and more.</h3>
                </div>
            </div>
            <div className="show-details-4">
                <div className="show-details-4-header">
                    <h3>What this bear offers</h3>
                </div>
                <div className="show-details-4-info">
                    <div className="show-details-4-amen">
                        <img src={ac} />
                        <h3>AC Unit Included</h3>
                    </div>
                    <div className="show-details-4-amen">
                        <img src={backyard} />
                        <h3>Private Backyard</h3>
                    </div>
                    <div className="show-details-4-amen">
                        <img src={hairdryer} />
                        <h3>Hair Dryer</h3>
                    </div>
                    <div className="show-details-4-amen">
                        <img src={kitchen} />
                        <h3>Kitchen</h3>
                    </div>
                    <div className="show-details-4-amen">
                        <img src={parking} />
                        <h3>Free Parking</h3>
                    </div>
                    <div className="show-details-4-amen">
                        <img src={pets} />
                        <h3>Pets allowed</h3>
                    </div>
                    <div className="show-details-4-amen">
                        <img src={wifi} />
                        <h3>Wifi</h3>
                    </div>
                </div>
            </div>
            <Reservation />
        </div>
    );
};

export default ShowDetails;