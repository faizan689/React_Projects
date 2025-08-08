import './App.css'
import Cards from './components/cards.jsx'

function App() {
  // Removed unused state variable 'count' and setter 'setCount'
// let myObj={
//   username:"Faizan",
//   age:30,
//  }
// let myArray=[1,2,3,4,5]
  return (
    <>
    <h1 className='bg-green-600 text-black p-4
    rounded-xl mb-4'>Tailwind</h1>
    
    <Cards username="Faizan" btnText="click me"/>
    <Cards username="shaikh" btnText="visit me"/>
  </>
  )
}
  
export default App


