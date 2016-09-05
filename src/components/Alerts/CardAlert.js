import React, { Component} from 'react';


export default class CardAlert extends Component {
    render() {

        const imgSource = ['https://pixabay.com/static/uploads/photo/2014/10/25/00/28/selfie-501994_960_720.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/9/93/Ameily_Radke.jpg', 'https://static.pexels.com/photos/7823/selfie.jpg',
            'https://pixabay.com/static/uploads/photo/2014/05/23/23/42/man-352477_960_720.jpg', 'https://pixabay.com/static/uploads/photo/2016/03/01/06/07/woman-1229779_960_720.jpg'
        ]
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