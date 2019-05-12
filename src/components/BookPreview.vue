<template>
  <div class="book-container col-md-3 my-3 mx-3">
    <div class="row">
      <div class="col-12 pt-4 image-div">
        <img class="cover" src="../assets/demoImage.png" @click="goToBook()">
        <button class="btn btn-primary">{{book.rating}}</button>
        <button class="btn btn2 btn-primary">{{book.price}}$</button>
      </div>
    </div>
    <p>{{bookName}}</p>
    <p>{{book.genre}}</p>
  </div>
</template>
<script>
export default {
  name: "BookPreview",
  props: {
    book: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    bookName() {
      if (this.book.name.length > 15) {
        return this.book.name.substrint(0, 15);
      }
      return this.book.name;
    }
  },

  methods: {
    goToBook() {
      this.$router.push({
        name: "Book",
        params: { bookID: this.book._id }
      });
    }
  }
};
</script>

<style scoped>
@media (min-width: 768px) {
  .col-md-3 {
    -ms-flex: 0 0 25%;
    -webkit-box-flex: 0;
    flex: 0 0 25%;
    max-width: 28% !important;
  }
}

.book-container {
  background: #ffffff;
  /* Background Darker */
  border: 1px solid #e8e9f0;
  box-sizing: border-box;
  border-radius: 4px;
  height: 400px;
}

p {
  margin: 0 !important;
}

.image-div {
  height: 340px;
}

.book-container .btn {
  position: absolute;
  top: 20%;
  left: 30%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #555;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  text-align: center;
}

.book-container .btn2 {
  position: absolute;
  top: 20%;
  left: 70%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #555;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  text-align: center;
}

p {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
}

button:hover {
  background-color: #dfdee3 !important;
}
</style>


