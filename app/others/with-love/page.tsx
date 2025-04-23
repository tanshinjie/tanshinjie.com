"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function WithLovePage() {
  return (
    <main>
      <div>
        <div>
          <div className="h-auto bg-pink-400 px-8 rounded-xl">
            <div className="max-w-4xl m-auto">
              <div className="grid grid-cols-1 gap-6">
                <h1 className="text-4xl md:text-5xl font-bold text-white text-opacity-80 mt-10">
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
                  <Image
                    src="/images/with-love/hero.png"
                    alt="With Love Hero"
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
              Design Challenge Statement
            </h3>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              <b>
                "COVID-19 has separated some family members from their hometown,
                how might we recreated some of the activities that will
                typically be done between family members?"
              </b>
            </p>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              The project began with identifying cultural community, ritual and
              the value behind the ritual. The team has selected Singaporean and
              Malaysia Chinese as the community of focus, Chinese Wedding as the
              ritual and "Togetherness" as the cultural value.
            </p>

            <h3 className="font-bold opacity-80 my-8 text-3xl md:text-4xl text-center">
              Problem Statement
            </h3>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
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
            </p>

            <h3 className="font-bold opacity-80 my-8 text-3xl md:text-4xl text-center">
              Contextual Research
            </h3>
            <h3 className="font-bold opacity-80 text-2xl my-8">
              User Interviews
            </h3>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              To get a better understanding of the current wedding scene in the
              Singaporean and Malaysian Chinese community, we interviewed a
              variety of target groups to get different perspectives. These
              included both the wedding couple and the guests from online and
              physical weddings. Overall, we interviewed four people, one from
              each target group.
            </p>
            <div className="my-4">
              <Image
                src="/images/with-love/interview-target-group.png"
                alt="Interview Target Group"
                width={800}
                height={450}
                className="my-4"
              />
            </div>

            <h3 className="font-bold opacity-80 text-2xl my-8">Affinity Map</h3>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              As a lot of qualitative data was gathered from the interviews, we
              used an affinity map to find natural patterns in the feedback of
              these four target groups we interviewed. This enabled us to get
              meaningful insights from the large amounts of feedback we
              gathered.
            </p>
            <div className="my-4">
              <Image
                src="/images/with-love/affinity-map.png"
                alt="Affinity Map"
                width={800}
                height={450}
                className="my-4"
              />
            </div>

            <h3 className="font-bold opacity-80 text-2xl my-8">Empathy Map</h3>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              We also wanted to articulate our findings about the different
              target groups that we interviewed. Hence, we created an empathy
              map to aid us in achieving this.
            </p>
            <div className="my-4">
              <Image
                src="/images/with-love/empathy-map-online-old-wedding-guest.png"
                alt="Empathy Map - Online Old Wedding Guest"
                width={800}
                height={450}
                className="my-4"
              />
            </div>
            <div className="my-4">
              <Image
                src="/images/with-love/empathy-map-online-wedding-couple.png"
                alt="Empathy Map - Online Wedding Couple"
                width={800}
                height={450}
                className="my-4"
              />
            </div>

            <h3 className="font-bold opacity-80 my-8 text-3xl md:text-4xl text-center">
              Key findings from user studies
            </h3>
            <h3 className="font-bold opacity-80 text-2xl my-8">
              Pain points for wedding host:
            </h3>
            <div className="text-black text-opacity-80 font-medium leading-8 my-4">
              <ul>
                <li>
                  Difficult to engage individually with guest through
                  livestreaming
                </li>
                <li>Unable to feel presence of guests during e-wedding</li>
              </ul>
            </div>

            <h3 className="font-bold opacity-80 text-2xl my-8">
              Pain points for wedding guest
            </h3>
            <div className="text-black text-opacity-80 font-medium leading-8 my-4">
              <ul>
                <li>Camera-shy, afraid to speak up in Zoom</li>
                <li>
                  e-Angpao is less sincere because it cannot be customized
                </li>
              </ul>
            </div>

            <h3 className="font-bold opacity-80 text-2xl my-8">
              Pain point for both
            </h3>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              Sense of detachment because there interaction is not possible.
            </p>

            <h3 className="font-bold opacity-80 my-8 text-3xl md:text-4xl text-center">
              Personas and Customer Journey Map
            </h3>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              From the insights gathered, we came up with 2 personas (one for
              the wedding couple, another for the guest) and their respective
              customer journey map.
            </p>
            <div className="my-4">
              <Image
                src="/images/with-love/persona-lihui.png"
                alt="Persona - Lihui"
                width={800}
                height={450}
                className="my-4"
              />
            </div>
            <div className="my-4">
              <Image
                src="/images/with-love/persona-dexter.png"
                alt="Persona - Dexter"
                width={800}
                height={450}
                className="my-4"
              />
            </div>
            <div className="my-4">
              <Image
                src="/images/with-love/CJM-guest.png"
                alt="Customer Journey Map - Guest"
                width={800}
                height={450}
                className="my-4"
              />
            </div>
            <div className="my-4">
              <Image
                src="/images/with-love/CJM-host.png"
                alt="Customer Journey Map - Host"
                width={800}
                height={450}
                className="my-4"
              />
            </div>

            <h3 className="font-bold opacity-80 my-8 text-3xl md:text-4xl text-center">
              Ideation and Scenario
            </h3>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              I drew some scenario sketches to visualize how one of our
              potential ideas would work in real-world situation.
            </p>
            <div className="my-4">
              <Image
                src="/images/with-love/scenario-sketches-lihui.png"
                alt="Scenario Sketches - Lihui"
                width={800}
                height={450}
                className="my-4"
              />
            </div>
            <div className="my-4">
              <Image
                src="/images/with-love/scenario-sketches-dexter.png"
                alt="Scenario Sketches - Dexter"
                width={800}
                height={450}
                className="my-4"
              />
            </div>

            <h3 className="font-bold opacity-80 my-8 text-3xl md:text-4xl text-center">
              Features
            </h3>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              I designed 5 main features for the platform:
            </p>
            <div className="my-4">
              <Image
                src="/images/with-love/feature1.png"
                alt="Feature 1"
                width={800}
                height={450}
                className="my-4"
              />
            </div>
            <div className="my-4">
              <Image
                src="/images/with-love/feature2.png"
                alt="Feature 2"
                width={800}
                height={450}
                className="my-4"
              />
            </div>
            <div className="my-4">
              <Image
                src="/images/with-love/feature3.png"
                alt="Feature 3"
                width={800}
                height={450}
                className="my-4"
              />
            </div>
            <div className="my-4">
              <Image
                src="/images/with-love/feature4.png"
                alt="Feature 4"
                width={800}
                height={450}
                className="my-4"
              />
            </div>
            <div className="my-4">
              <Image
                src="/images/with-love/feature5.png"
                alt="Feature 5"
                width={800}
                height={450}
                className="my-4"
              />
            </div>

            <h3 className="font-bold opacity-80 my-8 text-3xl md:text-4xl text-center">
              Overall Flow
            </h3>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              Host and guest experience different flows in the system:
            </p>
            <div className="my-4">
              <Image
                src="/images/with-love/overall-flow-host.png"
                alt="Overall Flow - Host"
                width={800}
                height={450}
                className="my-4"
              />
            </div>
            <div className="my-4">
              <Image
                src="/images/with-love/overall-flow-guest.png"
                alt="Overall Flow - Guest"
                width={800}
                height={450}
                className="my-4"
              />
            </div>

            <h3 className="font-bold opacity-80 my-8 text-3xl md:text-4xl text-center">
              Final Design
            </h3>
            <div className="my-4">
              <Image
                src="/images/with-love/final-design.png"
                alt="Final Design"
                width={800}
                height={450}
                className="my-4"
              />
            </div>
            <div className="my-4">
              <Image
                src="/images/with-love/final-design-1.png"
                alt="Final Design 1"
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
