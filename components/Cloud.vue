<template>
<div id="cloud">
    <div class="cloud large cloud-1">
      <div></div><div></div><div></div><div></div>
    </div>
    <div class="cloud normal cloud-2">
      <div></div><div></div><div></div><div></div>
    </div>
    <div class="cloud small cloud-3">
      <div></div><div></div><div></div><div></div>
    </div>
    <div class="cloud tiny cloud-4">
      <div></div><div></div><div></div><div></div>
    </div>
    <div class="cloud large cloud-5">
      <div></div><div></div><div></div><div></div>
    </div>
    <div class="cloud normal cloud-6">
      <div></div><div></div><div></div><div></div>
    </div>
    <div class="cloud small cloud-7">
      <div></div><div></div><div></div><div></div>
    </div>
    <div class="cloud tiny cloud-8">
      <div></div><div></div><div></div><div></div>
    </div>
    <div class="cloud small cloud-9">
      <div></div><div></div><div></div><div></div>
    </div>
    <div class="cloud normal cloud-10">
      <div></div><div></div><div></div><div></div>
    </div>
    <div class="cloud tiny cloud-11">
      <div></div><div></div><div></div><div></div>
    </div>
    <div class="cloud small cloud-12">
      <div></div><div></div><div></div><div></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "~compass-mixins/lib/compass/css3";

#cloud {
  margin-top: -33px;
}

@mixin animation($animation) {
  -webkit-animation: $animation;
  -moz-animation: $animation;
  -ms-animation: $animation;
  -o-animation: $animation;
  animation: $animation;
}

@mixin animation-duration($duration) {
  -webkit-animation-duration: $duration;
  -moz-animation-duration: $duration;
  -ms-animation-duration: $duration;
  -o-animation-duration: $duration;
  animation-duration: $duration;
}

@mixin keyframes($name) {
  @-webkit-keyframes #{$name} {
    @content;
  }
  @-moz-keyframes #{$name} {
    @content;
  }
  @-ms-keyframes #{$name} {
    @content;
  }
  @keyframes #{$name} {
    @content;
  }
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  background: #6dd3e7;
  padding: 100px;
  overflow-x: hidden;
}

.cloud {
  @include animation(clouds 60s infinite linear);
  @include border-radius(10px);
  position: relative;
  margin: 33px 0 0 0;
  width: 54px;
  height: 5px;
  background: #f7e7eb;
  &.tiny {
    @include scale(.5);
  }
  &.small {
    @include scale(1);
  }
  &.normal {
    @include scale(2);
  }
  &.large {
    @include scale(4);
  }
  div {
    @include box-shadow(inset -2px -3px 0 0 #f7e7eb);
    position: absolute;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    left: -3px;
    bottom: 0;
    background: #fafbf0;
    z-index: 10;
    &:first-child {
      & + div {
        @include scale(1.6, 1.6);
        margin: 0 0 4px 13px;
        z-index: 9;
        & + div {
          @include scale(2.4, 2.4);
          margin: 0 0 9px 32px;
          z-index: 8;
          & + div {
            @include scale(1.3, 1.3);
            margin: 0 0 2px 50px;
            z-index: 7;
          }
        }
      }
    }
  }
}

@include keyframes(clouds) {
  0% {
    left: -100%;
  }
  100% {
    left: 120%;
  }
}

.cloud-1 {
  @include animation-duration(263s);
  margin-left: 20%;
}

.cloud-2 {
  @include animation-duration(99s);
  margin-left: 90%;
}

.cloud-3 {
  @include animation-duration(142s);
  margin-left: 50%;
}

.cloud-4 {
  @include animation-duration(152s);
  margin-left: 43%;
}

.cloud-5 {
  @include animation-duration(215s);
  margin-left: 83%;
}

.cloud-6 {
  @include animation-duration(139s);
  margin-left: 73%;
}

.cloud-7 {
  @include animation-duration(109s);
  margin-left: 69%;
}

.cloud-8 {
  @include animation-duration(121s);
  margin-left: 100%;
}

.cloud-9 {
  @include animation-duration(101s);
  margin-left: 10%;
}

.cloud-10 {
  @include animation-duration(126s);
  margin-left: 14%;
}

.cloud-11 {
  @include animation-duration(96s);
  margin-left: 73%;
}

.cloud-12 {
  @include animation-duration(83s);
  margin-left: 51%;
}
</style>
