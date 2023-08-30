import './create.css'

// 반드시 props를 인자로 받아야한다
export default function Layout(props){
    return(
        <form>
            <h2>Create-layout</h2>
            {/* create 안에 있는 page.js 표현하기 */}
            {props.children}
        </form>
    )
}