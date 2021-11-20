import React from "react";

export default function About() {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hello and welcome! I'm Carrye.
                <br className="hidden lg:inline-block" /> I love sales, meeting new people, learning new technology, and building web apps. I am looking for a Sales/Solutions/Presales Engineering role. I am open to relocation for the right team. 
              </h1>
              <p className="mb-8 leading-relaxed">
              Let me start off by introducing myself. My name is Carrye Gaulin, and I am originally from Bangor, Maine. Don't let that fool you! I have ventured to farther-off places. I have spent time living in various locations, including the U.S. Virgin Islands, the Florida Keys, and North Carolina beaches. I love traveling to new places and old favorites on exciting adventures. I love the sun, sand, and all forms of fishing. I try to learn something exciting and fresh every day to add value to my personal or professional life. Sounds nothing like sitting in front of a computer and creating, does it? I have been interested in computers and what they can do since the first time I used them. I worked very hard from high school and was accepted into a computer science program at the University of Maine in Orono. Unfortunately, circumstances beyond my control abruptly removed me from that path and thrust me into the open arms of the hospitality industry. There, I learned how to communicate with people from diverse locations and lifestyles and provide them with precisely what they are looking for. Full circle 20 years later, I have returned, this time, however, with a successful knack for sales coupled with an adult perspective and the same passion and curiosity for the pursuit of knowledge in the computer science field. I am hoping for a role that can showcase the broad scope of my skills, all while continuing to grow. The road is challenging, but how much sweeter victory is after a good challenge.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Work With Me
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  See My Past Work
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./MeInterview.png"
              />
            </div>
          </div>
        </section>
      );
}