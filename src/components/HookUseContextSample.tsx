import React, { useContext } from "react"

const TitleContext = React.createContext('')

const Title = () => {
    // <TitleContext.Consumer>
    //     {(title) => {
    //         return  <h1>{title}</h1>
    //     }}
    // </TitleContext.Consumer>

    const value = useContext(TitleContext)

    return <h2>{value}</h2>
}

const Header = () => {
    return (
        <div>
            <Title />
        </div>
    )
}

const UseContextPage = () => {
    const title = 'React Hook'

    return (
        <TitleContext.Provider value = {title}>
            <Header />
        </TitleContext.Provider>
    )
}

export default UseContextPage