import { SubmitHandler, useForm } from "react-hook-form"

/**
 * useForm 예제
 * - 설치: npm install react-hook-form
 * - useForm 구성
 *   - register 함수: form 요소에 Hook을 등록하여 상태를 관리
 *   - handleSubmit 함수: form의 onSubmit 이벤트 핸들러에 등록
 *   - errors 객체: form 요소에 validation 에러가 발생했는지를 감지할 때 사용
 */

type MyFormData = {
    firstName: string
    lastName: string
    category: string
}

const UseFormSample = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm<MyFormData>()

    const onSubmit: SubmitHandler<MyFormData> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('firstName', { required: true })} placeholder="이름" />
            {errors.firstName && <div>이름을 입력해 주세요</div>}
            <input {...register('lastName', { required: true })} placeholder="성" />
            {errors.lastName && <div>성을 입력해 주세요</div>}
            <select {...register('category', {required: true })}>
                <option value="">선택...</option>
                <option value="A">카테고리 A</option>
                <option value="B">카테고리 B</option>
            </select>
            {errors.category && <div>카테고리를 선택해 주세요</div>}
            <input type="submit" />
        </form>
    )
}

export default UseFormSample