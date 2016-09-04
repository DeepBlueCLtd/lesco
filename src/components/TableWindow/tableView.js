import React, {Component} from 'react'
import SlickGrid from 'react-slickgrid';

const tableData = [
    { name: 'Johnny Appleseed', profession: 'Engineer', age: 31 },
    { name: 'Johnny ', profession: 'Engineer', age: 31 },
    { name: 'Appleseed', profession: 'Engineer', age: 31 },
    { name: ' adasd ', profession: 'Engineer', age: 31 },
    { name: 'Jonas', profession: 'Engineer', age: 31 },
    { name: 'Peter', profession: 'Engineer', age: 31 },
    { name: 'Own', profession: 'Engineer', age: 31 },
    { name: 'Eduardo ', profession: 'Engineer', age: 31 },
    { name: 'Ian', profession: 'Engineer', age: 31 },
    { name: 'Osama', profession: 'Bad Guy', age: 64 }
]

export default class TableView extends Component {
    render() {
        var settings = {
            multiColumnSort: true,
            defaultColumnWidth: 125,
            rowHeight: 26
        };
        return (

            <SlickGrid  id="slick-grid-container"
                data = {tableData}
                table="NFL"
                settings={settings} />

        )
    }
}