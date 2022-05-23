<template>
  <div class="home">
    <div class="promo">
      <div class="container">
        <div class="promo__shadow">
          <h1 class="promo__heading">Twenty One Pilots</h1>
          <p class="promo__text">22.02.23 в 21:00</p>
        </div>
        <div class="promo__bottom">
          <button class="promo__btn">
            <svg
              class="promo__svg"
              width="6"
              height="10"
              viewBox="0 0 6 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.382372 4.54038C0.128531 4.79422 0.128531 5.20578 0.382372 5.45962L4.51895 9.59619C4.77279 9.85003 5.18434 9.85003 5.43818 9.59619C5.69203 9.34235 5.69203 8.9308 5.43818 8.67696L1.76123 5L5.43818 1.32304C5.69203 1.0692 5.69203 0.657647 5.43818 0.403806C5.18434 0.149965 4.77279 0.149965 4.51895 0.403806L0.382372 4.54038ZM1.89462 4.35H0.841991V5.65H1.89462V4.35Z"
              />
            </svg>
          </button>
          <button class="btn-primary">Купить билет</button>
          <button class="promo__btn">
            <svg
              class="promo__svg"
              width="6"
              height="10"
              viewBox="0 0 6 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.61735 5.45962C5.87119 5.20578 5.87119 4.79422 5.61735 4.54038L1.48078 0.403806C1.22694 0.149965 0.815381 0.149965 0.56154 0.403806C0.307699 0.657647 0.307699 1.0692 0.56154 1.32304L4.2385 5L0.56154 8.67696C0.307699 8.9308 0.307699 9.34235 0.56154 9.59619C0.815381 9.85003 1.22694 9.85003 1.48078 9.59619L5.61735 5.45962ZM4.1051 5.65H5.15773V4.35H4.1051V5.65Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="tickets container">
      <div class="tickets__header">
        <h2 class="tickets__heading">Купили билеты</h2>
        <p class="tickets__text">932/<span>1000</span></p>
      </div>
      <div class="tickets__top">
        <div class="tickets-user">
          <h3 class="tickets-user__heading">Иванов семен</h3>
          <p class="tickets-user__text">Санкт-Петербург</p>
          <button class="tickets-user__btn btn-secondary">
            Смотреть профиль
          </button>
        </div>
        <div class="tickets-user">
          <h3 class="tickets-user__heading">Иванов семен</h3>
          <p class="tickets-user__text">Санкт-Петербург</p>
          <button class="tickets-user__btn btn-secondary">
            Смотреть профиль
          </button>
        </div>
        <div class="tickets-user">
          <h3 class="tickets-user__heading">Иванов семен</h3>
          <p class="tickets-user__text">Санкт-Петербург</p>
          <button class="tickets-user__btn btn-secondary">
            Смотреть профиль
          </button>
        </div>
        <div class="tickets-user">
          <h3 class="tickets-user__heading">Иванов семен</h3>
          <p class="tickets-user__text">Санкт-Петербург</p>
          <button class="tickets-user__btn btn-secondary">
            Смотреть профиль
          </button>
        </div>
      </div>
      <div class="about container">
        <div class="about__left">
          <h3 class="about__heading">О площадке</h3>
          <div class="about__text">
            <p class="about__text-top">
              Современная площадка для проведения концертов и других мероприятий
              любой сложности.
            </p>
            <p class="about__text-bt">
              Мы предоставляем всю необходимую для организаторов инфраструктуру
              и готовые решения под все основные задачи любого события, а также
              современное оборудование, соответствующее самым высоким мировым
              стандартам.
            </p>
          </div>
        </div>
        <div class="about__right">
          <h4 class="about__right-heading">
            Оставить заявку на проведение концерта
          </h4>
          <form class="about__form">
            <textarea
              class="about__textarea"
              placeholder="Расскажите о вашем предложении "
            ></textarea>
            <button class="about__btn btn-secondary">отправить</button>
          </form>
        </div>
      </div>
    </div>
    <div class="group container">
      <h2 class="group__heading">О группе</h2>
      <p class="group__text">
        Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо. Группа
        образовалась в 2009 году и на данный момент состоит из Тайлера Джозефа и
        Джоша Дана. Коллектив самостоятельно выпустил два альбома: Twenty One
        Pilots в 2009 и Regional at Best в 2011.
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>

<style lang="scss">
.promo {
  padding-top: 157px;
  text-align: center;
  height: 494px;
  background-image: url(@/assets/img/promo_bg.png);
  background-size: cover;
  background-position: center;
  background-position-y: -165px;
  &__shadow {
    background: radial-gradient(
      50% 50% at 50% 50%,
      #000000 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  &__heading {
    font-family: "Alegreya Sans SC";
    font-weight: 700;
    font-size: 50px;
    line-height: 60px;
    color: #ffffff;
  }
  &__text {
    font-family: "Alegreya Sans SC";
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    color: #ffffff;
  }
  &__bottom {
    margin-top: 96px;
    display: flex;
    justify-content: space-between;
    .btn-primary {
      padding: 11px 59px;
    }
  }
  &__btn {
    border: 1px solid #ffffff;
    outline: none;
    background-color: transparent;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    fill: #ffffff;
    &:hover {
      background-color: #ffffff;
      fill: #0d1e4b;
    }
  }
}
.tickets {
  &__header {
    display: flex;
    justify-content: space-between;
    margin-top: 31px;
  }
  &__heading {
    font-family: "Alegreya Sans SC";
    font-weight: 500;
    font-size: 35px;
    line-height: 40px;
  }
  &__text {
    font-family: "Alegreya Sans SC";
    font-weight: 500;
    font-size: 35px;
    line-height: 40px;
    span {
      color: #939393;
    }
  }
  &__top {
    display: flex;
    justify-content: space-between;
  }
}
.tickets-user {
  margin-top: 16px;
  width: 239px;
  border: 1px solid #dadada;
  &:hover {
    border: 1px solid #000000;
  }

  &__heading {
    margin-top: 14px;
    margin-left: 17px;
    font-weight: 700;
    font-size: 17px;
    line-height: 23px;
    text-transform: capitalize;
  }
  &__text {
    margin-top: 4px;
    margin-left: 17px;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    color: rgba(0, 0, 0, 0.41);
  }
  &__btn {
    margin-top: 35px;
    margin-bottom: 15px;
    margin-left: 17px;
    padding: 10px 20px;
  }
}
.about {
  margin-top: 47px;
  display: flex;
  justify-content: space-between;
  &__left {
  }
  &__heading {
    font-family: "Alegreya Sans SC";
    font-weight: 500;
    font-size: 35px;
    line-height: 40px;
  }
  &__text {
    width: 327px;
    padding-left: 42px;
    border-left: 2px solid #939393;
    position: relative;
    &::before {
      display: block;
      content: " ";
      width: 9px;
      height: 57px;
      background-color: #0d1e4b;
      position: absolute;
      left: -5px;
      top: 82px;
    }
  }
  &__text-top {
    margin-top: 16px;
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
  }
  &__text-bt {
    margin-top: 16px;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #939393;
  }
  &__right {
    width: 100%;
    border: 1px solid #dadada;
    margin-left: 68px;
    padding: 13px 25px 25px 25px;
  }
  &__right--post {
    margin-left: auto;
    margin-bottom: 30px;
  }
  &__right-heading {
    padding-bottom: 19px;
    font-weight: 600;
    font-size: 18px;
    line-height: 40px;
  }
  &__form {
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
  }
  &__textarea {
    display: block;
    width: 100%;
    height: 134px;
    margin-bottom: 16px;
    resize: none;
    font-weight: 600;
    font-size: 11px;
    line-height: 15px;
    padding-top: 10px;
    padding-left: 20px;
  }
  &__btn {
    padding: 10px 20px;
  }
}
.group {
  display: flex;
  margin-top: 48px;
  margin-bottom: 38px;
  &__heading {
    margin-right: 28px;
    font-family: "Alegreya Sans SC";
    font-weight: 500;
    font-size: 35px;
    line-height: 40px;
  }
  &__text {
    width: 838px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #939393;
  }
}
</style>
