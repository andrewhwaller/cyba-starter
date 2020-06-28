import React from "react"
import "./styles.scss"

const IndexPage = () => {
  return (
    <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      <div data-netlify-identity-menu></div>
      <div data-netlify-identity-button>Login with Netlify Identity</div>
    <div className="container">
      <div className="columns">
        <div className="column">
          <h2 className="title is-2">Level 2 heading</h2>
          <p className="content">Cool content. Using Bulma!</p>
        </div>

        <div className="column is-four-fifths">
          <h2 className="title is-2">Level 2 heading</h2>
          <p className="content">This column is cool too!</p>
        </div>
      </div>
    </div>
  )
}

export default IndexPage