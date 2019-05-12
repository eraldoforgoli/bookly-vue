<template>
  <div class="container mt-3">
    <div class="center col-md-12 justify-content-center">
      <Book :book="book"></Book>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import Book from "@/components/Book.vue";
export default {
  name: "Books",
  props: {
    bookID: String
  },
  components: { Book },
  data() {
    return {
      book: Object
    };
  },
  created() {
    this.getBookData();
  },
  methods: {
    getBookData() {
      axios
        .post("https://7b9dae50.ngrok.io/singleBookData", {
          id: this.bookID
        })
        .then(response => {
          console.log(response.data);
          this.book = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
.center {
  justify-content: space-around;
  align-items: center;
  display: flex;
  float: none;
}
</style>