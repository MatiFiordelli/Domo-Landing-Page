import OurServices from "./OurServices";
import Partners from "./Partners";
import Presentation from "./Presentation";
import Technology from "./Technology";

export default function HomePage(){
    let root = null as null | HTMLElement
    
    const checkInnerWidth = () => {
        if(!root) root = document.querySelector('html') as HTMLElement

        if(root) {
            if(window.innerWidth >= 1400){
                root.style.fontSize = '2vw'
            } else {
                root.style.fontSize = '16px'
            }
        }
    }

	window.onresize = () => checkInnerWidth()
    window.onload = () => checkInnerWidth()

	/* window.onresize = ()=> {
		screen = window.innerWidth
		if(screen>=1400){
			console.log(screen)
		}
		
	} */

    return(
        <main>
            <a id="presentation" />
            <Presentation />
            <a id="ourServices" />
            <OurServices />
            <a id="technology" />
            <Technology />
            <a id="partners" />
            <Partners />
            <a id="about" />
        </main>
    )
}