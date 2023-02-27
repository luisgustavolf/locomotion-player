import * as React from 'react'
import { VideoJsOptions } from './types';
import './styles.scss'

const videojs = (window as any).videojs

export interface VideoPlayerProps {
  options: VideoJsOptions
}

export function VideoPlayer(props: VideoPlayerProps) {
  const placeholderRef = React.useRef<HTMLDivElement>(null);
  const playerRef = React.useRef<any | null>(null);

  const mountPlayer = React.useCallback(() => {
    if (!playerRef.current) {
      if (placeholderRef.current) {
        const videoElement = document.createElement("video-js");
        videoElement.classList.add('vjs-custom-class');
        placeholderRef.current.appendChild(videoElement);
        playerRef.current = videojs(videoElement, props.options);
      }
    }
  }, [placeholderRef, props.options])

  const unmountPlayer = React.useCallback(() => {
    if (playerRef.current && !playerRef.current.isDisposed()) {
      playerRef.current.dispose();
      playerRef.current = null;
    }
  }, [])

  React.useEffect(() => {
    mountPlayer()
  }, [mountPlayer]);

  React.useEffect(() => {
    return () => unmountPlayer()
  }, [unmountPlayer]);

  // ---------------------------------------------
  // Render

  return (
    <div ref={placeholderRef} />
  )
}