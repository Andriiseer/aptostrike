import React, { useEffect, useState } from 'react';
import { InnerHtml } from './innerHtml';
import Head from 'next/head'
import Shaders from './Shaders'
import { useScript } from '../../hooks/useScript';

export default function PlanetGenerator(props) { 
  useScript('/jquery-3.2.0.min.js');
  useScript('/seedrandom.js')
  useScript('/webgl/hash.js')
  useScript('/webgl/main.js')
  useScript('/bundle.js')

  useEffect(() => {
    if (props.mint_hash !== '') {
      localStorage.setItem('hash', props.mint_hash)
      window.hashGen()
      window.main()
      window.initPlanet(props.mint_hash);
      window.bundle()
    }
  }, [props.mint_hash])

  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Dosis|Raleway" rel="stylesheet" />
      </Head>
      <Shaders />
      
      <div dangerouslySetInnerHTML={InnerHtml} ></div>
      {!props.mint_hash && <p>Loading NFT, please wait...</p>}
    </div>
  )
}
