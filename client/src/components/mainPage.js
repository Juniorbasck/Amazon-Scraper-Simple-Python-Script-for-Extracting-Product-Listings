import React from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function Example() {
  return ( 
  

    <form class=''>
        <div className="flex flex-col items-center justify-center space-y-12">
            <div className="border-b border-gray-900/10 pb-7 mt-5 ">
                <p className="mt-1 text-5xl font-semibold leading-6 text-gray-600">
                    O que você deja buscar?
                </p>
            </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-10">
            <div className="sm:col-span-4">
                <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Ex: laptop"
                        />
                    </div>
                </div>
            </div>
        </div>
    </form>
  )
}