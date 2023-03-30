import '@/styles/globals.css'
import NavBar from '@/components/NavBar'

export default function App({ Component, pageProps }) {
  return (
    <>
    <NavBar initialColor= {pageProps.initialColor} finalColor={pageProps.finalColor} textInitialColor = {
     pageProps.textInitialColor} textFinalColor ={pageProps.textFinalColor}/>
    <Component {...pageProps} />
    
    </>
    
  )
}
