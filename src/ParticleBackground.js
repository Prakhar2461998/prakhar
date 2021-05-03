import React, { Component } from 'react'
import Particles from 'react-particles-js';
import particlesConfig from './config/particle-config'
 


export default function ParticleBackground(){

    return(

      <Particles params={ particlesConfig} />

    )
}