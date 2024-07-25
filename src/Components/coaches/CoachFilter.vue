<template>
    <div class="coachFilter">

        <span class="Filter-Option">
            <input type="checkbox" id="frontend" checked @change="setFilter">
            <label for="frontend">Frontend</label>
        </span>
        <span class="Filter-Option">
            <input type="checkbox" id="backend" checked @change="setFilter">
            <label for="backend">Backend</label>
        </span>
        <span class="Filter-Option">
            <input type="checkbox" id="career" checked @change="setFilter">
            <label for="career">Career</label>
        </span>
    </div>
</template>
<script>

export default{
    emits :['change-filter'],
    data(){
        return{
            filter:{
                frontend:true,
                backend:true,
                career:true
            }
        }
    },

    methods:{
        setFilter(event){
            const inputId=event.target.id;
            const isActive= event.target.checked;

            const selectedCoach={
                ...this.filter,[inputId]:isActive
            };
            this.filter=selectedCoach;
            this.$emit('change-filter',selectedCoach);
        }
    }

}
</script>
<style scoped>
.coachFilter{
    margin: 2rem 0rem;
    text-align: center;
    font-weight:bold;
    font-size: large;
}

.Filter-Option{
    margin:2rem;
}

</style>