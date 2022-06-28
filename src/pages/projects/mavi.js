import React from "react";
import "../../styles/global.css";
import src from "../../images/shinjie.jpg";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import hero from "../../images/mavi/hero.png";
import designProcess from "../../images/mavi/design-process.png";
import cna from "../../images/mavi/cna.png";
import googleSurvey from "../../images/mavi/google-survey.png";
import sketches from "../../images/mavi/sketches.png";
import userPersonaJoshua from "../../images/mavi/user-persona-Joshua.png";
import userPersonaMichelle from "../../images/mavi/user-persona-Michelle.png";
import wireframe from "../../images/mavi/wireframe.png";
import internalRanking from "../../images/mavi/internal-ranking.png";
import mockup from "../../images/mavi/mockup.png";
import areaOfImprovement from "../../images/mavi/areas-of-improvement.png";
import finalDesign from "../../images/mavi/final-design.png";
import branding from "../../images/mavi/branding.png";
import timeReduction from "../../images/mavi/time-reduction.png";
import feature1 from "../../images/mavi/feature-1.png";
import feature2 from "../../images/mavi/feature-2.png";
import feature3 from "../../images/mavi/feature-3.png";
import feature4 from "../../images/mavi/feature-4.png";
import feature5 from "../../images/mavi/feature-5.png";
import feature6 from "../../images/mavi/feature-6.png";
import {
  Body,
  Heading1,
  Heading2,
  Image,
  List,
} from "../../components/Content";
import ScrollToTop from "../../components/ScrollToTop";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

const MaviPage = () => {
  return (
    <main>
      <Helmet>
        <title>Mobile app to help promote mental health</title>
      </Helmet>
      <div>
        <ScrollToTop />
        <div>
          <div className="h-auto bg-[#5F2EEA] px-8">
            <div className="max-w-4xl m-auto">
              <div className="flex text-white gap-4 pt-8 mb-8">
                <a
                  href="/"
                  className="flex w-max items-center gap-2 group hover:text-white my-5"
                >
                  <img src={src} alt="Shin Jie" className="rounded-full w-12" />
                  <p className="opacity-30 group-hover:opacity-80">Shin Jie</p>
                </a>
                <a
                  href="/projects"
                  className="flex px-4 py-1 border border-slate-400 rounded-3xl w-max items-center gap-2 hover:bg-indigo-400 group hover:text-white my-5"
                >
                  <ArrowNarrowLeftIcon className="w-4 opacity-30 group-hover:opacity-80" />
                  <p className="opacity-50 group-hover:opacity-80">Projects</p>
                </a>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <h1 className="text-4xl md:text-5xl font-bold text-white text-opacity-80">
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
                  <img
                    src={hero}
                    className="m-auto my-10 md:mt-10 object-fill"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-4xl m-auto my-16 md:my-56 px-8">
            <Heading1>Project Description</Heading1>
            <Body>
              Singaporean youth's mental health is on the red flag, with 79 of
              them taking their own lifes last year. One of the cause is the
              lack of clear access to help and resources. MAVI is a mobile app
              created to help youth gain access to various types of resources
              that could help them better themselves.
            </Body>
            <Heading1>Design Process</Heading1>
            <Image src={designProcess} />
            <Heading1>Identifying the Problem with Research</Heading1>
            <Body>
              Considering how broad healthcare as a topic is, we used secondary
              research to narrow down the area of focus. One particular article
              released by CNA has drawn our attention. The article reported that
              suicide is still the highest leading cause of death among
              Singaporean youths and even detailed some of the causes. As youths
              ourselves, we thought this was heartbreaking and an issue worth
              pursuing.
            </Body>
            <Image src={cna} />
            <Body>
              Our initial assumption was youths had trouble finding mental
              health information online. To verify this assumption, we
              formulated a survey to get responses from our target user. We
              asked questions about the experience of finding resources online,
              the sources and also the usefulness of the information.
            </Body>
            <Image src={googleSurvey} />
            <Body>
              From the 54 responses gathered, we verified our assumptions, with
            </Body>
            <List>
              <ul>
                <li>- 38.5% indicated that the experience was confusing</li>
                <li>- 44.2% indicated that the experience was overwhelming</li>
              </ul>
            </List>
            <Heading2>Key insights from research</Heading2>
            <Body>
              <ol>
                <li>
                  1. People find confusing and overwhelming to find information
                  online
                </li>
                <li>2. People have trouble locating mental health services</li>
                <li>3. People cannot effectively assess their mental health</li>
                <li>4. People feels cognitive overload</li>
              </ol>
            </Body>
            <Heading1>Define</Heading1>
            <Body>
              We formulated a problem statement to summarise our findings and
              the gap identified.
            </Body>
            <Heading2>Problem Statement</Heading2>
            <Body>
              Many Singaporean youths lack the guidance, time and effort to
              locate suitable treatments. Besides, the myriad of information
              online is overwhelming for those who already had trouble fighting
              their inner demons. These limitations prevent youths from
              bettering themselves and can even deteriorate their mental
              well-being. There needs to be a way that allows youths to access
              to get information on mental health easily and reliably.
            </Body>
            <Heading2>Persona</Heading2>
            <Body>
              To kick start the design process, I suggested to create personas
              that we all can agree on so that could visualize our target users.
              Michelle was our first persona who represents someone who needs
              guidance on improving her mental health; Joshua was our second
              persona who represents someone who is looking for mental health
              services.
            </Body>
            <Image src={userPersonaMichelle} />
            <Image src={userPersonaJoshua} />
            <Heading1>Ideate</Heading1>
            <Body>
              As part of the brainstorming process, each member made sketched
              concepts of the applications. Individually, we experimented with
              layout, UI elements and the flow of the application. Then, we came
              together to review and synthesize our ideas, to pick out the
              common one and sort out the differences.
            </Body>
            <Image src={sketches} />
            <Body>
              Some of the earlier ideas that were generated included a virtual
              assistant, dynamically adjusting cards, locating clinics and
              emergency calls. My ideas were to incorporate breadcrumbs and
              usage history into the mobile app for our users to help them set a
              sense of footing, so as to address the issue of feeling
              overwhelming. The two features were built on top of the idea that
              users would be able to access an extensive range of reliable
              information about mental health information. At the end of the
              brainstorming, we had an internal ranking process to decide ideas
              that did not reach a consensus.
            </Body>
            <Image src={internalRanking} />
            <Heading1>Iterate (Prototype + Test)</Heading1>
            <Body>
              After a few rounds of internal discussions, we proceeded to create
              low-fidelity wireframes with a set of selected features from the
              previous stage. We had our first round of usability testing
              following the completion of wireframes.
            </Body>
            <Image src={wireframe} />
            <Heading2>Usability Testing</Heading2>
            <Body>
              In total, we conducted two rounds of usability testings throughput
              the span of the project. We recruited 5 test participants in the
              first round and 6 test participants in the second round.
            </Body>
            <Heading2>Usability Testing Methodology:</Heading2>
            <Body>
              Test participants were presented with our prototype and a set of
              tasks to complete. The time taken to complete each task was
              recorded. Test participants were encouraged to think aloud when
              they were using the prototype so that the team could get a
              snapshot of user's thinking process. The team was distributed into
              sub-teams, with at least two persons in one sub-team. One team
              member would play the role of facilitator and while the others as
              observer. After our test participants finished all the task, we
              followed up with an informal chat (first round) to get their
              direct opinion and surveys (second round) to rate the prototype.
            </Body>
            <Body>
              In our first round of testing, we carefully recorded the hiccups
              our users faced and after analysing them, we tabulated all the
              areas of improvement.
            </Body>
            <Image src={areaOfImprovement} />
            <Body>
              Following that was our first version of a high fidelity mock-up.
              The changes were implemented directly into the mock-up.
            </Body>
            <Image src={mockup} />
            <Body>
              We did a second round of usability testing, using the same testing
              plan for the first round. In this round, we managed to see
              quantifiable improvements in the time taken for test participants
              to complete the tasks given.
            </Body>
            <Image src={timeReduction} />
            <Heading1>Final Design</Heading1>
            <Image src={finalDesign} />
            <Body>
              The second iteration is the final iteration of our design. From
              the previous usability testing, we were given some minor
              suggestions on the UI i.e. change the sequence of items in the
              bottom navigation and add a verbose placeholder in the search bar.
              Those changes were also implemented in this iteration.
            </Body>
            <Heading2>
              Feature 1 Mental health risk assessment with suggested contents
            </Heading2>
            <Image src={feature1} />
            <Heading2>Feature 2 Mental health services locator</Heading2>
            <Image src={feature2} />
            <Heading2>
              Feature 3 Resource hub with search and filtering
            </Heading2>
            <Image src={feature3} />
            <Heading2>Feature 4 Article bookmarking and usage history</Heading2>
            <Image src={feature4} />
            <Heading2>Feature 5 Reassessment reminder</Heading2>
            <Image src={feature5} />
            <Heading2>Feature 6 Emergency hotlines</Heading2>
            <Image src={feature6} />
            <Body>
              I made a video demonstrating all the features, you can find it out{" "}
              <Link
                to="https://www.youtube.com/watch?v=MMB8462Fntc&feature=youtu.be"
                target="_blank"
                className="text-purple-500"
              >
                here!
              </Link>
            </Body>
            <Heading1>Branding</Heading1>
            <Body>
              For this project, I also took the lead to work on the branding of
              the app. That includes the logo, colour scheme and typography. I
              chose purple and blue as the primary and secondary colour because
              they gave a sense of trust and peace. I opted for the san-serif
              font "Poppins" as the primary font because it appears to be more
              "friendly" to the users.
            </Body>
            <Image src={branding} />
            <Heading1>End of Testing Survey</Heading1>
            <Body>
              At the end of the second round of usability, we invited our test
              participants to complete a usefulness and ease of use survey. The
              questions were adopted from the mHealth App Usability
              Questionnaire.
            </Body>
            <Heading2>Usefulness Survey Result</Heading2>
            <Body>The Good</Body>
            <Body>
              50% strongly agrees that “The app would be useful for my mental
              health and well-being.”
            </Body>
            <Body>
              83% strongly agrees that “The app improved my access to mental
              health care services.”
            </Body>
            <Body>The Bad</Body>
            <Body>
              Only 17% strongly agrees that “The app helped me manage my mental
              health effectively.”
            </Body>
            <Body>(66.7% somewhat agree to the same statement. )</Body>
            <Heading2>Ease of Use and Satisfactory Survey Result</Heading2>
            <Body>The Good</Body>
            <Body>
              100% agree with the statement: "The amount of time involved in
              using this app has been fitting for me."
            </Body>
            <Body>66.67% agree with the following statements</Body>
            <List>
              <ul>
                <li>"Overall, I am satisfied with this app."</li>
                <li>"I would use this app again"</li>
                <li>"I like the interface of the app."</li>
                <li>"The app was easy to use"</li>
                <li>"It was easy for me to learn to use the app."</li>
              </ul>
            </List>
            <Body>The Bad</Body>
            <Body>
              33% disagree with the following statement "I feel comfortable
              using this app in social settings"
            </Body>
            <Heading1>Lesson Learnt</Heading1>
            <Body>
              From the survey results, we could certainly see some wins and
              losses. While we are able to meet the needs of our users, they do
              not feel comfortable using MAVI in a social setting. We
              hypothesize that they feel others might treat them differently and
              even distance themselves. It is unfortunate that we cannot speak
              about mental illness openly as it is still considered a taboo in
              the society. On the other hand, a rather low percentage of users
              strongly agreed that MAVI can help them manage their mental health
              effectively.
            </Body>
            <Body>
              If I were to redo this project again, I would make sure the
              environmental factor is included as part of the analysis process
              and I would push forward the usefulness survey while we are in the
              ideation stage. Through that change, I believe MAVI would be a
              better product because we have our target users' opinion at the
              start of the process.
            </Body>
            <Body>
              Personally speaking, I have learnt the importance of listening to
              our users. It was easy to get caught up with our own ideas and
              blame users when they don't understand them. However, we have to
              remember that the goal is to solve their problems, not to show off
              our ideas.
            </Body>
          </div>
          <footer className="text-center text-sm opacity-50 my-5">
            © 2020-2021 Tan Shin Jie
          </footer>
        </div>
      </div>
    </main>
  );
};

export default MaviPage;
