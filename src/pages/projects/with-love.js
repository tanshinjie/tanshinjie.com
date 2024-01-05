import React from "react";
import "../../styles/global.css";
import src from "../../images/shinjie.jpg";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import hero from "../../images/with-love/hero.png";
import interviewTargetGroup from "../../images/with-love/interview-target-group.png";
import affinityMap from "../../images/with-love/affinity-map.png";
import empathyMap1 from "../../images/with-love/empathy-map-online-old-wedding-guest.png";
import empathyMap2 from "../../images/with-love/empathy-map-online-wedding-couple.png";
import personaLihui from "../../images/with-love/persona-lihui.png";
import personaDexter from "../../images/with-love/persona-dexter.png";
import CJMGuest from "../../images/with-love/CJM-guest.png";
import CJMHost from "../../images/with-love/CJM-host.png";
import scenarioSketchesLihui from "../../images/with-love/scenario-sketches-lihui.png";
import scenarioSketchesDexter from "../../images/with-love/scenario-sketches-dexter.png";
import finalDesign from "../../images/with-love/final-design.png";
import finalDesign1 from "../../images/with-love/final-design-1.png";
import feature1 from "../../images/with-love/feature1.png";
import feature2 from "../../images/with-love/feature2.png";
import feature3 from "../../images/with-love/feature3.png";
import feature4 from "../../images/with-love/feature4.png";
import feature5 from "../../images/with-love/feature5.png";
import overallFlowHost from "../../images/with-love/overall-flow-host.png";
import overallFlowGuest from "../../images/with-love/overall-flow-guest.png";

import {
  Body,
  Heading1,
  Heading2,
  Image,
  List,
} from "../../components/Content";
import ScrollToTop from "../../components/ScrollToTop";
import { Helmet } from "react-helmet";

const WithLovePage = () => {
  return (
    <main>
      <Helmet>
        <title>Online chinese wedding ceremony interaction reimagined</title>
      </Helmet>
      <div>
        <ScrollToTop />
        <div>
          <div className="h-auto bg-pink-400 px-8">
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
                  className="flex px-4 py-1 border border-x-slate-200 rounded-3xl w-max items-center gap-2 hover:bg-indigo-400 group hover:text-white my-5"
                >
                  <ArrowNarrowLeftIcon className="w-4 opacity-30 group-hover:opacity-80" />
                  <p className="opacity-50 group-hover:opacity-80">Projects</p>
                </a>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <h1 className="text-4xl md:text-5xl font-bold text-white text-opacity-80">
                  Online chinese wedding ceremony interaction reimagined
                </h1>
                <div>
                  <h2 className="text-base md:text-2xl font-bold text-white text-opacity-50">
                    With Love (UIUX & Concept Design)
                  </h2>
                  <h2 className="text-base md:text-2xl font-bold text-white text-opacity-50">
                    Mar 21 - Apr 21 (6 weeks)
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="uppercase font-medium opacity-50 text-white my-4">
                      Background
                    </h3>
                    <p className="text-white text-opacity-80 font-medium">
                      COVID-19 pandemic had made wedding ceremony obsolete
                      around the world. While e-wedding had become many couples'
                      alternative, it is clear that there the experience is not
                      ideal. With Love is a design solution that aims to reduce
                      the emotional gap between hosts and guest in an e-wedding.
                    </p>
                  </div>
                  <div>
                    <h3 className="uppercase font-medium opacity-50 text-white my-4">
                      Tools and Methods
                    </h3>
                    <ul className="text-white text-opacity-80 font-medium">
                      <li>Affinity Diagram</li>
                      <li>Empathy Map</li>
                      <li>Customer Journey Map</li>
                      <li>Personas</li>
                      <li>Scenario sketches</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="uppercase font-medium opacity-50 text-white my-4">
                      Contribution
                    </h3>
                    <ul className="text-white text-opacity-80 font-medium">
                      <li>User Research </li>
                      <li>UI Design</li>
                      <li>Prototyping</li>
                      <li>Branding</li>
                      <li>Scenario Sketches</li>
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
            <Heading1>Design Challenge Statement</Heading1>
            <Body>
              <b>
                "COVID-19 has separated some family members from their hometown,
                how might we recreated some of the activities that will
                typically be done between family members?"
              </b>
            </Body>
            <Body>
              The project began with identifying cultural community, ritual and
              the value behind the ritual. The team has selected Singaporean and
              Malaysia Chinese as the community of focus, Chinese Wedding as the
              ritual and "Togetherness" as the cultural value.
            </Body>
            <Heading1>Problem Statement</Heading1>
            <Body>
              With the social distancing measures that were put in place tackle
              the COVID-19 pandemic, physical wedding ceremonies had became
              inconvenient and dangerous to host. While this unforeseen
              circumstance had people turn to hosting wedding online, it is
              obvious that e-weddings are different from physical weddings in
              many ways due to the physical distance of the couple and their
              guests, which could prevent both parties from having the same
              positive experience of a physical one. Hence, this could
              potentially erode the core feeling of togetherness that is so
              highly valued in the Singaporean and Malaysian Chinese community.
            </Body>
            <Heading1>Contextual Research</Heading1>
            <Heading2>User Interviews</Heading2>
            <Body>
              To get a better understanding of the current wedding scene in the
              Singaporean and Malaysian Chinese community, we interviewed a
              variety of target groups to get different perspectives. These
              included both the wedding couple and the guests from online and
              physical weddings. Overall, we interviewed four people, one from
              each target group.
            </Body>
            <Image src={interviewTargetGroup} />
            <Heading2>Affinity Map</Heading2>
            <Body>
              As a lot of qualitative data was gathered from the interviews, we
              used an affinity map to find natural patterns in the feedback of
              these four target groups we interviewed. This enabled us to get
              meaningful insights from the large amounts of feedback we
              gathered.
            </Body>
            <Image src={affinityMap} />
            <Heading2>Empathy Map</Heading2>
            <Body>
              We also wanted to articulate our findings about the different
              target groups that we interviewed. Hence, we created an empathy
              map to aid us in achieving this.
            </Body>
            <Image src={empathyMap1} />
            <Image src={empathyMap2} />
            <Heading1>Key findings from user studies</Heading1>
            <Heading2>Pain points for wedding host:</Heading2>
            <List>
              <ul>
                <li>
                  Difficult to engage individually with guest through
                  livestreaming
                </li>
                <li>Unable to feel presence of guests during e-wedding</li>
              </ul>
            </List>
            <Heading2>Pain points for wedding guest</Heading2>
            <List>
              <ul>
                <li>Camera-shy, afraid to speak up in Zoom</li>
                <li>
                  e-Angpao is less sincere because it cannot be customized
                </li>
              </ul>
            </List>
            <Heading2>Pain point for both</Heading2>
            <Body>
              Sense of detachment because there interaction is not possible.
            </Body>
            <Heading1>Persona</Heading1>
            <Body>
              To personify the key findings, we created two personas who
              represent our wedding couple and guest.
            </Body>
            <Image src={personaLihui} />
            <Image src={personaDexter} />
            <Heading1>Customer Journey Map</Heading1>
            <Body>
              We then used Customer Journey Map to visualize the flow of a
              typical e-wedding experience for the two target groups. The
              e-wedding process was split into three parts: pre-wedding, wedding
              and post-wedding. We were then able to identify gaps in the
              e-wedding process that we could use as design opportunities for
              our solution. These gaps were focused on moments where the guests
              and the couple where the feeling of togetherness was lacking.
            </Body>
            <Image src={CJMHost} />
            <Image src={CJMGuest} />
            <Heading1>Design Opportunities</Heading1>
            <Body>
              From the customer journey map, we had identified a few design
              opportunities. To narrow down the focus, we used the potential of
              nurturing togetherness as the deciding factor to choose
              opportunity. The selected were:
            </Body>
            <List>
              <ol>
                <li>Encouragement for guests to turn on their cameras</li>
                <li>Customizable e-Angpao</li>
                <li>
                  Well-wishes repository that removes manual hassle from hosts
                </li>
              </ol>
            </List>
            <Heading1>Ideation</Heading1>
            <Heading2>Scenario Sketches</Heading2>
            <Body>
              The ideation process that we had used are scenario sketches.
              Through this method, we could list down the requirements of the
              solutions that will guide us in the prototyping phase.
            </Body>
            <Image src={scenarioSketchesLihui} />
            <Image src={scenarioSketchesDexter} />
            <Heading1>Design Solution: With Love (新婚祝福）</Heading1>
            <Image src={finalDesign} />
            <Body>
              With Love is envisioned to be an extension that is built into
              Zoom. With Love aims to open up an official avenue of
              communication online that guests can use to give blessings to the
              couple. This way, the guests can stay involved in the beautiful
              moment, no matter what kind of guest they are. With Love aims to
              do this in a way that makes it known to both parties that they are
              enjoying the moment together.
            </Body>
            <Image src={finalDesign1} />
            <Body>There are five features that make up With Love.</Body>
            <Heading2>Feature 1 : Hosts Welcome Message</Heading2>
            <Image src={feature1} />
            <Heading2>
              Feature 2 : Adding personalized virtual background to be used by
              guest
            </Heading2>
            <Image src={feature2} />
            <Heading2>Feature 3 : Guest's Multimedia Blessings</Heading2>
            <Image src={feature3} />
            <Heading2>Feature 4 : e-Angpao</Heading2>
            <Image src={feature4} />
            <Heading2>Feature 5 : e-Guestbook</Heading2>
            <Image src={feature5} />
            <Heading2>Overall Flow for Host</Heading2>
            <Body>
              To prepare for the e-wedding, they would first schedule a meeting
              and turn on the With Love feature. They can then customize a
              welcome and thank you message for the guests. Additionally, they
              can also upload virtual backgrounds for the guests to use during
              the wedding itself. During the wedding, they would use Zoom as per
              normal. After the wedding, they would then be able to access a
              link provided to them after the wedding that allows them to access
              a web page that has collated all the guests' well wishes.
            </Body>
            <Image src={overallFlowHost} />
            <Heading2>Overall Flow for Guest</Heading2>
            <Body>
              All the interactions that the guest has with With Love are all
              during the wedding itself. The guest would first be able to access
              With Love as a normal button on the Zoom user interface. They
              would be then greeted by the couple's welcome message, and then be
              prompted to curate their well-wishes, with the freedom to add in
              photos, videos and gifs. Guests can use the virtual backgrounds
              from the couple in the photos and videos they attach. Once they
              are done, they would then be led to the 'add angpao' section,
              where they are able to attach an angpao with a design of their
              choice. They may also skip this step if they choose not to give an
              angpao. Upon completing both the well-wishes and angpao section,
              they are able to preview how the message would look like to the
              couple to make any changes if they want. After sending the
              message, they are then led to the confirmation page, where the
              couple's customized 'thank you' message would be displayed.
            </Body>
            <Image src={overallFlowGuest} />
            <Heading1>Intended Impact</Heading1>
            <Body>
              Overall, With Love hopes to provide an avenue for the guest to
              deliver individual sincere well-wishes to the couple, and for the
              couple to feel the warmth of the guests' presence as they read
              these well-wishes. This is so that we can once again re-establish
              the closeness between the host and the guest, to achieve the
              feeling of togetherness again in an e-wedding.
            </Body>
            <Heading1>Lesson Learnt</Heading1>
            <Body>
              My main key takeaway from this project is that it is worth to pay
              a lot of attention on the research because only research would
              make us a better designer by solving the right problem. Besides,
              approaching design culturally is interesting because we were used
              to given clearly defined requirements, especially when doing
              programming. Another plus point for me was this project has made
              understand my own culture better.
            </Body>
          </div>
          <footer className="text-center text-sm opacity-50 my-5">
            © 2020-{new Date().getFullYear()} Tan Shin Jie. Site built with ❤️
            by yours truly.
          </footer>
        </div>
      </div>
    </main>
  );
};

export default WithLovePage;
