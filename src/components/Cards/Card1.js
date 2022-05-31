
function Card(props) {
    return (
        <div className="card">
       <img className='card-image' src= {props.image} alt='Avatar' />
       <div className="AvatarName">{props.text}</div>
        </div>
    )
}

export default Card;