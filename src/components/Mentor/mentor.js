import React from 'react';
import {Link} from 'react-router-dom';

const mentor = (props) => {

    return (

        <div className={"container"}>
            <h2>Досегашни задачи</h2>
            <table className="table-responsive table-hover">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Тип</th>
                    <th scope="col">Опис</th>
                    <th scope="col">Поени</th>
                    <th scope="col">Решена</th>
                </tr>
                </thead>
                <tbody>

                {props.f_tasks.map((term) => {
                    return (
                        <tr>
                            <th scope="row">{props.d_tasks.find(dTask => dTask.ID == term.taskID).ID}</th>
                            <td>{props.d_tasks.find(dTask => dTask.ID == term.taskID).type}</td>
                            <td>{props.d_tasks.find(dTask => dTask.ID == term.taskID).desc}</td>
                            <td>{props.d_tasks.find(dTask => dTask.ID == term.taskID).points}</td>
                            <td>{term.isDone}</td>
                        </tr>
                    );
                })
                }
                </tbody>
            </table>

            <div className={"row"}>
                <div className={"container col-md-6 py-3"}>
                    <h2>Задачи:</h2>
                    {props.d_tasks.map((term) => {
                        return (
                            <div className={"container w-100 p-1 m-2 bg-info"}>
                                <h3>{term.type}</h3>
                                <p>{term.desc}</p>
                                <hr/>
                                <p>Поени: {term.points}</p>
                            </div>
                        );
                    })
                    }
                </div>
                <div className={"container col-md-6 py-3"}>
                    <h2>Избрани адачи:</h2>
                    {props.d_tasks.map((term) => {
                        return (
                            <div className={"container w-100 p-1 m-2 bg-info"}>
                                <h3>{term.type}</h3>
                                <p>{term.desc}</p>
                                <hr/>
                                <p>Поени: {term.points}</p>
                            </div>
                        );
                    })
                    }
                </div>
            </div>

        </div>

    )

}

export default mentor;
