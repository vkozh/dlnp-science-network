import React from 'react';
import './Views.css'

export class Views extends React.Component {
    constructor(props) {
        super(props);

        this.handleMap = this.handleMap.bind(this);
        this.handleProjects = this.handleProjects.bind(this);
        this.handleGender = this.handleGender.bind(this);
    }

    handleMap(e) {

    }

    handleProjects(e) {

    }

    handleGender(e) {

    }

    render() {
        return (
            <div>
                <h5 className="m-5 mb-3">View:</h5>
                <button
                    id='map'
                    className="btn btn-secondary m-2 ms-5"
                    onClick={this.handleMap}>Map</button>
                <button
                    id='projects'
                    className="btn btn-secondary m-2"
                    onClick={this.handleProjects}>Projects</button>
                <button
                    id='gender'
                    className="btn btn-secondary m-2"
                    onClick={this.handleGender}>Gender</button>
            </div>
        )
    }
}