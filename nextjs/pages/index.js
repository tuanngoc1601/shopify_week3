import Head from 'next/head'
import Login from './login'

export default function Home() {
    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Login />
        </>
    )
}