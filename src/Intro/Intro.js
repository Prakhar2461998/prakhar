import React, { Component } from 'react'
import Image from './Image.jpg'
import myimage from './myimage.svg'
class Intro extends Component{
    render()
    {
        return(
            <section class="text-gray-600 bg-blue-200 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img class="object-cover object-center rounded" alt="hero" src={myimage}/>
              </div>
              <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hi ,I am  <span class=" text-indigo-500 "> Prakhar Srivastava</span> 
                  <br class="hidden lg:inline-block" />
                </h1>
                <p class="mb-8 leading-relaxed"> I am a <span class=" text-indigo-500 "> Software Engineer</span>  with great critical thinking capability who can 
                contribute to any difficult assertion .<br /> A keen observer who has a flexible mindset and optimistic thought process. I have a keen interest in the field <br /> of web development and Cyber Security. </p>
                <div class="flex justify-center">
                <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a class="text-gray-500" href="https://www.facebook.com/prakhar.srivastava.5070">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
     
      <a class="ml-3 text-gray-500" href="https://www.instagram.com/prakhar_246/">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500 cursor-pointer transform hover:scale-105" href="">
              {/* <!-- <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="https://image.flaticon.com/icons/png/512/25/25231.png"></path>
              </svg> --> */}
              <img src="https://image.flaticon.com/icons/png/512/25/25231.png" class="w-5 h-5" />
            </a>
      
      <a class="ml-3 text-gray-500" href="https://www.linkedin.com/in/prakhar-srivastava-5a33771b1/">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
                  
                </div>
              </div>
            </div>
            
          </section>
          
        )
    }
}
export default Intro