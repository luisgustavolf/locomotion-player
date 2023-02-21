export interface VideoJsOptions {
  sources: VideSource[], 
  controls: boolean
  autoplay: boolean
  responsive: boolean,
  fluid: boolean,
  aspectRatio: string
}

export interface VideSource {
  src: string,
  type: string
}