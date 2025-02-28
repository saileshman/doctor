import React from 'react'
import Head from '../components/Head';
import Speciality from '../components/Speciality';
import Topdoctors from '../components/Topdoctors';
import Banner from '../components/Banner';


function Home() {
  return (
    <div>
      <Head />
      <Speciality />
      <Topdoctors />
      <Banner />
    </div>
  )
}

export default Home;
