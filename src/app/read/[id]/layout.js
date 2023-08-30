export default function Layout(props){
    let msg = null;
    if(props.params.id === '1' ){
        msg = "html";
    }else if(props.params.id === '2' ){
        msg = "css";
    }else if(props.params.id === '3' ){
        msg = "java";
    }

    return(
        <>
            {props.children}
            <h3>parameters: {props.params.id}</h3>
            <h2>{msg}</h2>
        </>
    )
}