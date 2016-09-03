import React, {Component} from 'react';
const GoldenLayout = require('golden-layout');


const tempComponent = () => {
    return <div/>
}

//configuration for the layout
const layoutConfig = {
    settings: {
        hasHeaders: true
    },
    dimensions: {
        borderWidth: 2,
        headerHeight: 25
    },
    content: [{
        type: 'row',
        content: [{
            type: 'column',
            width: 40,
            content: [{
                type: 'react-component',
                component: 'Search Criteria',
                title: 'Search Criteria'
            }, {
                    type: 'react-component',
                    component: 'Alert Wall',
                    title: 'Alert Wall'
                }
            ]
        }, {
                type: 'row',
                content: [{
                    type: 'column',
                    width: 50,
                    content: [{
                        type: 'stack',
                        height: 50,
                        content: [{
                            type: 'react-component',
                            component: 'Table',
                            title: 'Table'
                        }, {
                                type: 'react-component',
                                component: 'Map',
                                title: 'Map'
                            }, {
                                type: 'react-component',
                                component: 'Cloud',
                                title: 'Cloud'
                            }, {
                                type: 'react-component',
                                component: 'Histogram',
                                title: 'Histogram'
                            }]
                    }]
                }]
            }]
    }]
};

export default class MainLayout extends Component {

    componentDidMount() {
        const temp = React.createClass({
            render: () => {
                return (<h1>test component 3</h1>)
            }
        })
        const layout = new GoldenLayout(layoutConfig)
        layout.registerComponent('Search Criteria', temp)
        layout.registerComponent('Alert Wall', temp)
        layout.registerComponent('Histogram', temp)
        layout.registerComponent('Cloud', temp)
        layout.registerComponent('Map', temp)
        layout.registerComponent('Table', temp)
        layout.init()
    }
    render() {
        return (<div></div>)
    }
}

