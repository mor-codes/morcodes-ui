import Navbar from './components/Navbar'
import CodeSnapshot from './components/CodeSnapshot'

function App() {
  return (
    <>
      <div className='w-100'>
        <Navbar></Navbar>
      </div>

      <div className='container mx-auto p-4'>
        <CodeSnapshot snapshot={4} impliedValue={0}></CodeSnapshot>
        <CodeSnapshot snapshot={3} impliedValue={0.407}></CodeSnapshot>
        <CodeSnapshot snapshot={2} impliedValue={0.2}></CodeSnapshot>
        <CodeSnapshot snapshot={1} impliedValue={0.025}></CodeSnapshot>
      </div>
    </>
  )
}

export default App
