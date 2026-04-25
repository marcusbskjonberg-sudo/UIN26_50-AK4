import { useEffect, useState } from 'react'
import Marcus from '../components/Marcus.jsx'
import { client } from '../helpers/sanityClient.js'

export default function Home(){
    
    //Holder på arbeidskravene når de hentes fra sanity, har en default verdi av null før de hentes
    const [arbeidskrav, setArbeidskrav] = useState(null)


    //Henter arbeidskravene fra sanity når siden lastes med en tom dependency
    useEffect(() => {
        async function getArbeidskrav() {
            const tempArbeidskrav = await client.fetch("*[_type == 'arbeidskrav'] | order(_createdAt asc) {navn, beskrivelse, _id}")
            setArbeidskrav(tempArbeidskrav)
        }
        getArbeidskrav()
    }, [])

    

    return(<>

        <header>
            <h1>UIN26_50*</h1>
        </header>
        
        <main>
            {/* Gruppemedlemmenes profil-komponenter legges her (jeg er eneste medlem i gruppen) */}
            <section id='profile-section'>
                <Marcus/>
            </section>
            {/* Arbeidskravene mappes ut i denne sectionen HVIS de eksisterer i useStaten "arbeidskrav" */}
            <section id='arbeidskrav-section'>
                <h2>Arbeidskrav</h2>
                {arbeidskrav?.map((ak) =>
                    //Bruker id'en sanity har gitt hvert enkelt arbeidskrav som key i .map
                    //kunne laget et eget komponent å bruke for .map men valgte å gjøre det på den enkle måten med å lage strukturen for .map her
                    <article key={ak._id} className='arbeidskrav-article'>
                        <h3>{ak.navn}</h3>
                        <p>{ak.beskrivelse}</p>
                    </article>)}
            </section>
        </main>

        <footer><p>UIN26_50*</p></footer>

        </>)
}