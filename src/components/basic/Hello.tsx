const Hello = () => {
    console.log()
    const onClick = () => {
        alert('hello')
    }
    const text = 'Hello, React'
    return (
        <div onClick={onClick}>
            {text}
        </div>
    )
}

export default Hello