import Head from 'next/head'

import Layouts from "./components/layouts";
import BioCard from "./components/biocard";


export default function Home() {
  return (
    <>
  <Head>
    <title>My page title</title>
  </Head>
    <Layouts>
        <BioCard/>
    </Layouts>
    </>

  )
}
