import React, { PureComponent } from "react";

class FooterComponent extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer-agile">
		        <div className="container">
                    <div className="footer-btm-agileinfo">
                        <div className="col-md-12 col-xs-12 footer-grid footer-review">
                            <div className="copy-w3lsright"> 
                                <p>© 2018 <a href="https://www.linkedin.com/in/agung-dwi-prasetyo/" target="_blank">Agung Dwi Prasetyo</a> | Build with <a href="https://nextjs.org/" target="_blank">Next.js</a></p>
                            </div> 
                        </div> 
                        <div className="clearfix"> </div>
                    </div>   
                </div>
            </div> 
        );
    }
}

export default FooterComponent;