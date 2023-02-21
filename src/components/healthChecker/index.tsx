import * as React from 'react'
import { useHealthService } from './useHealthService'

export interface HealthCheckerProps {
  children?: any
}

export function HealthChecker(props: HealthCheckerProps) {
  const service = useHealthService()

  return (
    <div className={'health-checker'}>
      {service.loading &&
        <React.Fragment>
          Checking...
        </React.Fragment>
      }

      {service.isOnline &&
        props.children
      }

      {service.isOnline === false &&
        <React.Fragment>
          Sorry, service seems offline, please inform us {' '}
          <a href='https://www.facebook.com/locomotionxtv' target={'_blank'} rel={'noreferrer'}>
            here.
          </a>
        </React.Fragment>
      }
    </div>
  )
}