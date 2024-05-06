import LeftSection from './LeftSection'
import RightSection from './RightSection'

export default function Footer(){
    return(
        <footer 
            className="row gap-5 gap-sm-3 w-75 m-auto"
            id="footer"
        >
            <LeftSection />
            <RightSection />
        </footer>
    )
}