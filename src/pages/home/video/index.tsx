import * as React from 'react'
import { VideoPlayer } from '../../../components/videoPlayer'
import { VideoJsOptions } from '../../../components/videoPlayer/types'
import { sources } from '../../../services/locomotion/health/sources'

const videoJsOptions: VideoJsOptions = {
  sources,
  autoplay: true,
  controls: true,
  fluid: true,
  responsive: false,
  aspectRatio: `${window.innerWidth}:${window.innerHeight}` 
}

export function Video() {
  return (
    <VideoPlayer
      options={videoJsOptions}
    />
  )
}