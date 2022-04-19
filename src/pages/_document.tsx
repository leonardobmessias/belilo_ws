import Document, { Head, Html, Main, NextScript } from "next/document"
import { Header } from "../Components/Header"


export default  class Mydocument extends Document{
  
  render(){
    return(
      <Html >
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet"/>
        </Head>
        <body>
        
          <Main/>
          
        </body>
        <NextScript/>
      </Html>
    )
  }
}