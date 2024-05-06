import Header from './Header'
import Footer from './Footer'
import { LayoutProps } from '../../types'
import ImgBackground from '../Resources/ImgBackground'

export default function ComponentLayout({children}: LayoutProps){
    
    return(
        <>
            <Header />
            {children}
            <ImgBackground />
            <Footer />
            
        </>
    )
}