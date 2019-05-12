<template>
  <div class="col-md-4 col-lg-4">
    <img class="cover" src="../assets/demoImage.png" @click="goToBook()">
    <p>Author: {{book.author}}</p>
    <p>Date: {{book.date}}</p>
    <p>Genre: {{book.genre}}</p>
    <p>Price: {{book.price}} $</p>
    <p>Rating: {{book.rating}}</p>
    <p>{{bookDescription}}</p>
  </div>
</template>
<script>
export default {
  name: "Book",
  props: {
    book: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    imageUrl() {
      return '"..assets" + this.book.image_src';
    },
    bookDescription() {
      return this.book.desc.substring(0, 20);
    }
  },

  methods: {
    goToBook() {
      this.$router.push({
        name: "Books",
        params: { bookID: this.book._id }
      });
    }
  }
};
</script>

<style>
.cover {
  cursor: pointer;
}
</style>


