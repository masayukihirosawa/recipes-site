<template>
  <header>
    <img
      @click="toHome"
      src="../assets/header.jpeg"
      alt="header img"
      class="photo"
    />
    <nav>
      <router-link to="/home" active-class="headerActive" class="headerNav"
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
</template>

<script>
export default {
  methods: {
    toHome() {
      this.$router.push("/home/index");
    },
  },
};
</script>

<style scoped>
header {
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

@media (max-width: 1000px) {
  .photo {
    width: 60%;
  }

  header {
    padding-top: 25px;
  }

  .headerNav {
    padding: 5px;
    margin: 10px 5px;
    width: 25%;
  }
}
</style>
