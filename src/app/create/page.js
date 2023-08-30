import Image from 'next/image';
import img1 from "/public/images/prod3.jpg"


export default function Create(){
    return(
        <>
            Create
            <p><Image alt='' src={img1}></Image></p>
        </>
    )
}