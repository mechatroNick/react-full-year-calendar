import React, { Component } from 'react';
import styled from 'styled-components'
import Link from './Link'
import ParagraphText from './ParagraphText'

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader>
          <ParagraphText>
            Edit <code>src/App.js</code> and save to reload.
          </ParagraphText>
          <Link
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Link>
        </AppHeader>
      </div>
    );
  }
}

export default App;
