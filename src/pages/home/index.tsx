import * as React from 'react'
import { Video } from './video'
import { About } from './about'
import "./styles.scss"

export function HomePage() {

  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // Render

  return (
    <div className={'home-page'}>
      <About />
      <Video />
    </div>
  )
}