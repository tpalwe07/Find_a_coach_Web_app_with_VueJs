<template>
<form @submit.prevent="submitForm">
    <div class="form-control">
        <label for="email">Email</label>
        <input type="email" id="email" v-model.trim="email">
    </div>
    <div class="form-control">
        <label for="msg">Message</label>
        <textarea rows="5" id="msg"  v-model.trim="msg"></textarea>
    </div>
    <p class="invalid" v-if="!formisValid">Please enter a valid email and non-empty message</p>
    <div class="action">
        <base-button>Send Message</base-button>
    </div>

</form>
</template>
<script>

export default{

    data(){
        return{
            email:'',
            msg:'',
            formisValid:true
        }
    },
    methods :{
        submitForm(){
            this.formisValid=true;
            if(this.email==='' || !this.email.endsWith('@gmail.com' || this.msg==='')){
                this.formisValid=false;
                return;
            }
            
            this.$store.dispatch('requests/contactCoach',{
                coachId:this.$route.params.id,
                email:this.email,
                msg:this.msg
            });
            this.$router.replace('/coaches');
        }
    }

}
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
