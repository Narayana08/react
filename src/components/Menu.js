export default function Menu(props) {

    console.log(`DATA::::${JSON.stringify(props)}`)

    const {name} = props.data.info


    return (<div className='menu'>
        <h1>{name}</h1>
        <h2>Menu</h2>
        <ul>
            <li>{1}</li>
            <li>{2}</li>
            <li>{3}</li>
        </ul>
    </div>)
}

