import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeLabel, addText } from '../../actions'; 
import './Form.css';

class LabelComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        // this.handleText = this.handleText.bind(this);
        // this.removeLabel = this.removeLabel.bind(this);
    }

    handleText(e) {
       
        
        this.setState({
            text: e.target.value
        });

        this.props.addText(e.target.value, this.props.indexNum);
    }    

    removeLabel(indexProp){ 
        this.props.removeLabel(indexProp);           
    }
    
    render() {
        return (
            <li>
                <div className="li-elem">
                    <input type="checkbox" />
                    <div className="li-label">
                        <label>Label {this.props.indexNum + 2}</label>
                        <input type="text" value={this.props.textLabel} onChange={this.handleText.bind(this)}/>
                    </div>
                    <button onClick={this.removeLabel.bind(this, this.props.indexNum)}>REMOVE</button>
                </div>

            </li>
            
        );
    }


}


export default connect(null, { removeLabel, addText })(LabelComponent);

