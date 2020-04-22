import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyCustomDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()


    const metaData = {
      description_short: "Wait!!! Don't cut the fabric yet! How happy are you with those colours? Use PreQuilt to experiment with all sorts of colours combinations before you commit.", 
      social_title: 'Quilt like a boss',
      social_image: 'index.jpg',
      id: "id___"
    }


    return { ...page, styleTags, metaData:metaData } // return styles collected
  }

  render () {



    return (
      <html lang="en">
        <Head>
        
        </Head>
        {this.props.styleTags}
        <body>
          <Main />
          <NextScript />
        </body>
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script> */}
      </html>
    )
  }
}