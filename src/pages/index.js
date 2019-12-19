import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Home extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout
        location={this.props.location}
        title="Faheem | Full Stack JavaScript Developer"
      >
        <SEO title="Faheem | Full Stack JavaScript Developer" />

        <div>
          <h1>Hi! I'm Faheem</h1>
          <p>I'm a Full Stack JavaScript Developer</p>
          <p>This is supposed to be my personal website and blog.</p>
          <p>
            But I'm still working on it. You can watch the progress live on
            <a
              href="https://www.twitch.tv/itsdrstrange"
              rel="noreferrer noopener"
              target="_blank"
            >
              my Twitch channel
            </a>
            . Or follow me on
            <a
              href="https://twitter.com/mfaheemakhtar"
              rel="noreferrer noopener"
              target="_blank"
            >
              Twitter
            </a>
            to get updates.
          </p>
        </div>
      </Layout>
    )
  }
}

export default Home
