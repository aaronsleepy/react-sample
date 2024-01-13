/**
 * ref 훅을 사용한 업로드 샘플
 * 
 * useRef 사용 사례
 * - 데이터 저장: 상태 데이터가 아닌 일반 데이터 저장 -> 데이터가 변경되도, 화면을 다시 렌더렝하지 않음
 * - DOM 참조
 */

import React, { useRef, useState } from "react"

const UPLOAD_DELAY = 5000

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const ImageUploder = () => {
    const inputImageRef = useRef<HTMLInputElement | null>(null)
    const fileRef = useRef<File | null>(null)
    const [message, setMessage] = useState<string | null>('')

    const onClickText = () => {
        if (inputImageRef.current != null) {
            inputImageRef.current.click()
        }
    }

    const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files != null && files.length > 0) {
            fileRef.current = files[0]
        }
    }

    const onClickUpload = async () => {
        if (fileRef.current != null) {
            await sleep(UPLOAD_DELAY)

            setMessage(`${fileRef.current.name} has been successfully uploaded`)
        }
    }

    return (
        <div>
            <p style={{ textDecoration: 'underline' }} onClick={onClickText}>
                이미지 업로드
            </p>
            <input 
                ref={inputImageRef}
                type="file"
                accept="image/*"
                onChange={onChangeImage}
                style={{ visibility: 'hidden' }}
            />
            <br />
            <button onClick={onClickUpload}>업로드하기</button>
            {message != null && <p>{message}</p>}
        </div>
    )
}

export default ImageUploder