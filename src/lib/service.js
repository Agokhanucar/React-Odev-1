import axios from "axios";

async function getData(userId) {
    try{

    
    const {data: users } = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`);

    const {data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    return {...users, posts};
    }
    catch(error){
       console.log(error);
    }
}

export default getData;