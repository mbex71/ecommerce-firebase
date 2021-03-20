import Navbar from '@/components/Navbar';
import Head from 'next/head'
import React from 'react'

interface HeaderInterface {
    title: string
}

interface AppLayoutInterface { 
    children: React.ReactNode,
    title: string
    
}

const Header = ({title}: HeaderInterface) => {
    return(
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

const AppLayout = ({children, title} : AppLayoutInterface) =>{
    return (
        <div className="container mx-auto px-4 min-h-screen">
            <Header title={title} />
            <Navbar/>
            <main>
                {children}
            </main>
        </div>
    )
}

export default AppLayout;