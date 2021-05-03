import React, { Component } from 'react'
import Profile from './Profile.png'
class Header extends Component{
    render(){
        return(


<header class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
    <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={Profile} />
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
  
      <span class="ml-3 text-xl">My Profile</span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
      <a  class="mr-5 hover:text-white" defaultChecked>Home</a>
      <a class="mr-5 hover:text-white">My Skill</a>
      <a class="mr-5 hover:text-white">Experience</a>
      <a class="mr-5 hover:text-white">Project</a>
    </nav>
    
  </div>
</header>

        )
    }
}
export default Header;