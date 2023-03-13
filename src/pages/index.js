
import React, {useEffect, useState} from 'react';
import axios from "axios";
import Image from "next/image";

const API_URL = 'http://localhost:3000'

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

    const [characters, setCharacters ] = useState([])

    useEffect(()=>{
        async function getCharacters() {
            try {
                const data = await axios.get(`${API_URL}/api/characters`)
                setCharacters(data.data.fakeChars)
                console.log(characters)
            } catch (error) {
                console.error(error)
            }
        }
        getCharacters()
    }, [])



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
            <main>
                <section className='my-4 p-4 grid grid-cols-3 gap-4 lg:grid-cols-4'>
                    { characters && characters.length > 0 &&
                        characters.map((elem) => (
                       <div className='p-4 hover:scale-105 hover:border-black hover:shadow-black transition transform my-4 border border-blue-300 rounded'
                           key={elem.id}
                       >
                           <div className='aspect-square relative mb-4'>
                               <Image className='rounded-full'
                                      src={elem.image+'?'+elem.id}
                                      alt = {elem.name}
                                      layout="fill"
                                      objectFit="cover"
                               ></Image>
                           </div>
                           <h2 className='text-xl font-semibold truncate'>{elem.name} the {elem.personality} {elem.animal}</h2>
                           <p><em>Occupation: </em>{elem.occupation}</p>
                           <p className='truncate'><em>Known Spells: </em>{elem.spells}</p>

                       </div>
                    ))
                    }

<hr />

                {/*{JSON.stringify(characters)}*/}
                    </section>
            </main>
            <footer>This is the footer</footer>

        </div>
    );
}

export default Home;