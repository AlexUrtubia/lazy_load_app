import React from 'react'
import ListaTareas from './ListaPersonajes'

export default function Home(props) {
  return (
    <div className="w-3/5 self-center mt-36 p-6 pb-9 bg-bckg rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <ListaTareas/>
    </div>
  )
}
