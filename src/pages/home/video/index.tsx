import * as React from 'react'
import { VideoPlayer } from '../../../components/videoPlayer'
import { VideoJsOptions } from '../../../components/videoPlayer/types'

const videoJsOptions: VideoJsOptions = {
  sources: [
    { src: 'http://51.222.85.85:81/hls/loco/index.m3u8', type: 'application/vnd.apple.mpegURL' },
    { src: 'http://locomotiontv.com/envivo/loco_ch/stream.m3u8', type: 'application/vnd.apple.mpegURL' },
    { src: 'http://locomotiontv.com/envivo/loco_ch_low/stream.m3u8', type: 'application/vnd.apple.mpegURL' }
  ],
  autoplay: false,
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