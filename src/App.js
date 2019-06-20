import React, { Component, Suspense } from 'react';
import './App.css';
import ThemedHeader from './components/ThemedHeader';
import ThemeContext from './components/ThemeProvider';
import ErrorBoundary from './components/ErrorBoundary';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      theme: {
        title: 'Themed using Context API !!',
        color: 'red',
        backgroundColor: 'yellow'
      }
    };
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    const { theme } = this.state;
    return (
      <div className="App">
        <ErrorBoundary>
          <h2>Focus Input Element on Page load using create ref API</h2>
          <input type="text" ref={this.inputRef} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading....</div>}>
            <ThemeContext.Provider
              value={{
                title: theme.title,
                backgroundColor: theme.backgroundColor,
                color: theme.color,
              }}
              >
              <ThemedHeader />
            </ThemeContext.Provider>
          </Suspense>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
