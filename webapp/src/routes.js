import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { css } from '@emotion/core'
import { Home } from './home'
import { Reports } from './reports'

function AppRouter () {
  return (
    <Router>
      <div css={layoutStyle}>
        <nav css={navStyle}>
          <ul >
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/reports'>Reports</Link>
            </li>
          </ul>
        </nav>
        <div className='main-content' css={contentStyle}>
          <Route component={Home} exact path='/' />
          <Route component={Reports} exact path='/reports' />
        </div>
      </div>
    </Router>
  )
}

export default AppRouter

const layoutStyle = css`
    display: grid;
    grid-row-gap: 24px;
    padding: 8px;
`

const navStyle = css`
  grid-row: 1;
  padding-top: 16px;

  & > ul {
      display: flex;
      flex-direction: row;
      list-style-type: none;
  }

  & > ul > li > a {
    font-family: 'Calibri';
    font-size: 18px;
    font-weight: bold;
    color: #3c3c3c;
    text-decoration: none;
  }

  & > ul > li > a: hover {
    text-decoration: underline;
  }

  & > ul > li:first-of-type {
    margin-left: 60px;
  }

  & > ul > li:not(:first-of-type) {
    margin-left: 40px;
  }
`

const contentStyle = css`
  grid-row: 2;
`
