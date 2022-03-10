function PersonCard(props) {
    return(
        <div>
            <h1>{props.firstName}, {props.lastName}</h1>
            <p>age: {props.age} </p>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    )
}

export default PersonCard