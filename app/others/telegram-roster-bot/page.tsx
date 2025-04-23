"use client";

import React from "react";
import { Link } from "next-view-transitions";

import Image from "next/image";

export default function TelegramRosterBotPage() {
  return (
    <main>
      <div>
        <div>
          <div className="h-auto bg-sky-600 px-8 rounded-xl">
            <div className="max-w-4xl m-auto">
              <div className="grid grid-cols-1 gap-6">
                <h1 className="text-4xl md:text-5xl font-bold text-white text-opacity-80 mt-10">
                  Because I can't remember it is whose turn to clean toilet and
                  house this week
                </h1>
                <div>
                  <h2 className="text-base md:text-2xl font-bold text-white text-opacity-50">
                    Telegram Roster Bot (Bot Programming)
                  </h2>
                  <h2 className="text-base md:text-2xl font-bold text-white text-opacity-50">
                    Apr 22
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="uppercase font-medium opacity-50 text-white my-4">
                      Background
                    </h3>
                    <p className="text-white text-opacity-80 font-medium">
                      This short blog talks about how I created a telegram bot
                      and used Github Action to remind me and my new housemates
                      whose turn is to wash toilets and clean the house (because
                      I can't remember whose turn is it).
                    </p>
                  </div>
                  <div>
                    <h3 className="uppercase font-medium opacity-50 text-white my-4">
                      Tools and Methods
                    </h3>
                    <ul className="text-white text-opacity-80 font-medium">
                      <li>Github Action</li>
                      <li>JavaScript</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="uppercase font-medium opacity-50 text-white my-4">
                      Read time
                    </h3>
                    <ul className="text-white text-opacity-80 font-medium">
                      <li>3 mins</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Image
                    src="/images/telegram-roster-bot/hero.png"
                    alt="Telegram Roster Bot Hero"
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
              Weekly Roster
            </h3>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              Since my housemates and I have already agreed that we will split
              the houseworks into two, and each housework would be taken up by a
              group of two taking turns repeatedly, so we have the following
              arrangement, every week:
            </p>
            <div className="text-black text-opacity-80 font-medium leading-8 my-4">
              <ul>
                <li>- Clean toilet: Me, Housemate-A</li>
                <li>- Clean house floor: Housemate-B, Housemate-C</li>
              </ul>
            </div>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              So the logic is simple, one of the weeks I and Housemate-B will
              form a pair to clean the toilet and house respectively, and the
              following week will be Housemate-A and Housemate-C's turns. This
              pattern will repeat indefinitely until we have a new arrangement.
            </p>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              With the routine out of the way, now I just have to build it out.
              I first created a telegram bot through
              <Link href="https://t.me/botfather" target="_blank">
                <strong>@BotFather</strong>
              </Link>
              , a helper bot created by the telegram team to help developers
              create their own bot. Then I added the bot to my house's group
              chat. The role of the bot is to simply ping our group with that
              week's roster.
            </p>
            <div className="my-4">
              <Image
                src="/images/telegram-roster-bot/bot-father.jpg"
                alt="Bot Father"
                width={800}
                height={450}
                className="my-4"
              />
            </div>
            <h3 className="font-bold opacity-80 my-8 text-3xl md:text-4xl text-center">
              Implementation
            </h3>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              As for the roster generation, I simple forked out a project by
              <Link
                href="https://github.com/richierich25/weather-bot.git"
                target="_blank"
              >
                <strong>richierich25</strong>
              </Link>
              on Github where his project was to send the weather information
              every 15 minutes. I modify the code to fit my own use case.
              Basically, I have a nodejs main function which will get invoked
              whenever the file index.js gets executed. Inside the main
              function, is another function call to get the cleaner telegram
              username (hardcoded in an array) for the toilet and house floor.
              With the username returned, I simply generate a message from the
              template and fire the telegram's API call to send a message to our
              group through the bot.
            </p>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              As this app is not running 24/7, we cannot save the state in this
              script. To easily solve that, I simply write the next person to a
              file (toilet.txt, house.txt) and retrieve it the next week the
              same script gets executed and updates the file with the next
              person.
            </p>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              Lastly, to automatically trigger the script at the same time every
              week, I used
              <Link href="https://github.com/features/actions" target="_blank">
                <strong>Github Action</strong>
              </Link>
              to do the job. One caveat I noticed was that the time I received
              the message from the bot is not the time configured on Github
              Action. After a quick search online, it was probably due to a
              large number of jobs from other developers, causing the jobs to be
              processed later than it was supposed to be. Hence, use it with
              care if you need to run time-sensitive jobs with it.
            </p>
            <div className="my-4">
              <Image
                src="/images/telegram-roster-bot/github-action-build.jpg"
                alt="Github Action Build"
                width={800}
                height={450}
                className="my-4"
              />
            </div>
            <p className="text-black text-opacity-80 font-medium leading-8 my-4">
              And that's basically it! A simple over-the-weekend project that
              solves my own need. Hope you enjoy reading this piece, thank you
              <Link href="https://github.com/richierich25" target="_blank">
                <strong>richierich25</strong>
              </Link>
              for the original project, Github for the free services and my
              lovely housemates for keeping our house clean!
            </p>
            <div className="my-4">
              <Image
                src="/images/telegram-roster-bot/message.jpg"
                alt="Telegram Message"
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
