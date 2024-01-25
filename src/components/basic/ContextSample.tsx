/**
 * Context 사용 예제
 * - 자식 컴포넌트로 계층을 거치지 않고 데이터를 전달
 */

import React from "react"

const TitleContext = React.createContext('')

const Title = () => {
    return (
        <TitleContext.Consumer>
            {(title) => {
                return  <h1>{title}</h1>
            }}
        </TitleContext.Consumer>
    )
}

const Header = () => {
    return (
        <h1>
            <Title />
        </h1>
    )
}

const Page = () => {
    const title = 'React Hook'

    return (
        <TitleContext.Provider value = {title}>
            <Header />
        </TitleContext.Provider>
    )
}

export default Page