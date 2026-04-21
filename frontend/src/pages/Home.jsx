import Marcus from '../components/Marcus.jsx'

export default function Home(){
    
    const [arbeidskrav, setArbeidskrav] = useState(null)
    
    
    return(<>

        <header>
            <h1>UIN26_50*</h1>
        </header>
        
        <main>
            <Marcus/>
        </main>

        </>)
}