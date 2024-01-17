<template>
  <div>
    <main class="about">
      <div class="box left">
        <img src="../public/images/me.png" alt="" />
        <h2>Orange4u</h2>
        <p>Here is an orange for you</p>
      </div>
      <div class="box right">
        <ul>
          <li>喜欢前端</li>
          <li>喜欢记录和分享</li>
          <li>养了一只橘猫</li>
          <li>听了很多故事</li>
          <li>看了很多本书</li>
          <li>玩了很多游戏</li>
          <li>还是在寻找自己</li>
        </ul>
      </div>
    </main>
    <section class="info-list">
      <div class="info-item">
        <h4 class="title">✨experience</h4>
        <ul>
          <li>⏳2015.09 ~ 2019.06 🎪zzu 👻undergraduate</li>
          <li>⏳2019.06 ~ 2020.07 🎪yioks 👻frontend developer</li>
          <li>⏳2021.09 ~ now 🎪zzu 👻postgraduate</li>
        </ul>
      </div>
      <div class="info-item">
        <h4 class="title">🔨skill</h4>
        <!-- 🌑🌒🌓🌔🌕 -->
        <ul>
          <li>🌔html</li>
          <li>🌔css</li>
          <li>🌓js</li>
          <li>🌒vue</li>
          <li>🌒jfinal</li>
          <li>🌒RL</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
html,
body {
  height: 100%;
  min-width: 346px;
  margin: 0;
  padding: 0;
}

body {
  background: #7f7fd5;
  background: -webkit-linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
  background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
  font-size: 16px;
  font-family: JetBrainsMono;
}

a {
  text-decoration: none;
  color: #0f0d56;
}

p {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-bottom: 10px;
  line-height: 1.5;
}

li:last-child {
  margin-bottom: 0;
}

/* main.home */

main.home {
  width: 100%;
  padding-top: 40px;
  text-align: center;
  color: #0f0d56;
}

main.home .icon-list {
  display: flex;
  justify-content: space-between;
  /* width: 300px; */
  width: 250px;
  margin: 50px auto;
  -webkit-user-select: none;
  user-select: none;
}

main.home .icon-list .icon-item a {
  display: inline-block;
  border-bottom: 2px solid rgba(0, 53, 255, 0);
  transition: all 0.3s ease-in-out;
}

main.home .icon-list .icon-item:hover a {
  color: #0035ff;
  border-color: rgba(0, 53, 255, 1);
}

main.home .icon-list .icon-item .iconfont {
  font-size: 20px;
}

/* main.about section.info-list*/

@media (min-width: 700px) {
  main.about {
    width: 700px;
    display: flex;
    justify-content: space-between;
  }
  main.about .left {
    width: 300px;
  }
  main.about .right {
    width: 380px;
  }
  section.info-list {
    width: 700px;
  }
}

main.about {
  margin: 0 auto;
  padding: 50px 20px 0 20px;
  min-width: 316px;
}

main.about .box img {
  width: 150px;
  height: 150px;
}

main.about .left {
  text-align: center;
}

main.about .left h2 {
  margin-top: 0;
  margin-bottom: 5px;
}

main.about .right {
  display: flex;
  align-items: center;
}

section.info-list {
  margin: 0 auto;
  padding: 0 20px 50px 20px;
  min-width: 316px;
}

main.about .box,
section.info-list .info-item {
  margin-bottom: 20px;
  padding: 20px 20px;
  box-sizing: border-box;
  color: #0035ff;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  border: 2px solid rgba(0, 53, 255, 0);
  transition: all 0.3s ease-in-out;
}

main.about .box:hover,
section.info-list .info-item:hover {
  border-color: rgba(0, 53, 255, 1);
}

main.about .box .title,
section.info-list .info-item .title {
  margin: 10px 0 30px 0;
}

section.info-list .info-item:last-child {
  margin-bottom: 0;
}

/* footer */

footer {
  width: 100%;
  min-width: 346px;
  font-weight: bold;
  text-align: center;
  padding-bottom: 50px;
}

footer a {
  color: #596187;
  font-size: 12px;
  display: block;
}

footer a img {
  position: relative;
  top: 2px;
  left: 5px;
  width: 15px;
  height: 15px;
}
</style>
