import React from 'react';

import './taskitem.css';

const task = (props) => {

    return (
        <div className={"container col-md-10 task"}>

            <h2>Helloo</h2>

                    <div className={"container w-100 p-1 m-2 bg-info"} >
                        <p>{props.task.desc}</p>
                        <hr/>
                        <p>Поени: {props.task.points}</p>
                        <img source={props.task.solution}></img>
                    </div>

        </div>

    )

}

export default task;
