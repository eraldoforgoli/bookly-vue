<template>
  <div class="container">
    <div class="row center">
      <div class="mb-2">
        <span class="uploadHeader">Upload Book</span>
      </div>
      <div class="col-12">
        <form class="form-horizontal">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter Title" v-model="title">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter Author" v-model="author">
          </div>
          <div class="form-group">
            <textarea
              type="text"
              class="form-control"
              placeholder="Enter Description"
              v-model="description"
            ></textarea>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter Genre" v-model="genre">
          </div>
          <div class="form-group">
            <input type="number" class="form-control" placeholder="Enter Price" v-model="price">
          </div>
          <div class="form-group center">
            <v-flex xs12 sm6>
              <v-date-picker v-model="date" color="blue lighten-1"></v-date-picker>
            </v-flex>
          </div>
          <div class="form-group">
            <label class="file-upload btn btn-primary">
              {{file != "" ? file.name : "Browse for file"}}
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
          <button class="btn btn-primary submit-button" v-on:click="submitFile()">Submit</button>
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
      if (this.allFieldsHaveData()) {
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
    },
    allFieldsHaveData() {
      if (
        this.author != null &&
        this.author != "" &&
        this.date != null &&
        this.date != "" &&
        this.description != null &&
        this.description != "" &&
        this.title != null &&
        this.title != "" &&
        this.genre != null &&
        this.genre != "" &&
        this.price != null &&
        this.price != "" &&
        this.file != null &&
        this.file != "" &&
        this.file != undefined
      )
        return true;
      return false;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");

[hidden] {
  display: none !important;
}

.center {
  justify-content: space-around;
  align-items: center;
}

label {
  display: inline-block;
  width: 140px;
  text-align: right;
}

.form-control {
  display: inline !important;
  width: 71% !important;
}

.center {
  justify-content: space-around;
  align-items: center;
  display: flex;
  float: none;
}

.uploadHeader {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 36px;
  /* identical to box height, or 120% */
  display: flex;
  align-items: center;

  color: #000000;
}

.submit-button:hover {
  background-color: green !important;
  opacity: none !important;
  outline: none !important;

  box-shadow: none !important;
}
</style>