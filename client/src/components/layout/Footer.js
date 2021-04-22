import React, { Component } from 'react';
import footer1 from "../../img/footer.png";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="flex">
                    <div className="left">
                        <h6>
                            Husky Devs
                        </h6>
                        <p>
                            NE Pacific St, University, Washington 98105, United States
                        </p>
                    </div>
                    <div className="middle">
                        <img src={footer1} />
                    </div>
                    <div className="right">
                        <p>
                            Home
                        </p>
                        <p>
                            About
                        </p>
                        <p>
                            Map
                        </p>
                        <p>
                            Profile
                        </p>
                    </div>
                </div>
                
            </footer>
        )
    }
}
export default Footer;
