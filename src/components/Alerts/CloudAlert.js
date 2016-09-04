import React, {Component} from 'react';

const style = { height: '100%', width: '100%' }
export default class CloudAlert extends Component {


    componentDidMount() {

        const color = this.props.color || '#000000';
        this.props.glContainer.tab.titleElement.prevObject.css('background-color', this.props.color);
        this.props.glContainer.tab.setTitle(this.props.title || 'No Title');
        // eslint-disable-next-line react/prop-types
        this.props.glContainer.on('tab', (tab) => {
            tab.titleElement.prevObject.css('background-color', color);
        });
        const word_array = [
            { text: 'Lorem', weight: 15 },
            { text: 'Ipsum', weight: 9, link: 'http://jquery.com/' },
            { text: 'Dolor', weight: 6, html: { title: 'I can haz any html attribute' } },
            { text: 'Sit', weight: 7 },
            { text: 'Am2334et', weight: 30 },
            { text: 'Amgbcvcet', weight: 6 },
            { text: 'Ameeret', weight: 20 },
            { text: 'A  sdf met', weight: 16 },
            { text: 'Af df met', weight: 18 },
            { text: 'Amdfd det', weight: 11 }

            // ...as many words as you want
        ];
        $(this.refs.cloud).jQCloud(word_array);

    }
    render() {
        return (
            <div ref="cloud" style={style}><h1>Alerrt</h1></div>
        )
    }
}