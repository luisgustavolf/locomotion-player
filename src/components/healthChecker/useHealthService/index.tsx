import * as React from 'react'
import { HealthService } from '../../../services/locomotion/health'

export function useHealthService() {
  const [loading, setLoading] = React.useState(false)
  const [isOnline, setIsOnline] = React.useState<boolean>( )

  React.useEffect(() => {
    (async () => {
      setLoading(true)
      setIsOnline(await HealthService.checkAll())
      setLoading(false)
    })()
  }, [])

  return {
    loading,
    isOnline
  }
}