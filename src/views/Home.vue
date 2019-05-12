<template>
  <div class="container">
    <div class="row">
      <Book v-for="book in books" :key="book._id" :book="book" class></Book>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Book from "@/components/Book.vue";
import axios from "axios";

export default {
  name: "home",
  components: {
    HelloWorld,
    Book
  },
  data() {
    return {
      books: []
    };
  },
  methods: {
    getAllBooks() {
      axios
        .get("https://7b9dae50.ngrok.io/allbooks")
        .then(response => {
          console.log(response.data);
          this.books = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.getAllBooks();
  }
};
</script>
