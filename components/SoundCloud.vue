<template>
  <div id="sound-cloud">
    <!-- <iframe
      width="100%"
      height="450"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/11001757&color=%23fcf5f5&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    /> -->
    <iframe
      src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F11001757&show_artwork=true"
      style="border: 0; width: 100%; height: 450px;"
      allowfullscreen
      allow="encrypted-media"
    />
  </div>
</template>

<script>
export default {
  name: 'SoundCloud'
}
</script>

<style lang="scss" scoped>
#sound-cloud {
  width: 100%;
  min-width: 450px;
}
</style>
