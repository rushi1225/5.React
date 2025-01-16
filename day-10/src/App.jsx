import { useState } from 'react'

import './App.css'

function App() {

  function themeToggle() {
    document.documentElement.classList.toggle("dark")
  }


  return (
    <>
      <section className='h-screen bg-white dark:bg-slate-800'>

        <button onClick={themeToggle()} className=''>theme dark light</button>
        <h1 className='text-4xl text-rushi'>Tcss</h1>

        <div className='flex'>
          <h1 className=' sm:text-cyan-500 md:text-red-600 lg:text-green-500 text-4xl'>hiiii</h1>

          {/* reusing style in index.css */}
          <br />
          <button class="btn-primary">
            Save changes
          </button>
        </div>
        <button class="rushi-btn">
          Save changes
        </button>
      </section>
    </>
  )
}

export default App
