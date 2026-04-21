import profilbilde from '../assets/profilbilde.jpg'

export default function Marcus(){
    return(
        <article>
            <p>Marcus Skjønberg</p>
            <img src={profilbilde} alt="Profilbilde" width="300" height="250"/>
            <a href="mailto:marcusbs@hiof.no">marcusbs@hiof.no</a>
            <p>Informasjonssystemer</p>
        </article>
    )
}