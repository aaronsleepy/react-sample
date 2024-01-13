import { useEffect, useState } from "react"

const UPDATE_CYCLE = 1000
const KEY_LOCALE = 'KEY_LOCALE'

enum Locale {
    US = 'en-US',
    KR = 'ko-KR'
}

const getLocaleFromString = (text: string) => {
    switch (text) {
        case Locale.US:
            return Locale.US
        case Locale.KR:
            return Locale.KR
        default:
            return Locale.US
    }
}

const Clock = () => {
    const [timestamp, setTimestamp] = useState(new Date())
    const [locale, setLocale] = useState(Locale.US)

    // useEffect 훅 사용: setInterval
    // setInterval이 컴포넌트 다시 그러더라도 최초 로드시에만 실행되도록 useEffect 훅을 사용함
    useEffect(() => {
        const timer = setInterval(() => {
            setTimestamp(new Date())
        }, UPDATE_CYCLE)

        // 클린업 함수
        return () => {
            clearInterval(timer)
        }
    }, [])

    // useEffect 훅 사용: localStorage 접근시
    // localStorage는 느리므로, 컴포넌트 렌더링 이후 실행해야 함
    useEffect(() => {
        const savedLocale = localStorage.getItem(KEY_LOCALE)
        if (savedLocale !== null) {
            setLocale(getLocaleFromString(savedLocale))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(KEY_LOCALE, locale)
    }, [locale])

    return (
        <div>
            <p>
                <span id="current-time-label">현재 시각</span>
                <span>:{timestamp.toLocaleString(locale)}</span>
                <select
                    value={locale}
                    onChange={(e) => setLocale(getLocaleFromString(e.target.value))}>
                    <option value="en-US">en-US</option>
                    <option value="ko-KR">ko-KR</option>
                </select>
            </p>
        </div>
    )

}

export default Clock