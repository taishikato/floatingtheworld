<template>
  <div class="bg-blue-300">
    <cloud />
    <div class="container mx-auto px-4">
      <h1 class="text-6xl text-center font-black antialiased text-gray-100">
        Floating The World
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
