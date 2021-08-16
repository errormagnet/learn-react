import React, {FC} from 'react';
import './CardList.css'
import Card from './Card';
import {State} from "../models/models";

const CardList: FC<{ state: State }> = (props): JSX.Element => {
    return (
        <div>
            {
                props.state.robots
                    .filter(bots => bots.name.toLowerCase().includes(props.state.search_query.toLowerCase()) || !props.state.search_query)
                    .map((attrib, index) => <Card key={index} id={attrib.id} name={attrib.name} email={attrib.email}/>)
            }
        </div>
    );
}

export default CardList;
