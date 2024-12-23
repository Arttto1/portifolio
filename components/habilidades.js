import Image from "next/image";

export default function Habilidades() {
  return (
    <div className="habilidades-grid w-[100%]  grid xl:grid-rows-3 xl:grid-cols-4 lg:grid-rows-3 lg:grid-cols-4 md:grid-rows-6 md:grid-cols-2 gap-4">
      <div>
        <Image src={"/hmtl.svg"} width={64} height={64} alt="html logo"></Image>
        <h2>HTML</h2>
      </div>
      <div>
        {" "}
        <Image src={"/css.svg"} width={64} height={64} alt="css logo"></Image>
        <h2>CSS</h2>
      </div>
      <div>
        <Image
          src={"/javascript.svg"}
          width={64}
          height={64}
          alt="javascript logo"
        ></Image>
        <h2>JAVASCRIPT</h2>
      </div>
      <div>
        {" "}
        <Image
          className="bg-white rounded-full"
          src={"/next.svg"}
          width={64}
          height={64}
          alt="next.js logo"
        ></Image>
        <h2>NEXT.JS</h2>
      </div>
      <div>
        <svg
          viewBox="-10.5 -9.45 21 18.9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-16"
        >
          <circle cx="0" cy="0" r="2" fill="#58C4DC"></circle>
          <g strokeWidth="1" stroke="#58C4DC">
            <ellipse rx="10" ry="4.5"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
          </g>
        </svg>
        <h2>REACT</h2>
      </div>
      <div>
        <Image
          src={"/nodejs.svg"}
          width={64}
          height={64}
          alt="node.js logo"
        ></Image>
        <h2>NODE.JS</h2>
      </div>
      <div>
        <Image
          className="bg-white rounded-full"
          src={"/express.svg"}
          width={64}
          height={64}
          alt="express.js logo"
        ></Image>
        <h2>EXPRESS.JS</h2>
      </div>
      <div><Image
            src={"/tailwind.svg"}
            width={64}
            height={64}
            alt="tailwind logo"
          ></Image>
          <h2>TAILWIND</h2></div>
      <div>
        <Image
          src={"/mongodb.svg"}
          width={31}
          height={64}
          alt="mongodb logo"
        ></Image>
        <h2>MONGODB</h2>
      </div>
      <div><Image
          src={"/postgresql.svg"}
          width={64}
          height={64}
          alt="postgresql logo"
        ></Image>
        <h2>POSTGRESQL</h2></div>
        <div><Image
          src={"/firebase.svg"}
          width={64}
          height={64}
          alt="firebase logo"
        ></Image>
        <h2>FIREBASE</h2></div>
        <div><Image
            src={"/python.svg"}
            width={64}
            height={64}
            alt="python logo"
          ></Image><h2>PYTHON</h2></div>
    </div>
  );
}
