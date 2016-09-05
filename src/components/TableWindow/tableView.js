import React, {Component} from 'react'
import SlickGrid from 'react-slickgrid';

function randId() {
    return Math.random().toString(36).substr(2, 10);
}
export default class TableView extends Component {
    constructor(pr) {
        super(pr);
        this.state = { gridID: randId(), data: pr.data }

    }
    componentDidMount() {
        const me = this;
        this.props.glContainer.on('resize', function () {
            setTimeout(function () {
                me.resizeGrid(me.refs.grid._slickgrid);
            }, 1);
        });
        this.props.glContainer.on('open', function () {
            setTimeout(function () {
                me.resizeGrid(me.refs.grid._slickgrid);
            }, 1);
        });
        this.props.glContainer.on('show', function () {
            setTimeout(function () {
                me.resizeGrid(me.refs.grid._slickgrid);
            }, 1);
        });
    }

    resizeGrid(grid) {
        grid.resizeCanvas();
        grid.autosizeColumns();
        grid.invalidate();
        grid.render();
    }
    render() {
        var settings = {
            multiColumnSort: true,
            defaultColumnWidth: 125,
            rowHeight: 26,
            autoHeight: true
        };
        const data = this.state.data;
        const id = this.state.gridID;

        return (

            <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                <SlickGrid ref='grid'  id={id}
                    data = {data}
                    table= {id + 'asdasd_dasdig'}
                    settings={settings} />
            </div>

        );
    }
}