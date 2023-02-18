import Head from 'next/head'

export default function Meta({ pagetitle }) {
  return (
    <Head>
      <title>{pageTitle} </title>
      <meta property='og:title' content={pagetitle} />
    </Head>
      )
}
