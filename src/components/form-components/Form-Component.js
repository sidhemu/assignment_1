import React, { Component } from 'react';
import {connect} from 'react-redux';
import LabelComponent from './Label-Component';

import { addLabel } from '../../actions'; 


import './Form.css';

class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labelSelected: 0,
            label: [],
            textLabel: []
        }
        this.addNewLabel = this.addNewLabel.bind(this);
    }

    addNewLabel(){         
        this.props.addLabel();
        // let array = [...this.state.label];
        // array.push(this.state.label.length);
        // this.setState({ label: array})
        // console.log('after adding ', array, this.state.label);          
    }

//     handleChildFunc = (index) => {       
//         let array = [...this.state.label];         
//         array.splice(index, 1);  
//         this.setState({ label: array });                
//    }

    render() { 
        return (
            <div className="form-control-section">
                <div className="header">
                    <div className="check-part">
                        <input type="checkbox" id="myCheck" />
                        <p>Section Heading</p>    
                    </div>
                    <div className="label-btn">
                        <label>{this.state.labelSelected} Labels Selected</label>
                        <button>Button</button>
                    </div>
                </div>

                <div className="middle-part">
                    <div className="label-part">
                        <div className="label">
                            <div className="checkBox">
                                <input type="checkbox" id="myCheck-1" disabled/>
                            </div>    
                            <div className="input-part">
                                <label htmlFor="label-1">Label</label>
                                <input id="label-1" type="text" />
                            </div>                            
                        </div> 
                        
                        <div className="label-list">
                            <ul>
                                {
                                    this.props.labelList.map((elem, index) => {
                                        return <LabelComponent key={index} indexNum={index} textLabel={elem.text}/>
                                    })
                                }
                            </ul>                        
                        </div>
                        <hr />
                        <button onClick={this.addNewLabel}>
                            ADD
                        </button>
                    </div>
                </div>

                <div className="footer">
                    <button type="submit">Submit</button>
                </div>
            </div>
        )

    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, { addLabel })(FormComponent);