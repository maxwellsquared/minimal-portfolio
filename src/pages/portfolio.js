import * as React from 'react';
import Layout from '../components/layout';

const Portfolio = () => {
    return (
        <Layout pageTitle="Portfolio">
            <h3>Reportex</h3>
            <p><i>Reportex was a full-service legal services firm focusing on court reporting. I was the Digital Content Director and the internal lead on our site redesign.</i></p>
            <p><i>We were bought in 2021 by a big American firm. The next year, I quit to go do programming full-time.</i></p>
        </Layout>
    )
}

export const Head = () => <title>Max Kuhn - Portfolio</title>

export default Portfolio