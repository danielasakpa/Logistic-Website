import Image from "next/image";
import Link from "next/link";


const Logo = () => (
    <Link href={"/"} className="flex items-center gap-1 h-full w-[max-content] mr-4 lg:mr-0">
      <span className="[&>svg]:w-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="36"
          viewBox="0 0 50 36"
          fill="#fff"
        >
          <path
            d="M10.0966 3.01546L10.0842 3L0.399719 3L8.66279 13.5806L8.62546 13.6281L0.438675 23.9514L0.399719 24L9.92617 24L18.3997 13.5L10.0966 3.01546Z"
            fill-opacity="0.25"
          >
            {" "}
            <animate
              attributeName="fill-opacity"
              values="0.25;1;0.25"
              dur="2s"
              repeatCount="indefinite"
            ></animate>{" "}
          </path>{" "}
          <path
            d="M25.5579 3.01546L25.5461 3L16.3997 3L24.2037 13.5806L24.1685 13.6281L16.4365 23.9514L16.3997 24L25.3969 24L33.3997 13.5L25.5579 3.01546Z"
            fill-opacity="1"
          >
            {" "}
            <animate
              attributeName="fill-opacity"
              values="1;0.25;1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>{" "}
          </path>{" "}
        </svg>
      </span>
      {/* <Image
        src={"/assets/images/logo-txt.svg"}
        alt="Eventlly logo"
        width={128}
        height={100}
      /> */}
      <span className="p-semibold-18 lg:p-bold-24 text-white">Logistics Hub</span>
    </Link>
  );

  
  export default Logo;