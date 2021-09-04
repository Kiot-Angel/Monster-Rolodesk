import React from 'react';
import Cards from '../cards/cards.component';
import './card.css'

function Cardlist(props) {
    console.log("Card List Component", props)
    return (
        <div className="container-fluid">
            <div className="row">
                {props.monsters.map(item =>
                    <div className="col-sm-3 mycard" key={item.id}>
                        <Cards monster={item} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cardlist;