function Card(props)
{
    return(
        <div className="column"> 
            <img src = {props.image} alt = 'staff' />
            <h3>{props.name}</h3>
            <p> {props.position}</p>
        </div>
    )
}

export default Card