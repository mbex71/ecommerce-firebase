import Head from 'next/head'
import Applayout from '@/components/Layouts/AppLayout';


export default function Home() {
  return (
    <div>
      <Applayout title="Ecommerce" > 
        <h1>Tai</h1>
      </Applayout>
    </div>
    // <div>
    //   <Head>
    //     <title>Create Next App</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className="flex justify-center items-center">
    //     <h1>Test</h1>
    //   </main>

    //   <footer>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <img src="/vercel.svg" alt="Vercel Logo" />
    //     </a>
    //   </footer>
    // </div>
  )
}
