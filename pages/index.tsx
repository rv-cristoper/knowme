import Head from 'next/head'
import Layout from '../components/layout/Layout'

const App = (): JSX.Element => {

   return (
      <>
         <Head>
            <title>Cristoper Jhanfranco</title>
            <link
               rel="preload"
               href="/fonts/KGHardCandy/KGHardCandyStriped.ttf"
               as="font"
               crossOrigin=""
            />
         </Head>
         <Layout>
            <div>
               Nombre
               <div>
                  Apellido
                  <div>
                     Edad
                     <div>
                        Cumpleaños
                     </div>
                     <div>
                        Nacimiento
                     </div>
                  </div>
               </div>
            </div>
         </Layout>

      </>
   )
}

export default App
