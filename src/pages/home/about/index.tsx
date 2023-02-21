import * as React from 'react'
import logoPath from '../../../assets/img/logo_white.png'
import './styles.scss'

export function About() {

  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // Render

  return (
    <div className={'about-wrap'}>
      <img src={logoPath} alt={'logo'} height={'30'} />
    </div>
  )
}