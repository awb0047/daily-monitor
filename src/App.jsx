import React from 'react'
import styled from 'styled-components'
import { SideBar, Tasks, Notes } from './components'

export const AppContainer = styled.div`
    height: 100vh;
    min-block-size: 100dvh;

    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;

    grid-template-areas: 
      "sidebar header"
      "sidebar body"
      "sidebar footer";
    overflow-y: hidden;
`

export const Header = styled.div`
  text-align: center;
  border-bottom: #cacaca 2px solid;

  grid-area: header;
`

export const Footer = styled.div`
  text-align: center;
  border-top: #cacaca 2px solid;

  grid-area: footer;
`

export const Body = styled.div`
  display: flex;
  flex-direction: row;

  grid-area: body;
`

function App() {

  return (
    <AppContainer>
      <Header>
        <h1>Header</h1>
      </Header>
      <SideBar/>
      <Body>
        <Tasks parent={this}/>
        <Notes/>
      </Body>
      <Footer>
        <h1>Footer</h1>
      </Footer>
    </AppContainer>
  )
}

export default App
