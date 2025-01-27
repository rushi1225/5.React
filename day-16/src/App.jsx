
import { Component } from 'react'
import './App.css'
import TestCompo1 from './component/TestCompo1'
import TestCompo2 from './component/TestCompo2';

function App() {


  //env file fetch
  const key = import.meta.env.VITE_SECRET_KRY;
  fetch(key);
  //env file fetch end

  return (
    <>
      {/* error boundary to handle the error  */}
      <ErrorBoundary>
        <TestCompo1></TestCompo1>
      </ErrorBoundary>
      <ErrorBoundary>
        <TestCompo2></TestCompo2>
      </ErrorBoundary>
    </>
  )
}




class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
    }
  }
  componentDidCatch() {
    this.setState({ isError: true });
  }

  render() {
    if (this.state.isError) {
      return <h1>Something went wrong</h1>
    }
    return <>{this.props.children}</>
  }
}





export default App
