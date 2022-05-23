<template>
  <div class="profile">
    <div class="profile__name container">
      <h1 class="profile__name-heading">Иванов Семен</h1>
    </div>
    <div class="profile__info">
      <div class="profile__info-top container">
        <p class="profile__city">Санкт-Петербург</p>
        <p class="profile__email">ivanov@mail.com</p>
        <p class="profile__phone">+7 (821) 311-21-32</p>
        <button class="profile__btn btn-secondary">Написать сообщение</button>
        <button class="profile__btn-right btn-secondary">
          Предложить сходить на концерт
        </button>
      </div>
    </div>
    <div class="post">
      <div class="container">
        <h2 class="post__header">Заголовок поста</h2>
        <div class="post__top">
          <div class="post__content">
            <p class="post__text post__text--content">
              Просто шикарный альбом, Пилоты после Blurryface решили не идти
              проторенной дорожкой, и сделали что то новое. На мой взгляд у них
              на 100% получилось, альбом слушается на одном дыхании, каждая
              песня чем то запоминается, естественно нужно понимать тексты,
              чтобы вникнуть до конца во весь сюжет и атмосферу альбома....
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="about__right about__right--post container">
      <h4 class="about__right-heading">Оставьте комментарий</h4>
      <form class="about__form">
        <textarea
          class="about__textarea"
          placeholder="Расскажите о вашем предложении "
        ></textarea>
        <button class="about__btn btn-secondary">отправить</button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "PostView",
  components: {},
};
</script>

<style lang="scss"></style>
