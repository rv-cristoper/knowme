import Head from 'next/head'
import Layout from '../components/layout/Layout'

import styles from '../styles/asdf.module.scss'

const App = (): JSX.Element => {

   return (
      <>
         <Head>
            <title>rv_cristoper</title>
         </Head>
         <Layout>
            <div className={styles.main}>
               Nombre
               <div className={styles.apellido}>
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
