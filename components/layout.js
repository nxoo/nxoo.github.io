import Head from 'next/head'
import styles from './layout.module.css'


export default function Layout({children}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <title>nxoo</title>
            </Head>
            <header className={styles.header}>
                <img src="/images/profile.jpg" alt="" className={styles.profile}/>
            </header>
            <br/>
            <main>{children}</main>
        </div>
    )
}