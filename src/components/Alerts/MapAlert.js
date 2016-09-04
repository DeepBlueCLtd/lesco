import React, {Component} from 'react';
const MapApi = require('leaflet');


export default class MapAlertWindow extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const color = this.props.color || '#000000';
        this.props.glContainer.tab.titleElement.prevObject.css('background-color', this.props.color);
        this.props.glContainer.tab.setTitle(this.props.title || 'No Title');
        // eslint-disable-next-line react/prop-types
        this.props.glContainer.on('tab', (tab) => {
            tab.titleElement.prevObject.css('background-color', color);
        });
        const GlContainer = this.props.glContainer;
        const map = MapApi.map(this.refs.mapContainer, {
            minZoom: 2,
            zoom: 15,
            maxZoom: 20,
            layers: [
                MapApi.tileLayer(
                    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    { attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>' })
            ],
            attributionControl: false
        });
        map.setView([51.505, -0.09], 13);
        MapApi.marker([51.5, -0.09]);
        MapApi.marker([51.505, -0.09]).addTo(map);
        MapApi.marker([51.509, -0.1]).addTo(map);
        MapApi.marker([51.5, -0.05]).addTo(map);
        MapApi.marker([51.5, -0.09]).addTo(map);

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


