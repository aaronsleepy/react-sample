import { memo, useState } from "react"

/**
 * Memoization Hook
 * - 부모 컴포넌트가 다시 렌더링 -> 자식 컴포넌트도 다시 렌더링 (전파됨)
 *    - memo 컴포넌트 사용: props나 context값이 바뀌지 않은 경우, memo 컴포넌트는 다시 렌더링되지 않음
 *  - memo 컴포넌트 포함 자식 컴포넌트에 전달되는 함수 또는 값이 변경되는 경우 -> 자식 컴포넌트도 다시 렌더링 (전파됨)
 *    - useCallback: 자식에 전달하는 콜백함수의 의존 배열이 변경되지 않은 경우 -> memo 컴포넌트는 다시 렌더링되지 않음
 *    - useMemo: 자식에 전달하는 props의 의존 배열이 변경되지 않은 경우 -> memo 컴포넌트는 다시 렌더링되지 않음
 */

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