import React, { Component } from 'react'

class Footer extends Component{
    render(){
        return(
          <footer class="body-font lg:px-32 px-2 border-2" id="contact">
          <div class="container px-5 mt-16 md:pb-20 pb-0 mx-auto">
              <div class="flex flex-col text-center w-full mb-16">
                  <h1 class="text-xl font-medium title-font text-indigo-600">Contact</h1>
                  <p class="lg:w-2/3 sm:text-3xl text-2xl mx-auto font-bold capitalize">I'd love to hear from you</p>
                  <p class="lg:w-2/3 sm:text-xl text-lg mx-auto capitalize my-4">In case you want to reach out !</p>
              </div>
              <div class="flex flex-wrap sm:-m-4 -mx-4 md:-mb-10 md:-m-6 -mt-4 text-center">
                  <div class="p-4 md:w-1/3 sm:mb-0 md:mb-10 mb-6 mx-auto">
                      <i class="fa fa-map-marker fa-3x"></i>
                      <h2 class="text-xl font-medium text-gray-900 mt-5 capitalize">Find me at</h2>
                      <p class="text-base leading-relaxed mt-2">1/769 Vikas Nagar,
                          Lucknow,
                          Uttar Pradesh, India
                          - 226022</p>
                  </div>
                  <div class="p-4 md:w-1/3 sm:mb-0 md:mb-10 mb-6 mx-auto">
                      <i class="fa fa-envelope fa-3x"></i>
                      <h2 class="text-xl font-medium text-gray-900 mt-5 capitalize">Email me at</h2>
                      <p class="text-base leading-relaxed mt-2">prakharsri246@gmail.com</p>
                  </div>
                  <div class="p-4 md:w-1/3 sm:mb-0 md:mb-10 mb-6 mx-auto">
                      <i class="fa fa-phone fa-3x"></i>
                      <h2 class="text-xl font-medium text-gray-900 mt-5 capitalize">Call me at</h2>
                      <p class="text-base leading-relaxed mt-2">Mobile : (+91) 7905128908</p>
                  </div>
              </div>
          </div>
          <div>
              <div class="container shadow-2xl px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                  <p class="text-sm sm:ml-6 sm:mt-0 mt-4">© Copyright Prakhar Srivastava 2021
                  </p>
                  <span class="inline-flex sm:ml-auto justify-center sm:justify-start md:mt-0 mt-4">
                      <a class="transform hover:scale-110 hover:text-indigo-700"
                          href="https://www.facebook.com/punit.raj.355744/" target="_blank">
                          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              class="w-5 h-5" viewBox="0 0 24 24">
                              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                      </a>
                      <a class="ml-3 transform hover:scale-110 hover:text-indigo-700"
                          href="https://www.instagram.com/raj.punit3299/" target="_blank">
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                              stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                          </svg>
                      </a>
                      <a class="ml-3" href="https://github.com/punit3299" target="_blank">
                          <img src="https://image.flaticon.com/icons/png/512/25/25231.png"
                              class="w-5 h-5 transform hover:scale-110 hover:text-indigo-700" />
                      </a>
                      <a class="ml-3 transform hover:scale-110 hover:text-indigo-700"
                          href="https://www.linkedin.com/in/punit-raj-6765aba4/" target="_blank">
                          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                              stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                              <path stroke="none"
                                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                              </path>
                              <circle cx="4" cy="4" r="2" stroke="none"></circle>
                          </svg>
                      </a>
                  </span>
              </div>
          </div>
      </footer>
        )
    }
}
export default Footer;
