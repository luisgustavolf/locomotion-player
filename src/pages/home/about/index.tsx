import * as React from 'react'
import logoPath from '../../../assets/img/logo_white.png'
import './styles.scss'

export function About() {
  return (
    <div className={'about-wrap'}>
      <a href='https://www.facebook.com/locomotionxtv' target={'_blank'} rel={'noreferrer'}>
        <img src={logoPath} alt={'logo'} height={'30'} />
      </a>
    </div>
  )
}