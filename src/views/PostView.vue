<template>
  <div class="profile">
    <div class="profile__name container">
      <h1 class="profile__name-heading">{{ user.username }}</h1>
    </div>
    <div class="profile__info">
      <div class="profile__info-top container">
        <p class="profile__city">{{ user.name }}</p>
        <p class="profile__email">{{ user.email }}</p>
        <p class="profile__phone">{{ user.phone }}</p>
        <p class="profile__website">{{ user.website }}</p>
        <p class="profile__company">
          {{ user.company.bs }} {{ user.company.name }}
        </p>
      </div>
      <div class="profile__info-bt container">
        <button class="profile__btn btn-secondary">Написать сообщение</button>
        <button class="profile__btn-right btn-secondary">
          Предложить сходить на концерт
        </button>
      </div>
    </div>
    <div class="post">
      <div class="container">
        <h2 class="post__header">{{ post.title }}</h2>
        <div class="post__top">
          <div class="post__content">
            <p class="post__text post__text--content">
              {{ post.body }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="about__right about__right--post container">
      <h4 class="about__right-heading">Оставьте комментарий</h4>
      <form class="about__form">
        <input
          v-model="name"
          class="about__input"
          type="text"
          placeholder="Введите имя"
        />
        <input
          v-model="email"
          class="about__input"
          type="email"
          placeholder="Email"
        />
        <textarea
          v-model="comment"
          class="about__textarea"
          placeholder="Комментарий"
        ></textarea>
        <button @click.prevent="sendComment" class="about__btn btn-secondary">
          отправить
        </button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Swal from "sweetalert2";
export default {
  name: "PostView",
  data: function () {
    return {
      post: {},
      user: { company: {} },
      name: "",
      email: "",
      comment: "",
    };
  },
  methods: {
    sendComment() {
      const payload = {
        name: this.name,
        email: this.email,
        comment: this.comment,
        postId: this.$route.params.id,
      };
      this.$store.dispatch("createComment", payload).then(() => {
        this.name = "";
        this.email = "";
        this.comment = "";
        Swal.fire({
          title: "Отправлено",
          text: "Ваш комментарий успешно отправлен",
        });
      });
    },
  },
  mounted() {
    this.$store
      .dispatch("getPost", this.$route.params.id)
      .then((post) => {
        this.post = post;
        return this.$store.dispatch("getUser", post.userId);
      })
      .then((user) => {
        this.user = user;
      });
  },
};
</script>

<style lang="scss"></style>
