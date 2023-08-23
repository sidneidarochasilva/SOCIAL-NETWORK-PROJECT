
import api from './api';



export async function getPosts() {
   try {
    const response = api.get('/post?limit=20');
    return response
  } catch (err) {
    console.log("ocorreu um erro", err)
  } 
}
