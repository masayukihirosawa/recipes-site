<template>
  <header>
    <img @click="toHome" src="../assets/header.jpeg" alt="header img" />
    <nav>
      <router-link
        to="/home/index"
        active-class="headerActive"
        exact
        class="headerNav"
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
</style>
