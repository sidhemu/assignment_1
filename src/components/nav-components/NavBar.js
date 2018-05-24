import React, { Component } from 'react';
import './Nav.css';


class NavBar extends Component { 
    constructor(props) { 
        super(props);
        this.state = {

        }
    }


    render() { 
        return (
            <div className="main-navBar">
                <div className="inner-part">   
                    <div className="content title-bar">
                        <div>
                            <header>Catergory</header>
                        </div>
                        <div>
                            <h2>
                                Page Heading
                            </h2>
                        </div>
                    </div>
                    <div className="content button-bar">
                        <button>Button</button>
                    </div>
                </div>
            </div>

        )
    }
}


export default NavBar;