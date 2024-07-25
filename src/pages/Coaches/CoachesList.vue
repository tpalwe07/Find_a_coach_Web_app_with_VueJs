<template>
  <section>
      <coach-filter @change-filter="setFilters"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="action">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register a Coach</base-button>
      </div>
      <ul>
        <coach-item
          v-for="coach in CoachFilterList"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        >
        </coach-item>
      </ul>
    </base-card>
  </section>
</template>
<script>
import CoachItem from './../../Components/coaches/CoachItem.vue';
import CoachFilter from '../../Components/coaches/CoachFilter.vue';

export default {
  components: {
    CoachItem,
    CoachFilter
  },
  data(){
   return{
      activeFilters : {
         frontend: true,
         backend:true,
         career:true
      }
   }
  },
  computed: {
    CoachFilterList() {
      const coachList= this.$store.getters['coaches/coaches'];
      return coachList.filter(coach =>{
         if(this.activeFilters.frontend && coach.areas.includes('frontend')){
            return true;
         }
         if(this.activeFilters.backend && coach.areas.includes('backend')){
            return true;
         }
         if(this.activeFilters.career && coach.areas.includes('career')){
            return true;
         }
         return false;

      });
    },

  },
  methods:{
   setFilters(updatedFilters){
      this.activeFilters= updatedFilters;
   }
  }
};
</script>
<style>
ul {
  list-style: none;
}
.action {
  display: flex;
  justify-content: space-between;
}
</style>
