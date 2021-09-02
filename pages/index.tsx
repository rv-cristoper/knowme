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
            {/* ------ SEO X ------ */}
            {/* <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0" />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="description" content="No dejes que nada te detenga, ven y descubre como llevar tus diseños a un siguiente nivel." />
            <meta name="theme-color" content="#89e21e" />
            <meta property="og:site_name" content="SuMundo3D" />
            <meta itemProp="name" content="SuMundo3D | Imprimir tus ideas en 3D nunca fue tan divertido" />
            <meta itemProp="url" content="https://sumundo3d.com/" />
            <meta itemProp="description" content="No dejes que nada te detenga, ven y descubre como llevar tus diseños a un siguiente nivel." />
            <meta itemProp="image" content="https://res.cloudinary.com/cristoper/image/upload/v1629953379/prueba/logoSEOJ_k9jjgi.jpg" />
            <meta name="application-name" content="SuMundo3D" /> */}
            {/* ------ Fin SEO X ------ */}

            {/* <meta data-n-head="ssr" name="p:domain_verify" content="ccbbd4d961fb9c7cbd54e887ba6c9a0d" /> */}
            <meta data-n-head="ssr" name="theme-color" content="#89e21e" />
            <meta data-n-head="ssr" name="robots" content="index" />
            <meta data-n-head="ssr" charSet="X-UA-Compatible" content="ie=edge" />
            <meta data-n-head="ssr" name="viewport" content="width=device-width, initial-scale=1" />

            <meta data-n-head="ssr" data-hid="twitterCard" property="twitter:card" content="summary_large_image" />
            <meta data-n-head="ssr" data-hid="twitterSite" property="twitter:site" content="@cristoperRv" />
            <meta data-n-head="ssr" data-hid="twitterCreator" property="twitter:creator" content="@cristoperRv" />

            <meta data-n-head="ssr" data-hid="ogTitle" property="og:title" content="SuMundo3D | Imprimir tus ideas en 3D nunca fue tan divertido" />
            <meta data-n-head="ssr" data-hid="ogDescription" property="og:description" content="No dejes que nada te detenga, ven y descubre como llevar tus diseños a un siguiente nivel." />
            <meta data-n-head="ssr" data-hid="ogImage" property="og:image" content="https://manzanaverde.la/images/brand/OpenGraph.jpg" />
            <meta data-n-head="ssr" data-hid="ogImageWidth" property="og:image:width" content="1200" />
            <meta data-n-head="ssr" data-hid="ogImageHeight" property="og:image:height" content="625" />
            {/* <meta data-n-head="ssr" data-hid="ogImage" property="og:image" content="https://res.cloudinary.com/cristoper/image/upload/v1629953379/prueba/logoSEOJ_k9jjgi.jpg" />
            <meta data-n-head="ssr" data-hid="ogImageWidth" property="og:image:width" content="903" />
            <meta data-n-head="ssr" data-hid="ogImageHeight" property="og:image:height" content="473" /> */}

            <meta data-n-head="ssr" data-hid="ogSite_name" property="og:site_name" content="SuMundo3D" />
            <meta data-n-head="ssr" data-hid="ogType" property="og:type" content="article" />
            {/* <meta data-n-head="ssr" name="google-site-verification" content="BhDVqEyZhsrXu38P3e0A8V2D1EvQH94R0AMCWnwizE8" /> */}
            <meta data-n-head="ssr" name="fb:app_id" content="1485300235185043" />
            <meta data-n-head="ssr" data-hid="ogUrl" property="og:url" content="https://cristoper.netlify.app/" />
            <meta data-n-head="ssr" data-hid="description" name="description" content="No dejes que nada te detenga, ven y descubre como llevar tus diseños a un siguiente nivel." />

            {/* ------ SEO Facebook ------ */}
            {/* <meta property="og:url" content="https://sumundo3d.com/" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="SuMundo3D | Imprimir tus ideas en 3D nunca fue tan divertido" />
            <meta property="og:description" content="No dejes que nada te detenga, ven y descubre como llevar tus diseños a un siguiente nivel." />
            <meta property="og:image" content="https://res.cloudinary.com/cristoper/image/upload/v1629953379/prueba/logoSEOJ_k9jjgi.jpg" />
            <meta property="og:image:width" content="903" />
            <meta property="og:image:height" content="473" /> */}
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
