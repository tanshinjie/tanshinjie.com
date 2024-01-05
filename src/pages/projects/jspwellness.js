import React from "react";
import "../../styles/global.css";
import src from "../../images/shinjie.jpg";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import hero from "../../images/jspwellness/hero.png";
import jspLogoPrevious from "../../images/jspwellness/jsp-logo-previous.png";
import sketches from "../../images/jspwellness/sketches.png";
import conceptDesign from "../../images/jspwellness/concept-design.png";
import colorScheme from "../../images/jspwellness/color-scheme.png";
import example from "../../images/jspwellness/example.png";
import finalDesign from "../../images/jspwellness/final-design.png";
import typography from "../../images/jspwellness/typography.png";
import withSupportingText from "../../images/jspwellness/with-supporting-text.png";
import { Body, Heading1, Heading2, Image } from "../../components/Content";
import ScrollToTop from "../../components/ScrollToTop";
import { Helmet } from "react-helmet";

const JSPWellnessPage = () => {
  return (
    <main>
      <Helmet>
        <title>Logo redesign for local bone alignment wellness centre</title>
      </Helmet>
      <div>
        <ScrollToTop />
        <div>
          <div className="h-auto bg-neutral-900 px-8">
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
                  Logo redesign for local bone alignment wellness centre
                </h1>
                <div>
                  <h2 className="text-base md:text-2xl font-bold text-white text-opacity-50">
                    JSP Wellness Bone Alignment (Branding)
                  </h2>
                  <h2 className="text-base md:text-2xl font-bold text-white text-opacity-50">
                    Dec 20 - Jan 21 (2 weeks)
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="uppercase font-medium opacity-50 text-white my-4">
                      Background
                    </h3>
                    <p className="text-white text-opacity-80 font-medium">
                      This project was a side project for my mother's new
                      business back in Malaysia. JSP Wellness Bone Alignment is
                      a budding personal wellbeing centre in Penang that
                      provides bone alignment treatment services. I redesigned
                      the business's logo during my short winter break in 2020.
                    </p>
                  </div>
                  <div>
                    <h3 className="uppercase font-medium opacity-50 text-white my-4">
                      Tools and Methods
                    </h3>
                    <ul className="text-white text-opacity-80 font-medium">
                      <li>Pen and Paper</li>
                      <li>Adobe Illustrator</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="uppercase font-medium opacity-50 text-white my-4">
                      Contribution
                    </h3>
                    <ul className="text-white text-opacity-80 font-medium">
                      <li>Branding</li>
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
            <Heading1>Previous Logo</Heading1>
            <Image src={jspLogoPrevious} />
            <Body>
              Personally speaking, I felt the logo has too many texts and a
              rather outdated style. Besides, there is no eye catcher on the
              logo because the graphics and the texts seems to be on the same
              level of visual hierarchy. A consequence to the previous point is
              that logo cannot be broken down into smaller piece and has to stay
              as a whole at all times. The design that I proposed was one that
              is focus, modern looking and modular.
            </Body>
            <Heading1>Plan of Attack</Heading1>
            <Body>
              To begin with, I figured that the company name "JSP" has to be the
              main focus of the logo because it is the only thing that is unique
              to the company. To further substantiate the need for emphasis on
              "JSP", one of the employees mentioned that people had mistaken the
              logo as "JPS". I think it happened partly because the name “JSP”
              has a disadvantage of not being a spell-able word. Instead of a
              logo like Nike, which one can pronouce, "JSP" is more like "IBM"
              where people had to remember the characters separately. As such,
              the plan is to start with a focus on "JSP", and then add on the
              remaining part.
            </Body>
            <Heading1>Exploration with Sketches</Heading1>
            <Image src={sketches} />
            <Body>
              From the sketches, I realised I could integrate elements of a
              spine or bone into the logo, since bone alignment treatment is the
              main selling point of the company. I used Adobe Illustrator to
              create higher fidelity of different designs. I initially used
              rectangle as the bone but soon realised that people cannot tell it
              is bone. Hence, I switched to using graphics that resemble spine.
            </Body>
            <Image src={conceptDesign} />
            <Heading2>Adding Supporting Text</Heading2>
            <Body>
              Eventually I settled a "JSP" with the spine graphics curving
              outwards and has sound effect graphics. I made the letter “P”
              overlap with the spine graphics to make it looks like the spine is
              being adjusted by the "P". After the main focus of the logo was
              done, it was time to bring in the supporting text - “Wellness Bone
              Alignment”. Following were my different designs. I consulted the
              company for this and they chose DESIGN 1 in the end.
            </Body>
            <Image src={withSupportingText} />
            <Heading2>Typography</Heading2>
            <Body>
              I decided to use a sans-serif font for the "JSP" because it gave a
              more friendly feel and has the same style as the spine graphics.
              As for I think it gave an impression of a rather young and lively
              feel to the logo which appeals to a younger generation. As for the
              "Wellness Bone Alignment", I chose serif fonts to give contrast
              between the focus and the supporting words.
            </Body>
            <Image src={typography} />
            <Heading2>Color</Heading2>
            <Body>
              The main color of the company is black and gold, so I kept the two
              and introduced a few more as supporting colors.
            </Body>
            <Image src={colorScheme} />
            <Heading1>Final Design</Heading1>
            <Body>
              Lastly, I added a subtle gradient to the focus of the logo which
              is the “JSP” and the spine to make it pop. In my final
              deliverables, I also create the grayscale version of the logo.
            </Body>
            <Image src={finalDesign} />
            <Heading1>Real World Usage</Heading1>
            <Body>
              After I completed the logo, I also helped them to create a few
              graphics to introduce the new logo. You can find the business's
              Facebook page <a>here</a> (shameless plug XD).
            </Body>
            <Image src={example} />
            <Heading1>Afterthought</Heading1>
            <Body>
              I hope the logo can help the business leave a strong impression on
              people and eventually create trust and improve sales. In this logo
              redesign journey, the key takeaways for me is to have the courage
              to express the idea and work towards realizing the idea. While it
              was frustrating at times when I was stuck, but I felt fulfilled to
              have gone through the messy process to reach the end product.
              Lastly, I really appreciate you for spending your time and reading
              this piece of writing. I welcome suggestions and critics if you
              think the logo is lacking anything. I will be very happy to take
              any feedback :)
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

export default JSPWellnessPage;
