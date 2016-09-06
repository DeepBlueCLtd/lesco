import React, { Component} from 'react';

const imgSource = [
];
imgSource[0] = require('../../static/image1.jpg');
imgSource[1] = require('../../static/image2.jpg');
imgSource[2] = require('../../static/image3.jpg');
imgSource[3] = require('../../static/image4.jpg');
imgSource[4] = require('../../static/image5.jpg');
export default class CardAlert extends Component {
    render() {


        return (
            <div style={{ overflow: 'scroll', position: 'relative', width: '100%', height: '100%' }}>
                <div>
                    {imgSource.map((x) => {
                        return <div key={x} style={{width: '48%', height: '48%' ,display:'inline'}}>
                            <img   src={x} style= {{ margin: '1%', width: '48%', height: '48%', maxHeight: '100px', objectFit: 'cover' }}/>
                        </div>
                    }) }
                </div>
            </div>
        )
    }
}