<template>
  <div class="about-page">
    <!-- <div class="about-page__wrapper">
      <div class="about-page__container">
        <div class="about-page__anchor">=</div>

        <ul>
          <li>Home</li>
          <li>Item1</li>
          <li>Item2</li>
          <li>Item3</li>
          <li>Settings</li>
        </ul>
      </div>
    </div> -->

    <div class="groove__wrapper">
      <div class="groove"></div>
    </div>

    <div class="g-container">
      <div class="g-content">
        <div class="g-filter"></div>
      </div>
    </div>
  </div>
  <div class="contrast__wrapper">
    <div class="circle-1"></div>

    <div class="circle-2"></div>
  </div>

  <div class="filter-test__wrapper">
    <div class="filter"></div>

    <div class="backdrop-filter"></div>
  </div>

  <div class="native-progress">
    <meter min="0" max="500" value="340"></meter>
    <progress max="100" value="70"></progress>
  </div>

  <div class="conic-progress">
    <div class="conic-progress__item"></div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="less">
  @property --size {
    syntax: '<length>';
    inherits: false;
    initial-value: 24px;
  }
  .about-page__wrapper {
    width: 300px;
    height: 300px;
    background: blue;
    padding: 15px;
  }
  .about-page__container {
    /* background: white; */
    overflow: hidden;
    clip-path: circle(20px at 20px 20px);
    transition: clip-path 0.3s linear;
    background: white;
    /* background: radial-gradient(
      circle at 44px 44px,
      #fff 0,
      #fff var(--size),
      transparent var(--size),
      transparent 0
    );
    transition: --size 0.3s linear; */
  }
  .about-page__container:hover {
    clip-path: circle(460px at 20px 20px);
  }
  .about-page__anchor {
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;

    cursor: pointer;
    text-align: center;
    /* box-shadow: 0 0 0 0 #fff; */

    /* transition: box-shadow 0.3s linear; */
  }
  /* .about-page__anchor:hover {
    box-shadow: 0 0 0 420px #fff;
  } */
  .groove__wrapper {
    margin-top: 30px;
  }
  .groove {
    width: 300px;
    height: 200px;
    background: linear-gradient(
        90deg,
        #e9d418,
        #e9d418 110px,
        transparent 110px,
        transparent 190px,
        #e9d418 190px
      ),
      linear-gradient(90deg, #e9d418, #e9d418);
    background-size: 100% 20px, 100% 100%;
    background-position: 0 0, 0 20px;
    background-repeat: no-repeat;
  }
  .g-container {
    margin-top: 30px;
    position: relative;
    width: 300px;
    height: 100px;
    // &::before {
    //   content: '';
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   bottom: 0;
    //   right: 0;
    //   z-index: 1;
    //   background: radial-gradient(
    //     circle at 50% -10px,
    //     transparent 0,
    //     transparent 60px,
    //     #000 60px,
    //     #000 0
    //   );
    // }
    .g-content {
      height: 100px;

      // 通过对比度滤镜把高斯模糊的模糊边缘给干掉
      filter: contrast(20);
      background-color: white;
      overflow: hidden;

      .g-filter {
        // 添加的
        filter: blur(10px);

        height: 100px;
        background: radial-gradient(
          circle at 50% -10px,
          transparent 0,
          transparent 39px,
          #000 40px,
          #000
        );
      }
    }
  }
  .contrast__wrapper {
    position: relative;
    width: 300px;
    height: 200px;
    filter: contrast(20);
    background: white;
    .circle-1 {
      top: 30px;
      left: 20px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      position: absolute;
      background: black;
      filter: blur(10px);
      transition: transform 1s linear;
    }
    .circle-2 {
      top: 30px;
      right: 20px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      position: absolute;
      background: blue;
      filter: blur(10px);
      transition: transform 1s linear;
    }
    &:hover {
      .circle-1 {
        transform: translate(200px);
      }
      .circle-2 {
        transform: translate(-200px);
      }
    }
  }
  .filter-test__wrapper {
    .filter {
      width: 200px;
      height: 200px;
      background: blueviolet;
      position: relative;
    }
    .filter::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      backdrop-filter: grayscale(100%);
      // filter: grayscale(100%);
      transition: 0.3s transform;
    }
    .filter:hover::before {
      transform: translate(100%, 0);
      // filter: grayscale(0);
    }
  }
  .conic-progress {
    // background: black;
    width: 400px;
    .conic-progress__item {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      -webkit-mask: radial-gradient(
        transparent,
        transparent 50%,
        #000 50%,
        #000 0
      );
      background: conic-gradient(#ffcdb2 0, #ffcdb2 25%, #b5838d 25%, #b5838d);
    }
  }
</style>
