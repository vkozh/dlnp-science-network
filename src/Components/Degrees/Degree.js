import React from 'react';
import './Degree.css';

export class Degree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phd: true,
            masters: true,
            bachelors: true
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.checked;
        this.setState ({
            [name]: value
        })
    }

// должен вызываться из карты
    render() {
        return (
            <div className="degrees">
                <h5 className="m-5 mb-3">Show: </h5>
                <div className="m-2 mx-5">
                    <input
                        id='phd'
                        type='checkbox'
                        value='p'
                        className="m-1"
                        name='phd'
                        checked={this.state.phd}
                        onChange={this.handleInputChange} />
                    <label htmlFor='phd'>PhD</label>
                </div>

                <div className="m-2 mx-5">
                    <input
                        id='masters'
                        type='checkbox'
                        value='m'
                        className="m-1"
                        name='masters'
                        checked={this.state.masters}
                        onChange={this.handleInputChange} />
                    <label htmlFor='masters'>Masters</label>
                </div>

                <div className="m-2 mx-5">
                    <input
                        id='bachelors'
                        type='checkbox'
                        value='b'
                        className="m-1"
                        name='bachelors'
                        checked={this.state.bachelors}
                        onChange={this.handleInputChange} />
                    <label htmlFor='bachelors'>Bachelors</label>
                </div>
            </div>
        )
    }
}