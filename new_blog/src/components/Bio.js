import React from 'react';

import profilePic from './profile-pic.jpg';
import { rhythm } from '../utils/typography';
import { colors } from '../utils/theme';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Aravind Balla`}
          style={{
            borderRadius: '50%',
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p style={{ color: colors.palered }}>
          By <strong>Aravind Balla</strong> who is a cool human, buiding things for himself, and
          sometimes for others.{' '}
          <a
            style={{ color: colors.palered }}
            href="https://twitter.com/aravindballa"
            target="_blank"
          >
            You should follow him on Twitter
          </a>
        </p>
      </div>
    );
  }
}

export default Bio;
