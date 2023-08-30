import Image from 'next/image';
import img1 from "/public/images/prod2.jpg";

export default function Home() {
  return (
    <div>
      <h1>welCome</h1>
      Hello, WEB
      {/* 해당 이미지를 따로 import하지 않으면 크기 지정 해야된다 */}
      <p><Image alt='' src="/images/prod1.jpg"width={100} height={100}></Image></p>
      <p><Image alt='' src={img1}></Image></p>
    </div>
  )
}
