import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import Proj1 from "@/components/images/project1.png";
import Proj2 from "@/components/images/project2.png";
import Proj3 from "@/components/images/project3.png";
import AI1 from "@/components/images/automation-sample.jpg";
import AI2 from "@/components/images/ai-consultation-workflow.jpg";
import AI3 from "@/components/images/telegram-bot.png";
import AI4 from "@/components/images/glass-fruit-workflow.png";
import CAP1 from "@/components/images/capstone-1.png";
import CAP2 from "@/components/images/capstone-2.png";
import CAP3 from "@/components/images/capstone-3.png";
import CAP4 from "@/components/images/filipono-de.png";

const Home = () => {
  return (
    <section
      id="projects"
      className="min-h-screen max-md:mt-[25vh] w-full py-12 md:py-24 lg:py-32"
    >
      <div className="container min-h-screen space-y-12 px-4 md:px-6 ">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured Projects
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-[600px] max-sm:text-base text-lg max-md:text-justify  tracking-tighter">
              Check out all of projects.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <Image
              src={AI4}
              width="500"
              height="400"
              alt="Project 2"
              className="rounded-t-lg object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">
                Automated Glass Fruit Video Generation
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                An AI Automation that create a video of Glass Fruit videos and
                upload it to any Social Meadia.
              </p>
            </CardContent>
          </Card>

          <Card>
            <Image
              src={AI3}
              width="500"
              height="400"
              alt="Project 2"
              className="rounded-t-lg object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">
                Telegram AI Bot using Gemini AI
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                An friendly AI Agent in Telegram where you can ask anything and
                it will answer in friendly way.
              </p>
            </CardContent>
          </Card>

          <Card>
            <Image
              src={AI2}
              width="500"
              height="400"
              alt="Project 2"
              className="rounded-t-lg object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">AI Consultation Workflow</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                An AI Consultation Website for providing the full roadmap of
                your Automation thru email for free.
              </p>
            </CardContent>
          </Card>

          <Card>
            <Image
              src={AI1}
              width="500"
              height="400"
              alt="Project 2"
              className="rounded-t-lg object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">AI Consultation</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                An AI Consultation Website for providing the full roadmap of
                your Automation thru email for free.
              </p>
            </CardContent>
          </Card>

          <Card>
            <Image
              src={CAP1}
              width="500"
              height="400"
              alt="Project 2"
              className="rounded-t-lg object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">Soliera Logistic</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                A system for procuring, warehousing, assets management, and
                document tracking for Soliera Hotel and Restaurant.
              </p>
            </CardContent>
          </Card>

          <Card>
            <Image
              src={CAP2}
              width="500"
              height="400"
              alt="Project 2"
              className="rounded-t-lg object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">
                ZPPSU Document Request and Tracking
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                An School system for requesting for Document and tracking.
              </p>
            </CardContent>
          </Card>

          <Card>
            <Image
              src={CAP3}
              width="500"
              height="400"
              alt="Project 2"
              className="rounded-t-lg object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">PPLSAWARDS</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                An Website for displaying all awardees that has been awarded for
                their outstanding contribution.
              </p>
            </CardContent>
          </Card>

          <Card>
            <Image
              src={Proj2}
              width="500"
              height="400"
              alt="Project 2"
              className="rounded-t-lg object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">Ranimeflixx</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                A mobile application that you can watch all streaming anime with
                no ads.
              </p>
            </CardContent>
          </Card>

          <Card className="flex-col flex items-center">
            <Image
              src={Proj1}
              width="390"
              height="300"
              alt="Project 1"
              className="object-cover"
            />

            <CardContent className="p-4">
              <h3 className="text-lg font-bold">The Gym Street Coach</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                A mobile app that helps coach to track their clients fitness
                goals and progress.
              </p>
            </CardContent>
          </Card>
          <Card>
            <Image
              src={Proj3}
              width="500"
              height="400"
              alt="Project 3"
              className="rounded-t-lg object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">AGreenNatureConnect</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                A web app that helps farmers to connect with the people about
                urban farming. This is our capstone system.
              </p>
            </CardContent>
          </Card>

          <Card>
            <Image
              src={CAP4}
              width="500"
              height="400"
              alt="Project 3"
              className="rounded-t-lg object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">FILIPINO DE CUISINE</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                A Landing Page for showing the taste of Filipino De Cuisine.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Home;
