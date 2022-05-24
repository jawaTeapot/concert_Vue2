<template>
  <div id="app">
    <nav class="header">
      <div class="header__inner container">
        <img
          class="header__img"
          src="@/assets/img/logo.svg"
          alt="logo"
          @click="$router.push('/')"
        />
        <div>
          <button class="header__btn btn-primary">
            Версия для слабовидящих
          </button>
          <button class="btn-primary">Мой профиль</button>
          <!-- <router-link to="/">Версия для слабовидящих</router-link> |
          <router-link to="/about">Мой профиль</router-link> -->
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/css/reset.css";
* {
  box-sizing: border-box;
}
body {
  font-family: "Open Sans", sans-serif;
}
.container {
  max-width: 1017px;
  margin: 0 auto;
}
.header {
  height: 70px;
  background-color: #101010;
  &__img {
    cursor: pointer;
  }
  &__inner {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__btn {
    margin-right: 12px;
  }
}
.btn-primary {
  border: none;
  outline: none;
  padding: 10px 20px;
  background: #ffffff;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
}
.btn-secondary {
  background-color: #101010;
  border: 1px solid #0d1e4b;
  color: #ffffff;
  font-weight: 600;
  font-size: 11px;
  line-height: 15px;
  text-transform: capitalize;
  cursor: pointer;
}
</style>
