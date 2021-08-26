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
            {/* ------ SEO Facebook ------ */}
            <meta property="og:url" content="https://sumundo3d.com/" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="SuMundo3D | Imprimir tus ideas en 3D nunca fue tan divertido" />
            <meta property="og:description" content="No dejes que nada te detenga, ven y descubre como llevar tus diseños a un siguiente nivel." />
            <meta property="og:image" content="https://res.cloudinary.com/cristoper/image/upload/v1629953379/prueba/logoSEOJ_k9jjgi.jpg" />
            <meta property="og:image:width" content="903" />
            <meta property="og:image:height" content="473" />
            {/* ------ Fin SEO Facebook ------ */}
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
