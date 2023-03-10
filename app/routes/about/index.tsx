import { Link, useLocation } from '@remix-run/react'
import { useEffect, useState } from 'react'
import profile from '~/assets/profile.jpg'

export default function About() {
  const [transitionProgress, setTransitionProgress] = useState(false)

  const location = useLocation()

  useEffect(() => {
    setTransitionProgress(true)
  }, [location])

  return (
    <div className="max-w-screen min-h-screen bg-teal-400">
      <div className={`flex max-xl:flex-col max-xl:items-center container mx-auto pt-16`}>
        <div className="flex flex-col justify-center max-xl:justify-center items-center">
          <img src={profile} alt="A man with glasses and a beard" className="h-96 w-96 object-cover rounded-2xl max-xl:w-48 max-xl:h-48 drop-shadow-xl" />
          <div className="flex text-[#333333] font-['bely-display'] p-3 gap-3 items-center justify-center">
            <a href="https://www.linkedin.com/in/connergillette" target="_blank" rel="noreferrer">
              <div className="flex rounded-md bg-white bg-opacity-30 px-5 py-3 transition hover:scale-105 hover:text-white hover:drop-shadow-md">LinkedIn</div>
            </a>
            <a href="https://www.github.com/connergillette" target="_blank" rel="noreferrer">
              <div className="flex rounded-md bg-white bg-opacity-30 px-5 py-3 transition hover:scale-105 hover:text-white hover:drop-shadow-md">GitHub</div>
            </a>
            <a href="https://www.twitter.com/connerwgillette" target="_blank" rel="noreferrer">
              <div className="flex rounded-md bg-white bg-opacity-30 px-5 py-3 transition hover:scale-105 hover:text-white hover:drop-shadow-md">Twitter</div>
            </a>
          </div>
        </div>
        <div className="flex flex-col ml-auto max-xl:mt-5 mb-10">
          <div className="inline-block mb-10 max-xl:mb-2">
            <h1 className={`transition duration-1000 text-[7vw] leading-[7vw] font-['bely-display'] whitespace-nowrap text-right max-xl:text-center max-xl:text-[48px] max-xl:leading-[48px] text-[#fffcf5] drop-shadow-lg ${transitionProgress ? 'opacity-1' : 'opacity-0'}`}>
              Conner Gillette
            </h1>
            <h2 className="text-[32px] text-right max-xl:text-center">Full-Stack Dev</h2>
            <h3 className="text-[24px] text-right max-xl:text-center">Seattle Area, USA</h3>
          </div>
          <div className="flex flex-col gap-3 text-right max-xl:text-left max-xl:m-10 text-xl max-xl:text-md">
            <div>
              <h4 className="font-['bely-display']">Senior Software Engineer @ Koji</h4>
              <em>August 2022 - December 2022</em>
            </div>
            <div>
              <h4 className="font-['bely-display']">Senior Software Engineer @ Abound</h4>
              <em>March 2022 - July 2022</em>
            </div>
            <div>
              <h4 className="font-['bely-display']">Full-Stack Software Developer @ G2 Web Services (Verisk Financial)</h4>
              <em>September 2019 - March 2022</em>
            </div>
            <div>
              <h4 className="font-['bely-display']">Software Developer @ Knowledge Anywhere</h4>
              <em>December 2017 - December 2020</em>
            </div>
            <div>
              <h4 className="font-['bely-display']">Software Development Intern @ Icertis</h4>
              <em>June 2018 - August 2018</em>
            </div>
            <div>
              <h4 className="font-['bely-display']">Software Development Intern @ Microsoft</h4>
              <em>June 2014 - August 2014</em>
            </div>
            <div className="flex font-['bely-display'] gap-5 max-xl:gap-2 pt-5 justify-end max-xl:justify-center flex-wrap text-md">
              <div className="flex rounded-md bg-white bg-opacity-30 px-5 py-3">JavaScript</div>
              <div className="flex rounded-md bg-white bg-opacity-30 px-5 py-3">TypeScript</div>
              <div className="flex rounded-md bg-white bg-opacity-30 px-5 py-3">React</div>
              <div className="flex rounded-md bg-white bg-opacity-30 px-5 py-3">Ruby on Rails</div>
              <div className="flex rounded-md bg-white bg-opacity-30 px-5 py-3">Python</div>
              <div className="flex rounded-md bg-white bg-opacity-30 px-5 py-3">Java</div>
            </div>
            <div className="flex font-['bely-display'] gap-5 max-xl:gap-2 pt-5 justify-end max-xl:justify-center flex-wrap text-md">
              <div className="flex rounded-md bg-blue-400 bg-opacity-30 px-5 py-3">AWS</div>
              <div className="flex rounded-md bg-blue-400 bg-opacity-30 px-5 py-3">Heroku</div>
              <div className="flex rounded-md bg-blue-400 bg-opacity-30 px-5 py-3">Algolia</div>
              <div className="flex rounded-md bg-blue-400 bg-opacity-30 px-5 py-3">Slack API</div>
            </div>
            <div className="flex font-['bely-display'] gap-5 max-xl:gap-2 pt-5 justify-end max-xl:justify-center flex-wrap text-md">
              <div className="flex rounded-md bg-blue-600 bg-opacity-30 px-5 py-3">Web scraping</div>
              <div className="flex rounded-md bg-blue-600 bg-opacity-30 px-5 py-3">UI / UX design</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}