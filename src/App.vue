<template>
  <div class="switch ">
    <header>
      <img @click="toHome" src="./assets/header.jpeg" alt="header img" />
      <nav>
        <router-link to="/home/default" active-class="headerActive" exact class="headerNav"
          >Home</router-link
        >
        <router-link
          to="/about"
          active-class="headerActive"
          exact
          class="headerNav"
          >About</router-link
        >
        <router-link
          to="/column"
          active-class="headerActive"
          exact
          class="headerNav"
          >Column</router-link
        >
      </nav>
    </header>
    <router-view> </router-view>
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  methods: {
    toHome() {
      this.$router.push("/home/default");
    },
  },
};
</script>

<style>
.switch {
  text-align: center;
  padding-top: 50px;
}

.headerNav {
  text-decoration: none;
  color: #529ecc;
  display: inline-block;
  padding: 5px 20px;
  margin: 30px;
}

.headerActive {
  border-bottom: 2px solid black;
}
</style>
