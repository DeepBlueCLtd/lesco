import React, {Component} from 'react';
const MapApi = require('leaflet');


export default class MapWindow extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const GlContainer = this.props.glContainer;
        const map = MapApi.map(this.refs.mapContainer, {
            minZoom: 2,
            maxZoom: 20,
            layers: [
                MapApi.tileLayer(
                    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    { attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>' })
            ],
            attributionControl: false
        });
        map.fitWorld();
        map.invalidateSize();
        GlContainer.on('resize', () => {
            map.invalidateSize();
        });
        GlContainer.on('show', () => {
            map.invalidateSize();
            //TODO::This is a stupic hack , but without this the LeafMap won't update to fit the Tab without a resize'
            setTimeout(() => {
                map.invalidateSize();
            }, 5);
        })
    }


    render() {


        return (
            <div ref="mapContainer" className='map' style={{ height: '100%' }}> </div>
        );

    }
}


