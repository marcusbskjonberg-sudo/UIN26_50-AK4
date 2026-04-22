import { useEffect, useState } from 'react'
import Marcus from '../components/Marcus.jsx'
import { client } from '../helpers/sanityClient.js'

export default function Home(){
    
    const [arbeidskrav, setArbeidskrav] = useState(null)

    useEffect(() => {
        async function getArbeidskrav() {
            const tempArbeidskrav = await client.fetch("*[_type == 'arbeidskrav'] | order(_createdAt asc) {navn, beskrivelse, _id}")
            setArbeidskrav(tempArbeidskrav)
        }
        getArbeidskrav()
    }, [])
    
    console.log(arbeidskrav)

    return(<>

        <header>
            <h1>UIN26_50*</h1>
        </header>
        
        <main>
            <section id='profile-section'>
                <Marcus/>
            </section>
            <section id='arbeidskrav-section'>
                <h2>Arbeidskrav</h2>
                {arbeidskrav?.map((ak) => 
                    <article key={ak._id} className='arbeidskrav-article'>
                        <h3>{ak.navn}</h3>
                        <p>{ak.beskrivelse}</p>
                    </article>)}
            </section>
        </main>

        <footer><p>UIN26_50*</p></footer>

        </>)
}