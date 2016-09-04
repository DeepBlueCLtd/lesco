import React, {Component} from 'react';

import QueryWindow from '../SearchWindow/querybuilder';
import MapWindow from '../MapWindow/mapView';
import TableWindow from '../TableWindow/tableView';

const GoldenLayout = require('golden-layout');

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
                    type: 'stack',
                    content: [{
                        type: 'react-component',
                        component: 'Alert Wall',
                        title: 'Alert1'
                    }, {
                            type: 'react-component',
                            component: 'Alert Wall',
                            title: 'Alert2',
                            props: { title: 'Alert 1', color: '#0000FF' }
                        }, {
                            type: 'react-component',
                            component: 'Alert Wall',
                            title: 'Alert3',
                            props: { title: 'Alert 1', color: '#00FFFF' }
                        }, {
                            type: 'react-component',
                            component: 'Alert Wall',
                            title: 'Alert6',
                            props: { title: 'Alert 1', color: '#FFFFFF' }

                        }
                    ]
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
        });
        const queryWidget = React.createClass({
            render: () => {
                return (<QueryWindow/>)
            }
        });
        const alertWall = React.createClass({
            componentDidMount: function () {

                const color = this.props.color || '#000000';
                this.props.glContainer.tab.titleElement.prevObject.css('background-color', this.props.color);
                this.props.glContainer.tab.setTitle(this.props.title || 'No Title');
                this.props.glContainer.on('tab', (tab) => {
                    tab.titleElement.prevObject.css('background-color', color);
                });
            },
            render: function () {

                return (<h1>test component 3</h1>)
            }

        })

        const layout = new GoldenLayout(layoutConfig);
        layout.registerComponent('Search Criteria', queryWidget);
        layout.registerComponent('Alert Wall', alertWall);
        layout.registerComponent('Histogram', temp);
        layout.registerComponent('Cloud', temp);
        layout.registerComponent('Map', MapWindow);
        layout.registerComponent('Table', TableWindow);

        layout.on('stackCreated', function (stack) {
            /*
             * Listening for activeContentItemChanged. This happens initially
             * when the stack is created and everytime the user clicks a tab
             */
            stack.on('activeContentItemChanged', function (contentItem) {
                stack.header.controlsContainer.children('.alertCommands').remove();
                // interact with the contentItem
                if (contentItem.config.component == 'Alert Wall') {

                    stack.header.controlsContainer.prepend('<li class="alertCommands"><span class="glyphicon glyphicon-volume-off" aria-hidden="true"></span></li>');

                    stack.header.controlsContainer.prepend('<li class="alertCommands"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span></li>');

                }
            });

            /*
             * Accessing the container and updating its state
             */
            //stack.getActiveContentItem().container.extendState({ color: '#faa' });
        });

        layout.init()
    }

    render() {
        return (<div></div>)
    }
}

