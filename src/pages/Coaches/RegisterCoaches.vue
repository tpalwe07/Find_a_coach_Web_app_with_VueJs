<template>
  <base-card>
    <form @submit.prevent="formSubmit">
      <div class="form-control" :class="{invalid : !firstName.isValid}">
        <label for="firstName">First Name</label>
        <input type="text" id="firstName" v-model.trim="firstName.value" />
        <p v-if="!firstName.isValid">First Name cannot be empty</p>
      </div>

      <div class="form-control" :class="{invalid : !lastName.isValid}">
        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" v-model.trim="lastName.value" />
        <p v-if="!lastName.isValid">Last Name cannot be empty</p>
      </div>

      <div class="form-control" :class="{invalid : !rate.isValid}">
        <label for="rate">Rate</label>
        <input type="text" id="rate" v-model.number="rate.value" />
        <p v-if="!rate.isValid">Rate cannot be null</p>
      </div>

      <div class="form-control" :class="{invalid : !description.isValid}">
        <label for="description">Description</label>
        <textarea
          id="description"
          rows="15"
          v-model.trim="description.value"
        ></textarea>
        <p v-if="!description.isValid">Description cannot be empty</p>
      </div>

      <div class="form-contol" :class="{invalid : !areas.isValid}" >
        <h3 >Area of Expertise</h3>
        <div>
          <input 
            type="checkbox"
            id="frontend"
            value="frontend"
            v-model="areas.value"
          />
          <label for="frontend">Frontend Development</label>
        </div>
        <div>
          <input type="checkbox" id="backend" value="backend" v-model="areas.value" />
          <label for="backend">Backend Development</label>
        </div>
        <div>
          <input type="checkbox" id="career" value="career" v-model="areas.value" />
          <label for="career">Career Development</label>
        </div>
        <p v-if="!areas.isValid">Select atleast one option from above</p>
      </div>
      <base-button>Register</base-button>
    </form>
  </base-card>
</template>
<script>
export default {
  data() {
    return {
      firstName: {
         value:'',
         isValid: true
      },

      lastName: {
         value:'',
         isValid: true
      },
      rate: {
         value:null,
         isValid: true
      },
      description: {
         value:'',
         isValid: true
      },
      areas: {
         value:[],
         isValid: true
      },
      formisValid:true
    };
  },

  methods: {

   validateForm(){
      this.formisValid = true
      if(this.firstName.value === ''){
         this.firstName.isValid = false;
         this.formisValid = false;
      }
      if(this.lastName.value === ''){
         this.lastName.isValid = false;
         this.formisValid = false;
      }
      if(!this.rate.value && this.rate.value <=0 ){
         this.rate.isValid =false;
         this.formisValid= false;
      }
      if(this.description.value === ''){
         this.description.isValid = false;
         this.formisValid= false;
      }
      if(this.areas.value.length=== 0){
         this.areas.isValid = false;
         this.formisValid = false;
      }
   },

    formSubmit() {

      this.validateForm();

      if(!this.formisValid){
         return;
      }

      const formData = {
        fName: this.firstName.value,
        lName: this.lastName.value,
        rate: this.rate.value,
        desc: this.description.value,
        areas: this.areas.value,
      };

      this.$store.dispatch('coaches/addCoaches', formData);
      this.$router.replace('/coaches');
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
