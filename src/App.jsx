import AddTodo from './components/addTodo'

function App() {

  return (
    <>
      <div className=' bg-slate-500 h-screen p-6'>
        <h1 className=' justify-center text-center text-3xl mb-8'>TODO LIST</h1>
        <AddTodo />
      </div>
    </>
  )
}

export default App