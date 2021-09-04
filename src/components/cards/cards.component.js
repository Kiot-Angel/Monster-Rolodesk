import React from 'react';


function Cards(props) {
    console.log("Cards Component")
    return (
        <div className="card h-100" style={{ backgroundColor: "#95dada", border: "1px solid grey",borderRadius: '5px',cursor: 'pointer'}}>
            <img className="card-img-top" alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
            <div className="card-body">
                <h2 className="card-title">{props.monster.name}</h2>
                <p>{props.monster.email}</p>
            </div>
        </div>
    );
}

export default Cards;