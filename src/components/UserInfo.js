import React, { Component } from 'react'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div>
              <h3>Author</h3>
              <p>
                Hey, I’m Steve Ruben, a full stack software engineer. I write about what I know to help
                viewers like you. My site has <strong>no ads, sponsors, or bullshit.</strong> If you
                enjoy my content, please consider supporting what I do!
              </p>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}