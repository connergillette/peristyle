import LightListItem from './LightListItem'
import ProjectWindow from './ProjectWindow'

import Eight from '~/assets/eight.png'
import Lootsheet from '~/assets/lootsheet.png'
import Hunt from '~/assets/hunt.png'
import SectionHeader from './SectionHeader'
import ProjectListItem from './ProjectListItem'

export default function LandingPage() {
  return (
    <>
      <div className="flex flex-col mx-auto max-w-[1000px] font-['Cabin'] mt-10 max-lg:m-4">
        <div className="flex flex-col outline outline-white/20 bg-gray-700 rounded-lg p-10 max-lg:p-4 gap-10 items-center">
          <div className="flex max-md:flex-col max-md:gap-4 w-full justify-center">
            <div className="flex flex-col w-full justify-center max-lg:text-center">
              <h1 className="text-5xl max-lg:text-4xl font-bold">Conner Gillette</h1>
              <h2 className="text-xl text-gray-400">Full-stack software engineer based in <span className="text-green-400">Seattle, WA, USA.</span></h2>
            </div>
            <div className="flex gap-4 align-middle my-auto max-lg:justify-center">
              <a href="https://linkedin.com/in/connergillette" target="_blank" rel="noreferrer">
                <div className="bg-white text-gray-800 py-1 px-3 rounded-md text-lg font-bold hover:opacity-70 transition-opacity">
                  LinkedIn
                </div>
              </a>
              <a href="https://github.com/connergillette" target="_blank" rel="noreferrer">
                <div className="bg-white text-gray-800 py-1 px-3 rounded-md text-lg font-bold hover:opacity-70 transition-opacity">
                  GitHub
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full px-4">
            <LightListItem superheader="(freelance)" header="Full-Stack Web Development" description="Custom web app and design solutions." context="March 2022 - present"/>
            <LightListItem superheader="Koji" header="Senior Software Engineer" description="Marketplace and user management." context="August 2022 - December 2022"/>
            <LightListItem superheader="Abound" header="Senior Software Engineer" description="Expanding marketplace functionality." context="March 2022 - July 2022"/>
            <LightListItem superheader="G2 Web Services" header="Full-Stack Developer" description="Large-scale web scrapers." context="September 2019 - March 2022"/>
            <LightListItem superheader="Knowledge Anywhere" header="Software Developer (Contract)" description="Building QuickQuiz for Slack." context="December 2017 - December 2020"/>
          </div>
        
          <div className="whitespace-nowrap flex max-lg:flex-wrap justify-center gap-10 max-lg:gap-4 max-lg:my-4 text-gray-800 font-bold bg-green-400 py-2 px-4 rounded-lg w-min max-lg:w-full">
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>React</span>
            <span>Python</span>
            <span>Ruby on Rails</span>
            <span>Java</span>
            <span>AWS</span>
          </div>
        </div>

        <section>
          <div className="flex flex-col w-full gap-4 max-md:flex-col p-10 max-lg:p-4">
            <SectionHeader title="Projects" />
            <ProjectListItem name="Overlook" link="https://overlook-five.vercel.app" description="No-signup group scheduling tool. when2meet if it was built in 2024." isWIP />
            <ProjectListItem name="defrag" link="https://github.com/connergillette/defrag" description="A little text-based gamedev experiment." isWIP />
            <ProjectListItem name="Hunt" link="https://hunt-five.vercel.app" description="Job application tracking tool for when spreadsheets get cumbersome." />
            <ProjectListItem name="Lootsheet" link="https://lootsheet.vercel.app" description="AI-assisted note-taking tool for tabletop games." />
            <ProjectListItem name="Eight" link="https://eightoclock.vercel.app" description="Dead-simple daily journaling tool." />
          </div>
        </section>
        <section>
          <div className="flex flex-col w-full gap-4 max-md:flex-col p-10 max-lg:p-4">
            <SectionHeader title="Certifications" />
            <LightListItem superheader="Cloud Services" header="Amazon Web Services" description="Developer Associate" context="2021-2024"/>
          </div>
        </section>
        <section>
          <div className="flex flex-col w-full gap-4 max-md:flex-col p-10 max-lg:p-4">
            <SectionHeader title="Education" />
            <LightListItem superheader="Bachelor's" header="University of Washington Seattle" description="Geographic Information Systems / Informatics" context="2019"/>
          </div>
        </section>
      </div>
    </>
  )
}