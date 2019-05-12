<template>
  <div class="container mt-3">
    <div class="center">
      <div class="row">
        <div class="col-12">
          <img class="cover pt-3" src="../assets/demoImage.png">
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <p>Author: {{book.author}}</p>
          <p>Date: {{book.date}}</p>
          <p>Genre: {{book.genre}}</p>
          <p>Price: {{book.price}} $</p>
          <p>Rating: {{book.rating}}</p>
          <p>{{book.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "Book",
  props: {
    bookID: String
  },
  components: {},
  data() {
    return {
      book: {
        _id: "5cd7e93129048e34ebfb888a",
        name: "gezim",
        date: "dummy",
        genre: "lorem",
        price: "ipsum",
        rating: "12.4",
        nr_of_votes: "45",
        photo_src: "demoImage.png",
        author: "test",
        desc: "oegnrweugnwengveuwgvuwegvnuewnbgwnuigvewuinguiowegnneiwgfvnw"
      }
    };
  },
  created() {
    this.getBookData();
  },
  methods: {
    getBookData() {
      console.log(`${process.env.VUE_APP_ALL_BOOKS_API}/singleBookData`);
      axios
        .post(`${process.env.VUE_APP_ALL_BOOKS_API}/singleBookData`, {
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

  float: none;
}
</style>