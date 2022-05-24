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
        <h2 class="post__header">Посты</h2>
        <div class="post__top">
          <div
            class="post__left"
            v-for="post in posts"
            :key="post.id"
            @click="goToPost(post.id)"
          >
            <h3 class="post__heading">
              {{ post.title }} <span>12.01.22</span>
            </h3>
            <p class="post__text">
              {{ post.body }}
            </p>
          </div>
          <!-- <div class="post__right">
            <h3 class="post__heading">
              Twenty One Pilots <span>12.01.22</span>
            </h3>
            <p class="post__text">
              Просто шикарный альбом, Пилоты после Blurryface решили не идти
              проторенной дорожкой, и сделали что то новое. На мой взгляд у них
              на 100% получилось, альбом слушается на одном дыхании, каждая
              песня чем то запоминается, естественно нужно понимать тексты,
              чтобы вникнуть до конца во весь сюжет и атмосферу альбома....
            </p>
          </div> -->
        </div>
      </div>
    </div>
    <div class="public">
      <div class="public__top container">
        <h2 class="public__heading">Публикации</h2>
        <div class="public__bottom">
          <div class="public__item"></div>
          <div class="public__item"></div>
          <div class="public__item"></div>
          <div class="public__item"></div>
          <div class="public__item"></div>
          <div class="public__item"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ProfileView",
  data: function () {
    return {
      user: {
        company: {},
      },
      posts: [],
    };
  },
  methods: {
    goToPost(postId) {
      this.$router.push("/post/" + postId);
    },
  },
  mounted() {
    this.$store
      .dispatch("getUser", this.$route.params.id)
      .then((user) => {
        this.user = user;
        return this.$store.dispatch("getPosts", this.$route.params.id);
      })
      .then((posts) => {
        this.posts = posts;
      });
  },
};
</script>

<style lang="scss">
.profile {
  margin-top: 36px;
  border: 1px solid #000000;
  &__name {
    border: 1px solid #000000;
    border-top: none;
    border-bottom: none;
  }
  &__name-heading {
    padding: 11px 0 13px 18px;
    font-family: "Alegreya Sans SC";
    font-weight: 500;
    font-size: 35px;
    line-height: 40px;
  }
  &__info {
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
    margin-bottom: 25px;
  }
  &__info-top {
    border: 1px solid #000000;
    border-top: none;
    display: flex;
    justify-content: space-between;
    p {
      display: flex;
      align-items: center;
    }
  }
  &__city {
    border-right: 1px solid #000000;
    padding: 14px 22px 10px 18px;
    font-weight: 400;
    font-size: 18px;
    line-height: 17px;
  }
  &__email {
    padding: 14px 20px 10px 22px;
    border-right: 1px solid #000000;
    font-weight: 400;
    font-size: 18px;
    line-height: 17px;
  }
  &__phone {
    padding: 14px 22px 10px 22px;
    border-right: 1px solid #000000;
    font-weight: 400;
    font-size: 18px;
    line-height: 17px;
    flex: 1;
  }
  &__website {
    padding: 14px 22px 10px 22px;
    border-right: 1px solid #000000;
    font-weight: 400;
    font-size: 18px;
    line-height: 17px;
    flex: 1;
  }
  &__company {
    padding: 14px 22px 10px 22px;
    font-weight: 400;
    font-size: 18px;
    line-height: 17px;
    flex: 1;
  }
  &__info-bt {
    border: 1px solid #000000;
    border-top: none;
    border-bottom: none;
    text-align: center;
  }
  &__btn {
    padding: 15px 28px;
    border-right: 1px solid white;
  }
  &__btn-right {
    padding: 15px 31px;
  }
}
.post {
  border-top: 1px solid #000000;

  &__header {
    padding: 16px 0 15px;
    font-family: "Alegreya Sans SC";
    font-weight: 500;
    font-size: 35px;
    line-height: 40px;
  }
  &__top {
    margin-bottom: 32px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
    gap: 20px;
  }
  &__left {
    border: 1px solid #000000;
    padding: 14px 35px 17px;
    cursor: pointer;
  }
  &__right {
    border: 1px solid #000000;
    padding: 14px 35px 17px;
  }

  &__heading {
    display: flex;
    justify-content: space-between;
    padding-bottom: 4px;
    font-weight: 700;
    font-size: 17px;
    line-height: 23px;
    text-transform: capitalize;
    span {
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;
    }
  }
  &__text {
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    color: rgba(0, 0, 0, 0.41);
  }
  &__text--content {
    font-size: 16px;
    line-height: 22px;
  }
}
.public {
  border-top: 1px solid #000000;
  &__heading {
    font-family: "Alegreya Sans SC";
    font-weight: 500;
    font-size: 35px;
    line-height: 40px;
    padding: 23px 0 20px;
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
    padding-bottom: 41px;
  }
  &__item {
    width: 154px;
    height: 154px;
    border: 1px solid #000000;
    background-color: #63b4ee;
    &:nth-child(2) {
      background-color: #2b9ff2;
    }
    &:nth-child(3) {
      background-color: #547fed;
    }
    &:nth-child(4) {
      background-color: #4366e1;
    }
    &:nth-child(5) {
      background-color: #2040b0;
    }
    &:nth-child(6) {
      background-color: #0c257c;
    }
  }
}
</style>
