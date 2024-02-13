import React, {useState} from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

const App = () => {

  return (
    <div>
      
      <Header header={
      <ul><a href="#">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </a></ul>}/>
      <Content content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, cupiditate veritatis est eaque magni totam repellendus suscipit id autem possimus consequuntur, rem tempore sit ad nam ea dolor sequi velit molestiae sed! Velit temporibus odit voluptates, totam, dolor magnam cumque magni maxime unde sapiente a explicabo atque? Nisi, illo nulla."/>
      <Footer footer="&copy; 2024 deb prentice"/>
    </div>
  )
}


export default App