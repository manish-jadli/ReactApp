export const selectUser=(user)=>{
    console.log('You have cliked on ', user.name);

    return {
        type:"USER_SELECTED",
        payload:user
    }
};