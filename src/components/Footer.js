import React, { Component } from 'react'
import { Link } from 'gatsby'
import gatsby from '../../content/thumbnails/gatsby.png'
import github from '../../content/images/github.png'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <div>
          <a href="https://www.youtube.com/channel/UCJ-9uNiiuEDCmA90GlzN-2g" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
          <a href="https://twitter.com/@steveruben2015" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <Link to="/contact">Newsletter</Link>
          <a href="https://www.steve.abodah.fr/rss.xml" target="_blank" rel="noopener noreferrer">
            RSS
          </a>
        </div>
        <div>
          <a href="https://github.com/tryptich" title="Open-source on GitHub">
            <img
              src={github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="GitHub"
            />
          </a>
          <a href="https://www.gatsbyjs.org/" title="Built with Gatsby">
            <img
              src={gatsby}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="GitHub"
            />
          </a>
        </div>
      </footer>
    )
  }
}