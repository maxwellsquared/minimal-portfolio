import * as React from "react";
import { Link } from 'gatsby';
import Layout from '../components/layout'



const IndexPage = () => {
  return (
    <Layout pageTitle="Max Kuhn">
      <img className="headshot" src="https://avatars.githubusercontent.com/u/2798962?v=4" alt="Smiling person with glasses, short hair, and a beard wearing a suit and a button-up shirt."/>
      <p>Hi! I'm Max Kuhn, a developer and designer.</p>
      <p>I make apps and websites <span aria-hidden="true">💻</span> for people <span aria-hidden="true">👩‍👩‍👦‍👦</span> and particularly intelligent dogs <span aria-hidden="true">🧠🐶</span>.</p>
      <p>Welcome and bark, bark, woof woof.</p>
    </Layout>
  )
}

export const Head = () => <title>Max Kuhn</title>

export default IndexPage