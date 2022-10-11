import * as React from "react";
import { Link } from 'gatsby';
import Layout from '../components/layout'



const IndexPage = () => {
  return (
    <Layout pageTitle="Max Kuhn">
      <p>Hi! I'm Max Kuhn, a developer and designer.</p>
    </Layout>
  )
}

export const Head = () => <title>Max Kuhn</title>

export default IndexPage