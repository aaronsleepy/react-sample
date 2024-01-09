import React, { useContext } from "react"

const TitleContext = React.createContext('')

const Title = () => {
    // <TitleContext.Consumer>
    //     {(title) => {
    //         return  <h1>{title}</h1>
    //     }}
    // </TitleContext.Consumer>

    const value = useContext(TitleContext)

    return <h1>{value}</h1>
}

const Header = () => {
    return (
        <h1>
            <Title />
        </h1>
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