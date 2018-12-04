import React, { Component } from 'react';
import styled, {ThemeProvider} from 'styled-components'
import Link from './Link'
import ParagraphText from './ParagraphText'

const darkTheme = {
  backgroundColor: '#282c34',
  textColor: 'white',
  linkColor: '#61dafb'
};

const whiteTheme = {
  backgroundColor: 'white',
  textColor: '#282c34',
  linkColor: '#61dafb'
}

const AppHeader = styled.header`
  background-color: ${(props) => props.theme.backgroundColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={this.props.theme === "dark" ? darkTheme : whiteTheme}>
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
      </ThemeProvider>
    );
  }
}

export default App;
