"use client";

import React from "react";
import { Link } from "next-view-transitions";

import Image from "next/image";

export default function MaviPage() {
  return (
    <main>
      <div>
        <div>
          <div className="h-auto bg-[#5F2EEA] px-8 rounded-xl">
            <div className="max-w-4xl m-auto">
              <div className="grid grid-cols-1 gap-6">
                <h1 className="text-4xl md:text-5xl font-bold text-white text-opacity-80 mt-10">
                  Mobile app to help promote mental health
                </h1>
                <div>
                  <h2 className="text-base md:text-2xl font-bold text-white text-opacity-50">
                    MAVI
                  </h2>
                  <h2 className="text-base md:text-2xl font-bold text-white text-opacity-50">
                    Feb 21 - Apr 21 (9 weeks)
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="uppercase font-medium opacity-50 text-white my-4">
                      Background
                    </h3>
                    <p className="text-white text-opacity-80 font-medium">
                      This project was done as part of completion of the course
                      50.006 UI Design and Implementation from SUTD and the
                      theme was healthcare.
                    </p>
                  </div>
                  <div>
                    <h3 className="uppercase font-medium opacity-50 text-white my-4">
                      Tools and Methods
                    </h3>
                    <ul className="text-white text-opacity-80 font-medium">
                      <li>Pen and Paper</li>
                      <li>Figma</li>
                      <li>Brainstorming</li>
                      <li>Persona User Testing</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="uppercase font-medium opacity-50 text-white my-4">
                      Contribution
                    </h3>
                    <ul className="text-white text-opacity-80 font-medium">
                      <li>User Research</li>
                      <li>UI Design</li>
                      <li>Prototyping</li>
                      <li>User Testing</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Image
                    src="/images/mavi/hero.png"
                    alt="MAVI Hero"
                    width={800}
                    height={450}
                    className="m-auto my-10 md:mt-10 object-fill"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-4xl m-auto my-16 px-8">
            <h3 className="font-bold opacity-80 my-8 text-3xl md:text-4xl text-center">
              Project Description
            </h3>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              Singaporean youth's mental health is on the red flag, with 79 of
              them taking their own lifes last year. One of the cause is the
              lack of clear access to help and resources. MAVI is a mobile app
              created to help youth gain access to various types of resources
              that could help them better themselves.
            </p>

            <h3 className="font-bold opacity-80 my-8 text-3xl md:text-4xl text-center">
              Design Process
            </h3>
            <div className="my-4">
              <Image
                src="/images/mavi/design-process.png"
                alt="Design Process"
                width={800}
                height={450}
                className="my-4"
              />
            </div>

            <h3 className="font-bold opacity-80 my-8 text-3xl md:text-4xl text-center">
              Identifying the Problem with Research
            </h3>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              Considering how broad healthcare as a topic is, we used secondary
              research to narrow down the area of focus. One particular article
              released by CNA has drawn our attention. The article reported that
              suicide is still the highest leading cause of death among
              Singaporean youths and even detailed some of the causes. As youths
              ourselves, we thought this was heartbreaking and an issue worth
              pursuing.
            </p>
            <div className="my-4">
              <Image
                src="/images/mavi/cna.png"
                alt="CNA Article"
                width={800}
                height={450}
                className="my-4"
              />
            </div>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              Our initial assumption was youths had trouble finding mental
              health information online. To verify this assumption, we
              formulated a survey to get responses from our target user. We
              asked questions about the experience of finding resources online,
              the sources and also the usefulness of the information.
            </p>
            <div className="my-4">
              <Image
                src="/images/mavi/google-survey.png"
                alt="Google Survey"
                width={800}
                height={450}
                className="my-4"
              />
            </div>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              From the 54 responses gathered, we verified our assumptions, with
            </p>
            <div className="text-black text-opacity-80 font-medium leading-8 my-4">
              <ul>
                <li>- 38.5% indicated that the experience was confusing</li>
                <li>- 44.2% indicated that the experience was overwhelming</li>
              </ul>
            </div>

            <h3 className="font-bold opacity-80 text-2xl my-8">
              Key insights from research
            </h3>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              <ol>
                <li>
                  1. People find confusing and overwhelming to find information
                  online
                </li>
                <li>2. People have trouble locating mental health services</li>
                <li>3. People cannot effectively assess their mental health</li>
                <li>4. People feels cognitive overload</li>
              </ol>
            </p>

            <h3 className="font-bold opacity-80 my-8 text-3xl md:text-4xl text-center">
              Define
            </h3>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              We formulated a problem statement to summarise our findings and
              the gap identified.
            </p>

            <h3 className="font-bold opacity-80 text-2xl my-8">
              Problem Statement
            </h3>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              Many Singaporean youths lack the guidance, time and effort to
              locate suitable treatments. Besides, the myriad of information
              online is overwhelming for those who already had trouble fighting
              their inner demons. These limitations prevent youths from
              bettering themselves and can even deteriorate their mental
              well-being. There needs to be a way that allows youths to access
              to get information on mental health easily and reliably.
            </p>

            <h3 className="font-bold opacity-80 text-2xl my-8">Persona</h3>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              To kick start the design process, I suggested to create personas
              that we all can agree on so that could visualize our target users.
              Michelle was our first persona who represents someone who needs
              guidance on improving her mental health; Joshua was our second
              persona who represents someone who is looking for mental health
              services.
            </p>
            <div className="my-4">
              <Image
                src="/images/mavi/user-persona-Michelle.png"
                alt="User Persona - Michelle"
                width={800}
                height={450}
                className="my-4"
              />
            </div>
            <div className="my-4">
              <Image
                src="/images/mavi/user-persona-Joshua.png"
                alt="User Persona - Joshua"
                width={800}
                height={450}
                className="my-4"
              />
            </div>

            <h3 className="font-bold opacity-80 my-8 text-3xl md:text-4xl text-center">
              Ideate
            </h3>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              As part of the brainstorming process, each member made sketched
              concepts of the applications. Individually, we experimented with
              layout, UI elements and the flow of the application. Then, we came
              together to review and synthesize our ideas, to pick out the
              strongest part of each.
            </p>
            <div className="my-4">
              <Image
                src="/images/mavi/sketches.png"
                alt="Sketches"
                width={800}
                height={450}
                className="my-4"
              />
            </div>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              Next, I worked on the wireframe using Figma. I focused on
              developing flow for three parts of the application: the initial
              onboarding flow, assessment flow and resources flow. By creating a
              wireframe, the team was able to visualise the system more
              precisely and discuss clearer about the UI elements.
            </p>
            <div className="my-4">
              <Image
                src="/images/mavi/wireframe.png"
                alt="Wireframe"
                width={800}
                height={450}
                className="my-4"
              />
            </div>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              Following this, we conducted an internal ranking session to
              determine which features we should prioritize (since we couldn't
              implement all).
            </p>
            <div className="my-4">
              <Image
                src="/images/mavi/internal-ranking.png"
                alt="Internal Ranking"
                width={800}
                height={450}
                className="my-4"
              />
            </div>

            <h3 className="font-bold opacity-80 my-8 text-3xl md:text-4xl text-center">
              Features
            </h3>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              Based on the top priority features ranked in the internal ranking,
              we developed 6 main features for the app. Following are the
              mockups for the app features.
            </p>
            <div className="my-4">
              <Image
                src="/images/mavi/feature-1.png"
                alt="Feature 1"
                width={800}
                height={450}
                className="my-4"
              />
            </div>
            <div className="my-4">
              <Image
                src="/images/mavi/feature-2.png"
                alt="Feature 2"
                width={800}
                height={450}
                className="my-4"
              />
            </div>
            <div className="my-4">
              <Image
                src="/images/mavi/feature-3.png"
                alt="Feature 3"
                width={800}
                height={450}
                className="my-4"
              />
            </div>
            <div className="my-4">
              <Image
                src="/images/mavi/feature-4.png"
                alt="Feature 4"
                width={800}
                height={450}
                className="my-4"
              />
            </div>
            <div className="my-4">
              <Image
                src="/images/mavi/feature-5.png"
                alt="Feature 5"
                width={800}
                height={450}
                className="my-4"
              />
            </div>
            <div className="my-4">
              <Image
                src="/images/mavi/feature-6.png"
                alt="Feature 6"
                width={800}
                height={450}
                className="my-4"
              />
            </div>

            <h3 className="font-bold opacity-80 my-8 text-3xl md:text-4xl text-center">
              Prototype and Test
            </h3>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              After completing the mockup, it was important to test the flow of
              the app with real users that fit our personas. For this purpose,
              we used Figma to animate our screens and create a prototype that
              function to some extent. Using the figma's prototyping feature, we
              created a clickable prototype for user to test out.
            </p>
            <div className="my-4">
              <Image
                src="/images/mavi/mockup.png"
                alt="Mockup"
                width={800}
                height={450}
                className="my-4"
              />
            </div>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              We then conducted a user testing, which had revealed several areas
              of improvement. Both UX and UI issues were identified:
            </p>
            <div className="my-4">
              <Image
                src="/images/mavi/areas-of-improvement.png"
                alt="Areas of Improvement"
                width={800}
                height={450}
                className="my-4"
              />
            </div>

            <h3 className="font-bold opacity-80 my-8 text-3xl md:text-4xl text-center">
              Brand Identity
            </h3>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              We named our application "MAVI". The name is an acronym for Mental
              Assistance & Valuable Information. The logo is composed of an M
              and A characters. The "M" signifies the mental aspect of the app
              and the "A" symbolises an open heart, indicating the empathy we
              want our users to feel from the app. These two characters come
              together to give a medical symbol-like logo, that represents our
              focus on mental healthcare.
            </p>
            <div className="my-4">
              <Image
                src="/images/mavi/branding.png"
                alt="Branding"
                width={800}
                height={450}
                className="my-4"
              />
            </div>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              We used purple as our primary colour because we wanted give a
              sense of calm to users. Besides that,purple is also associated
              with creativity, which we hoped could inspire users on the
              possibility of growth when using the app. We also included indigo
              as a secondary colour to create contrast with the primary colour
              for better visual interest. Last but not least, we included yellow
              for our danger alert and error message.
            </p>

            <h3 className="font-bold opacity-80 my-8 text-3xl md:text-4xl text-center">
              Final Design
            </h3>
            <div className="my-4">
              <Image
                src="/images/mavi/final-design.png"
                alt="Final Design"
                width={800}
                height={450}
                className="my-4"
              />
            </div>

            <h3 className="font-bold opacity-80 my-8 text-3xl md:text-4xl text-center">
              Reflection
            </h3>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              Through developing MAVI, my team and I have come to realise the
              importance of understanding users' needs. By understanding the
              user's experience, we can build features that fill in the gap and
              create a delightful experience. In particular, we observed that it
              is the micro-interactions and fine details that sometimes make the
              most impact to a users' experience. Small navigational details
              like back buttons were sometimes more important than we had
              assumed. Lastly, we were surprised to find out how our app could
              reduce the time spent on finding and getting mental health
              resources by 70%! This further convinced us of the ability of
              design to problem solve in a real way.
            </p>
            <div className="my-4">
              <Image
                src="/images/mavi/time-reduction.png"
                alt="Time Reduction"
                width={800}
                height={450}
                className="my-4"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
