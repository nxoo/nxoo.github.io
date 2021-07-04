import Layout from "../components/layout";


export default function Home() {
    return (
        <Layout>
            <section>
                <p>
                    Hi, I'm Brian Wang'ombe, a web developer with 3+ years experience.
                    I use Python and Javascript.
                </p>
                <ul>
                    <li>React, NextJS</li>
                    <li>Django, DjangoRestFramework, any SQL DB</li>
                </ul>
                <p>
                    Check out my <a href="https://github.com/nxoo/" target="_blank">Github</a> to see some of my
                    projects.
                    Currently I'm working on <a href="https://www.flipaccounts.com" target="_blank">flipaccounts.com</a>
                </p>
                <p>Contact me through - <a href="mailto:brianwangombe@gmail.com">
                    brianwangombe@gmail.com</a> <br/></p>
            </section>
        </Layout>
    )
}
