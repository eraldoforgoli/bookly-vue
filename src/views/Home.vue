<template>
  <div class="container">
    <div class="row">
      <BookPreview v-for="book in books" :key="book._id" :book="book" class></BookPreview>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import BookPreview from "@/components/BookPreview.vue";
import axios from "axios";

export default {
  name: "home",
  components: {
    HelloWorld,
    BookPreview
  },
  data() {
    return {
      books: [
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
      ]
    };
  },
  methods: {
    getAllBooks() {
      axios
        .get(`${process.env.VUE_APP_ALL_BOOKS_API}/allbooks`)
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
