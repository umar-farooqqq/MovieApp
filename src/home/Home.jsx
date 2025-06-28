import React from 'react' 
import Sidebar from '../components/Sidebar.jsx'
import Bottombar from '../components/Bottombar.jsx'
import Feed from '../components/Feed.jsx'
import Card from '../components/Card.jsx'


const Home = () => {
  return (
    <div>
      <div className='lg:flex flex-row min-h-screen bg-gray-600'>
        <Sidebar />
        <Feed />
        <Card />
      </div>
      <Bottombar />
    </div>
  )
}

export default Home