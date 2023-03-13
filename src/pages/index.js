
import React from 'react';

const navigation = [
    { name: 'Sign Up', href: '#', current: true },
    { name: 'Log Out', href: '#', current: false },
    { name: 'Log In', href: '#', current: true },
    { name: 'Admin', href: '#', current: true },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Home = () => {
    return (
        <div className="w-full h-full flex flex-col">
             <header className="w-full h-32 my-4 flex items-center  bg-neutral-800 justify-end space-x-4 px-4" >
                <h1 className="mr-auto text-4xl font-bold text-blue-300">RPG Quest</h1>
                     {navigation.map((item) => (
                         <button
                             key={item.name}
                             href={item.href}
                             className={classNames(
                                 item.current ? 'bg-blue-900 text-white hover:bg-blue-600 hover:text-amber-50' : 'bg-gray-500 text-white',
                                 'px-4 py-2 text-lg  rounded-md'
                             )}
                             aria-current={item.current ? 'page' : undefined}
                         >
                             {item.name}
                         </button>

                     ))}
             </header>
            <main>This is the main content</main>
            <footer>This is the footer</footer>

        </div>
    );
}

export default Home;