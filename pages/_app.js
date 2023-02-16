import 'styles/globals.css'
import Layout from 'components/layout'

function MyApp ({ Component, pageProps }) {
  return (
    <Layout>
      <component {...pageProps} />
    </Layout>
  )
}

export default MyApp
