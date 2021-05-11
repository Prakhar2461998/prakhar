import React, { Component } from 'react'
import xenonstack from './xenonstack.png'
import Rooman from './Rooman.png'
import Safe from  './Safe.jpg'
class Experience extends Component {

    render(){
        return(

            <section class="text-gray-400 bg-blue-200 body-font">
                
  <div class="container px-5 py-24 mx-auto">
  <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">EXPERIENCE</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
     
  
      <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={Rooman} />
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
       
     
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">XENONSTACK-FRONT END DEVELOPER</h2>
        <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
        <a class="mt-3 text-indigo-400 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
     
  
     <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={xenonstack} />
         <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      
    
     <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
       <h2 class="text-gray-900 text-lg title-font font-medium mb-2">XENONSTACK-FRONT END DEVELOPER</h2>
       <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
       <a class="mt-3 text-indigo-400 inline-flex items-center">Learn More
         <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
           <path d="M5 12h14M12 5l7 7-7 7"></path>
         </svg>
       </a>
     </div>
   </div>
   <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
     
  
     <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={Safe} />
         <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      
    
     <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
       <h2 class="text-gray-900 text-lg title-font font-medium mb-2">XENONSTACK-FRONT END DEVELOPER</h2>
       <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
       <a class="mt-3 text-indigo-400 inline-flex items-center">Learn More
         <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
           <path d="M5 12h14M12 5l7 7-7 7"></path>
         </svg>
       </a>
     </div>
     
   </div>
    
    <button class="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">DOWNLOAD RESUME</button>
  </div>
</section>
        )
    }
}
export default Experience