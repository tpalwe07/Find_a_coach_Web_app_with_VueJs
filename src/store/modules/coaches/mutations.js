export default{

    addNewCoach(state,newCoach){
       
        state.coaches.push(newCoach);
        console.log(state.coaches);
    }

};