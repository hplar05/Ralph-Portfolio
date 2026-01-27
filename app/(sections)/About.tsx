import React from "react";
import Image from "next/image";
import Team from "@/components/images/me.jpg";

const Home = () => {
  return (
    <section
      id="about"
      className=" h-[100vh] flex-col flex items-center justify-center "
    >
      <div className="container flex items-center justify-center">
        {/* <Image
          src={Team}
          width={400}
          height={400}
          alt="Ralph Saladino"
          className="rounded-3xl max-md:hidden"
        /> */}
        <div className="space-y-4 mb-8 text-justify max-lg:mr-0 ">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
            About Me
          </h2>
          <p className="text-gray-800 dark:text-gray-300  max-w-[700px] max-sm:text-base text-xl  tracking-tighter">
            Hi my name is Ralph S. Saladino, I am a Web developer and AI
            Automation Specialist with a passion for creating beautiful
            functional web applications and AI Automation Workflow.
          </p>
          {/* <p className="text-gray-800 dark:text-gray-300 max-w-[700px] max-sm:text-base text-xl  tracking-tighter">
            I have bit experience with flutter native, react native, react js,
            and next js but Im willing to learn more to enhance my skill and
            techstacks.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
