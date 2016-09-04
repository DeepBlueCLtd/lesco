import React, {Component} from 'react';
import {Chart} from 'react-google-charts';

export default class HistogramAlert extends Component {
    componentDidMount() {
        const color = this.props.color || '#000000';
        this.props.glContainer.tab.titleElement.prevObject.css('background-color', this.props.color);
        this.props.glContainer.tab.setTitle(this.props.title || 'No Title');
        // eslint-disable-next-line react/prop-types
        this.props.glContainer.on('tab', (tab) => {
            tab.titleElement.prevObject.css('background-color', color);
        });
    }
    render() {
        const data = [['Element', 'Density', { 'role': 'style' }, { role: 'annotation' }], ['Facebook', 8.94, '#53eb53', '8.94'],
            ['Twitter', 10.49, 'eb4f4f', '10.49'],
            ['Instagram', 19.3, 'eb9650', '19.3'],
            ['FourSquare', 21.45, 'color: #4febeb', '21.45']]

        return (
            <div style= {{height:'100%', width :'100%'}}>
                <Chart  className="SuperChart" chartType = 'BarChart' data = {data}  width={'100%'} height={'100%'}   />

            </div>


        )
    }
}