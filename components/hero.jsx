import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Chris NEXT.js template page
        </h1>
        <p className="mb-8 leading-relaxed">
          A hopeless romantic all my life Surrounded by couples all the time I
          guess I should take it as a sign. I am feeling lonely (Lonely) Oh, I
          wish I would find a lover that could hold me (Hold me) Now I am crying
          in my room So skeptical of love (Say what you say, but I want it more)
          But still, I want it more, more, more
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <button className="btn-project">Go Projects</button>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        {" "}
        <Animation />
      </div>
    </>
  );
}
