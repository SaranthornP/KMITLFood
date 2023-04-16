import React, { Component } from 'react';


export class Cafeteria extends Component {
    static displayName = Cafeteria.name;

    render() {
        return (

            <div className="mb-3">
                <div className=" border rounded-pill px-3">
                    <div className="mx-5 p-3">
                        <div className="row">
                            <div className="col-xl-3">
                                <img src={this.props.picture} alt={this.props.pictureName} width="100%" height="100%" ></img>
                            </div>
                            <div className="col-xl-6">
                                <h3>{this.props.name}</h3>
                                <h4 className="d-inline">location: </h4><p className="d-inline">{ this.props.location }</p>
                            </div>
                            <div className="col-xl-3">
                                <img src={this.props.locationMap} alt="error" width="100%" height="100%"></img>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        );
    }
}
