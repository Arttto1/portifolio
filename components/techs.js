import Image from "next/image";
import classes from "./techs.module.css";

export default function Technologies() {
  return (
    <div className={classes.techs}>
      <div>
        <div>
          <Image
            src={"/mongodb.svg"}
            width={31}
            height={64}
            alt="mongodb logo"
          ></Image>
        </div>

        <h2>MongoDB</h2>
      </div>

      <div>
        <div>
          {" "}
          <Image
            className="bg-white rounded-full"
            src={"/express.svg"}
            width={64}
            height={64}
            alt="express.js logo"
          ></Image>
        </div>

        <h2>Express.js</h2>
      </div>
      <div>
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
        </div>
        <h2>React</h2>
      </div>
      <div>
        <div>
          {" "}
          <Image
            src={"/nodejs.svg"}
            width={64}
            height={64}
            alt="node.js logo"
          ></Image>
        </div>

        <h2>Node.js</h2>
      </div>
      <div>
        <div>
          <Image
            src={"/tailwind.svg"}
            width={64}
            height={64}
            alt="tailwind logo"
          ></Image>
        </div>

        <h2>Tailwind</h2>
      </div>
      <div>
        <div>
          <Image
            className="bg-white rounded-full"
            src={"/next.svg"}
            width={64}
            height={64}
            alt="next.js logo"
          ></Image>
        </div>

        <h2>Next.js</h2>
      </div>
      <div>
        <div>
          <Image
            src={"/hmtl.svg"}
            width={64}
            height={64}
            alt="html logo"
          ></Image>
        </div>

        <h2>HTML</h2>
      </div>
      <div>
        <div>
          <Image src={"/css.svg"} width={64} height={64} alt="css logo"></Image>
        </div>

        <h2>CSS</h2>
      </div>
      <div>
        <div>
          <Image
            src={"/javascript.svg"}
            width={64}
            height={64}
            alt="javascript logo"
          ></Image>
        </div>

        <h2>Javascript</h2>
      </div>
    </div>
  );
}
