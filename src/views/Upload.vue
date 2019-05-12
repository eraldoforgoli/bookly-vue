<template>
  <div class="container mt-5">
    <div class="row center">
      <div class="col-7">
        <form class="form-horizontal">
          <div class="form-group">
            <label>Title:</label>
            <input type="text" class="form-control" placeholder="Enter Title" v-model="title">
          </div>
          <div class="form-group">
            <label>Author:</label>
            <input type="text" class="form-control" placeholder="Enter Author" v-model="author">
          </div>
          <div class="form-group">
            <label>Description:</label>
            <textarea
              type="text"
              class="form-control"
              placeholder="Enter Description"
              v-model="description"
            ></textarea>
          </div>
          <div class="form-group">
            <label>Genre:</label>
            <input type="text" class="form-control" placeholder="Enter Genre" v-model="genre">
          </div>
          <div class="form-group">
            <label>Price:</label>
            <input type="number" class="form-control" placeholder="Enter Price" v-model="price">
          </div>
          <div class="form-group">
            <v-layout row wrap>
              <v-flex xs12 sm6>
                <v-date-picker v-model="date" color="blue lighten-1"></v-date-picker>
              </v-flex>
            </v-layout>
          </div>
          <div class="form-group">
            <label class="file-upload btn btn-primary">
              Browse for file ...
              <input
                type="file"
                name="file"
                ref="file"
                v-on:change="handleFileUpload()"
                hidden
              >
            </label>
          </div>
        </form>
        <div>
          <button class="btn btn-primary" v-on:click="submitFile()">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      author: "",
      date: new Date().toISOString().substr(0, 10),
      description: "",
      title: "",
      file: "",
      genre: "",
      price: "",
      nrOfVotes: 0,
      rating: 0
    };
  },
  methods: {
    submitFile() {
      if (
        this.file != "" &&
        this.file != null &&
        this.author != null &&
        this.title != null
      ) {
        let formData = new FormData();
        formData.append("file", this.file);
        formData.append("author", this.author);
        formData.append("description", this.description);
        formData.append("title", this.title);
        formData.append("genre", this.genre);
        formData.append("price", this.price);
        formData.append("date", this.date);
        formData.append("nrOfVotes", this.nrOfVotes);
        formData.append("rating", this.rating);

        axios
          .post("https://7b9dae50.ngrok.io/upload", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(result => {
            console.log("SUCCESS");
            this.$router.push("/home");
          })
          .catch(error => {
            console.log("ERROR");
          });
      } else {
        alert("Please fill all data");
      }
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    }
  }
};
</script>

<style>
[hidden] {
  display: none !important;
}

.center {
  justify-content: space-around;
  align-items: center;
}
</style>