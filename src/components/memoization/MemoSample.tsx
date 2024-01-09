import { memo, useState } from "react"

type FizzProps = {
    isFizz: boolean
}   

const Fizz = (props: FizzProps) => {
    const { isFizz } = props
    console.log(`Fizz가 다시 그려졌습니다. isFizz=${isFizz}`)
    return (
        <div>{isFizz? 'Fizz' : 'NoFizz'}</div>
    )
}

type BuzzProps = {
    isBuzz: boolean
}

const Buzz = memo<BuzzProps>((props) => {
    const { isBuzz } = props
    console.log(`Buzz가 다시 그려졌습니다. isBuzz=${isBuzz}`)
    return (
        <div>
            {isBuzz? 'Buzz' : 'NoBuzz'}
        </div>
    )
})

const MemoParent = () => {
    const [count, setCount] = useState(1)
    const isFizz = count % 3 === 0
    const isBuzz = count % 5 === 0

    console.log(`Parent가 다시 그려졌습니다. count=${count}`)
    return (
        <div>
            <button onClick={() => setCount((c) => c+1)}>+1</button>
            <div>{`현재 카운트: ${count}`}</div>
            <div>
                <Fizz isFizz={isFizz} />
                <Buzz isBuzz={isBuzz} />
            </div>
        </div>
    )
}

export default MemoParent