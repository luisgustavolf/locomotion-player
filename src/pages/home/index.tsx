import * as React from 'react'
import { Video } from './video'
import { About } from './about'
import { HealthChecker } from '../../components/healthChecker'

import "./styles.scss"

export function HomePage() {
  return (
    <div className={'home-page'}>
      <About />
      <HealthChecker>
        <Video />
      </HealthChecker>
    </div>
  )
}