import React, { Component } from 'react'
import ReactLogo from './ReactLogo.png'
import Javascript from './Javascript.jpg'
import Html from './Html.png'
import Nodejs from './Nodejs.png'
import Mongodb from './Mongodb.png'
import Css from './Css.png'
import  Aws from './Aws.png'
import Cybersecurity from './Cybersecurity.png'
import GitHub from './GitHub.png'
 class Skill extends Component {
    
    render(){

   return(

    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">MY SKILLS</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
    </div>
    <div class="flex flex-wrap -m-2">
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex shadow-2xl items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ReactLogo} />
          <div class="flex-grow">
            <h2 class="text-gray-900 shadow-2xl title-font font-medium">REACT JS</h2>
            <p class="text-gray-500"></p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full shadow-2xl flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-right flex-shrink-0 rounded-full mr-4" src={Javascript} />
          <div class="flex-grow">
            <h2 class="text-gray-900 transition delay-150 duration-300 ease-in-out title-font font-medium">JAVASCRIPT</h2>
            <p class="text-gray-500"></p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex  shadow-2xl items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src= {Html} />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">HTML</h2>
            <p class="text-gray-500"></p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex shadow-2xl items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={Nodejs} />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">NODE JS</h2>
            <p class="text-gray-500"></p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center shadow-2xl border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={Mongodb} />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">MONGODB</h2>
            <p class="text-gray-500"></p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center shadow-2xl border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={Css} />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">CSS</h2>
            <p class="text-gray-500"></p>
          </div>
        </div> 
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center shadow-2xl border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={Aws}/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">AWS</h2>
            <p class="text-gray-500"></p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center shadow-2xl border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={Cybersecurity} />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">CYBER SECURITY</h2>
            <p class="text-gray-500"></p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center shadow-2xl border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={GitHub} />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">GitHub</h2>
            <p class="text-gray-500"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   ) 
    }
}
export default Skill;
