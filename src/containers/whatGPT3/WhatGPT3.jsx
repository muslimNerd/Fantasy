import React from 'react';
import { Feature } from '../../components'
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className='gpt__whatgpt3 section__margin' id='wgpt3'>
      <div className='gppt3__whatgpt3-feature'>
        <Feature title='What is React.js?' text='React.js, more commonly known as React, is a free, open-source JavaScript library. It works best to build user interfaces by combining sections of code (components) into full websites. Originally built by Facebook, Meta and the open-source community now maintain it.'/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title='Chatbots' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought.'/>
        <Feature title='Knowledgebase' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments' />
        <Feature title='Education' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' />
      </div>
    </div>
  )
  }

  export default WhatGPT3;