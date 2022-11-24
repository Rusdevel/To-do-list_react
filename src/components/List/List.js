import "./List.css";

function List (props) {
    return(
        <div key={props.purpose.id} className="List__itemPpurpose">
            <div className={props.purpose.complete ? "List__item-text List__strike": "List__item-text"} onClick={() => props.toggleTask(props.purpose.id)}>
                {props.purpose.task}
            </div>
            <button className="List__itemDelete" onClick={() => props.deleteTask(props.purpose.id)}>x</button>     
        </div>
    )
}

export default List;