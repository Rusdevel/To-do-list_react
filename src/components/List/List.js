import "./List.css";

function List (props) {
    return(
        <div key={props.purpose.id} className="item-purpose">
            <div className={props.purpose.complete ? "item-text strike": "strike"} onClick={() => props.toggleTask(props.purpose.id)}>
                {props.purpose.task}
            </div>
            <div className="item-delete" onClick={() => props.deleteTask(props.purpose.id)}>x</div>     
        </div>
    )
}

export default List;