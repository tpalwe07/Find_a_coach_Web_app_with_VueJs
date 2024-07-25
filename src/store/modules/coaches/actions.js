export default{
    addCoaches(context,coachFormData){
        const newCoach ={
            id:'c3',
            firstName: coachFormData.fName,
            lastName: coachFormData.lName,
            areas: coachFormData.areas,
            description: coachFormData.desc,
            hourlyRate: coachFormData.rate
        }
        console.log(context);
        context.commit("addNewCoach",newCoach);
    }
};