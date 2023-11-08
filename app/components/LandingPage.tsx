import LightListItem from './LightListItem'
import ListItem from './ListItem'

export default function LandingPage() {
  return (
    <div className="flex flex-col mx-auto max-w-[1000px] gap-10 font-['Cabin'] px-10 mt-48 max-lg:mt-24 overflow-hidden">
      <div className="flex max-md:flex-col max-md:gap-4 w-full justify-center">
        <div className="flex flex-col w-full justify-center max-lg:text-center">
          <h1 className="text-5xl font-bold">Conner Gillette</h1>
          <h2 className="text-xl opacity-70">Full-stack software engineer based in <span className="text-green-400">Redmond, WA, USA.</span></h2>
        </div>
        <div className="flex gap-4 align-middle my-auto max-lg:justify-center">
          <a href="https://linkedin.com/in/connergillette" target="_blank" rel="noreferrer">
            <div className="bg-white text-gray-800 py-1 px-3 rounded-md text-lg font-bold hover:opacity-90 transition-opacity">
              LinkedIn
            </div>
          </a>
          <a href="https://github.com/connergillette" target="_blank" rel="noreferrer">
            <div className="bg-white text-gray-800 py-1 px-3 rounded-md text-lg font-bold hover:opacity-90 transition-opacity">
              GitHub
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-4 w-full">
        <LightListItem superheader="(freelance)" header="Full-Stack Web Development" description="Custom web app and design solutions." context="March 2022 - present"/>
        <LightListItem superheader="Koji" header="Senior Software Engineer" description="Supporting marketplace and user management platforms." context="August 2022 - December 2022"/>
        <LightListItem superheader="Abound" header="Senior Software Engineer" description="Expanding marketplace functionality." context="March 2022 - July 2022"/>
        <LightListItem superheader="G2 Web Services" header="Full-Stack Developer" description="Large-scale web scrapers." context="September 2019 - March 2022"/>
        <LightListItem superheader="Knowledge Anywhere" header="Software Developer (Contract)" description="Building QuickQuiz for Slack." context="December 2017 - December 2020"/>
      </div>
      <div className="whitespace-nowrap flex flex-wrap justify-center gap-4 opacity-70 my-10 max-lg:my-4 w-full text-green-400">
        <span>JavaScript</span>
        <span>TypeScript</span>
        <span>React</span>
        <span>Python</span>
        <span>Ruby on Rails</span>
        <span>Java</span>
        <span>AWS</span>
      </div>
    </div>
  )
}