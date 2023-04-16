import React, { Component } from 'react';
import { Button } from 'reactstrap';
import logo from './logo.png';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (

            <div className="row container-fluid">
                <div className="col-xl-6 text-xl-start col-sm-12 text-sm-center">
                    <h2>เว็ปไซต์สั่งอาหาร</h2>
                    <h4>อันดับหนึ่งใน KMITL</h4>
                    <div className="text-center">
                        <Button className='bg-dark mw-100 w-100'> สั่งเลย </Button>
                    </div>
                </div>
                <div className="col-xl-6 col-sm-12 text-sm-center text-xl-end">
                    <img src={logo} alt="logo" width='500'></img>
                </div>


            </div>

        );
    }
}
