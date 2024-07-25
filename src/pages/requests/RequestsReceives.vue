<template>
   <section>
      <base-card>
   <header>
      <h2 >
         Request Received
      </h2>
      <ul v-if="hasRequests">
      <request-item v-for="req in receivedRequests" :id="req.id" :email="req.userEmail" :message="req.message"></request-item>
   </ul>
      <h3 v-else>You haven't received any request yet</h3>
   </header>
   </base-card>
   </section>
</template>
<script>
import RequestItem from './../../Components/requests/RequestItem.vue';
export default{
   components:{
      RequestItem
   },
   computed:{
      receivedRequests(){
         return this.$store.getters['requests/requests'];
      },
      hasRequests(){
         return this.$store.getters['requests/hasRequests'];
      }


   }
}
</script>
