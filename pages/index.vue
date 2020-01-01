<template>
  <div class="bg-blue-300">
    <cloud />
    <div class="container mx-auto px-4">
      <h1 class="text-6xl text-center font-black antialiased text-gray-100">
        Floating The World
        <!-- <svg viewbox="0 0 100 20">
          <defs>
            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%" stop-color="#ffffff" />
              <stop offset="95%" stop-color="#f1eaea" />
            </linearGradient>
            <pattern
              id="wave"
              x="0"
              y="0"
              width="120"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" mask="url(#mask)" fill="url(#gradient)">
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  dur="1.5s"
                  type="translate"
                  from="0,0"
                  to="40,0"
                  repeatCount="indefinite"
                />
              </path>
            </pattern>
          </defs>
          <text
            text-anchor="middle"
            x="50"
            y="15"
            font-size="12px"
            fill="url(#wave)"
            fill-opacity="1"
          >
            Floating The World
          </text>
          <text
            text-anchor="middle"
            x="50"
            y="15"
            font-size="12px"
            fill="url(#gradient)"
            fill-opacity="0.5"
          >
            Floating The World
          </text>
        </svg> -->
      </h1>
      <h2 class="font-sans text-4xl text-center font-medium antialiased text-gray-100">
        Trackmaker based in Vancouver
      </h2>
      <div class="flex flex-wrap">
        <div class="w-full lg:w-1/2 my-3">
          <spotify />
        </div>
        <div class="w-full lg:w-1/2 my-3">
          <sound-cloud />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cloud from '~/components/Cloud'
import Spotify from '~/components/Spotify'
import SoundCloud from '~/components/SoundCloud'

export default {
  components: {
    Cloud,
    Spotify,
    SoundCloud
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
