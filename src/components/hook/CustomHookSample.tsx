import { useCallback, useDebugValue, useState } from "react"

// Custom Hook 함수
const useInput = () => {
    const [state, setState] = useState('')
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
    }, [])

    useDebugValue(`Input: ${state}`)

    return [state, onChange] as const
}

const CustomHookInput = () => {
    const [text, onChangeText] = useInput()

    return (
        <div>
            <input type="text" value={text} onChange={onChangeText} />
            <p>Input: {text}</p>
        </div>
    )
}