import Head from 'next/head'
import Nav from './components/Nav'
import Projects from './components/Projects'


export default function Adventure(){
    return (
            <div className="">
                <Head>
                    <title>Adventure</title>
                    <meta name="Developer portfolio projects" content="Anas El Baghdadi projects" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className="flex">
                    <Nav />
                    <Projects />
                </div>
            </div>
    )
}