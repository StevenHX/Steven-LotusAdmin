<script setup>
import { ref, vShow } from "vue";
import { login, menu } from "@/api"
defineProps({
  msg: String,
});

console.log(login.login)
console.log(menu.getRouters)

const count = ref(0);

function show() {
  animateCSS(".demotest", "tada").then((message) => {
    console.log(message);
  });
}
function hide() {
  animateCSS(".demotest", "jello").then((message) => {
    console.log(message);
  });
}

const animateCSS = (element, animation, prefix = "animate__") =>
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);
    node.classList.add(`${prefix}animated`, animationName);
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }
    node.addEventListener("animationend", handleAnimationEnd, { once: true });
  });
</script>

<template>
  <h1 class="demotest">{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

  <svg-icon icon-class="user" />
  <button @click="show">进入</button>
  <button @click="hide">离开</button>
</template>
<style scoped>
a {
  color: #42b983;
}

/* .demotest {
  position: absolute;
  left: 50%;
  margin-left: -190px;
  top: 20vh;
  display: inline-block;
  text-shadow: 8px 8px 10px rgba(158, 48, 7, 0.6);
  font-size: 46px;
  font-weight: bold;
  background: linear-gradient(to right, red, blue);
  -webkit-background-clip: text;
  color: transparent;
} */
</style>
