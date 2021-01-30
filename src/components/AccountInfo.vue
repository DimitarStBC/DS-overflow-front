<template>
  <div>
    <div class="popularTags">
      <h2>#JavaScript</h2>
      <h2>#PHP</h2>
      <h2>#Reading</h2>
      <h2>#Java</h2>
      <h2>#Python</h2>
      <h2>#Django</h2>
      <h2>#Blogging</h2>
      <h2>#Coffee</h2>
      <h2>#Business</h2>
    </div>
    <div v-if="logged"></div>
    <div class="widthAccountInfo" v-else>
      <div class="d-flex justify-content-center">
        <b-button class="mr-3" variant="dark">Login</b-button>
        <b-button v-b-modal.signup variant="outline-dark">Sign Up</b-button>
      </div>
    </div>

    <b-modal
      id="signup"
      title="Register"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      ok-only
      ok-variant="secondary"
      ok-title="Cancel"
    >
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Password:">
          <b-form-input
            type="password"
            v-model="form.password"
            id="text-password"
            aria-describedby="password-help-block"
            required
          ></b-form-input>
          <b-form-text id="password-help-block">
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </b-form-text>
        </b-form-group>

        <b-form-group label="repeat your password:">
          <b-form-input
            type="password"
            v-model="passwordRep"
            id="text-password-rep"
            aria-describedby="password-help-block"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" class="mr-3" variant="dark">Register</b-button>
        <b-button type="reset" variant="outline-dark">Clear</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AccountInfo",
  data() {
    return {
      logged: false,
      headerBgVariant: "dark",
      headerTextVariant: "light",
      form: {
        email: "",
        name: "",
        password: "",
      },
      passwordRep: "",
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      if (this.form.password != this.passwordRep) {
        this.toast(
          "b-toaster-bottom-right",
          "Password mismatch!",
          "Try again",
          "danger",
          true
        );
      } else {
        axios
          .post("/register", {
            name: this.form.name,
            email: this.form.email,
            password: this.form.password,
          })
          .then((response) => console.log(response));
        this.toast(
          "b-toaster-bottom-right",
          "Success",
          "You can login now",
          "success",
          true
        );
      }
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.password = "";
      this.passwordRep = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    toast(toaster, title, text, variant, append = false) {
      this.counter++;
      this.$bvToast.toast(`${text}!`, {
        title: title,
        toaster: toaster,
        solid: true,
        variant: variant,
        appendToast: append,
      });
    },
  },
};
</script>

<style scoped>
.popularTags {
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
}
.popularTags h2 {
  font-size: 20px;

  margin: 2px 5px;
  cursor: pointer;
}
.popularTags h2:hover {
  text-decoration: underline;
}
.widthAccountInfo > div {
  width: 80%;
}
</style>