import Image from 'next/image';
'use client';
import { useState, useEffect, useRef, useCallback, use } from 'react';


export default function Home() {
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState(false);

  const minCount = useRef(0);
  const handleIncrement = useCallback(() => {
    setCounter((prev) => prev + 1);
    setError(false);
  }, []);

  const handleDecrement = useCallback(() => {
   setCounter((prevCounter) => {
      const nextCounter = prevCounter - 1;
      if (nextCounter < minCount.current) {
        setError(true);
        return prevCounter;
      }
      return nextCounter;
    });
  }, []);
  useEffect(() => {
  console.log('useRef', minCount.current);
  if(counter < minCount.current) {
    setError(true);
    setCounter(minCount.current);
  }
  if(error){
    alert('nilai sudah nol sobat!');
  }
  }, [counter, error, minCount]);
  return (
    <main className="flex justify-center items-center min-h-screen p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
      <div className="flex flex-col items-center justify-center w-full max-w-5xl px-4 py-8 mx-auto space-y-4 text-center lg:space-y-0 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <button
          className="flex items-center justify-center px-4 py-2 space-x-2 text-sm font-medium text-white transition duration-300 ease-in-out transform bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={() => handleDecrement()}
        >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
</svg>

          <span>Decrement</span>
        </button>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {counter}
          </span>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full max-w-5xl px-4 py-8 mx-auto space-y-4 text-center lg:space-y-0 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <button
          className="flex items-center justify-center px-4 py-2 space-x-2 text-sm font-medium text-white transition duration-300 ease-in-out transform bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={() => handleIncrement()}
        >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

          <span>Increment</span>
        </button>
      </div>
    </div>
    </main>
  )
}
