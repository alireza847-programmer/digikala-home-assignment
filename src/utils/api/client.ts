import {create} from 'apisauce';

const client = create({
  baseURL: 'https://dummyjson.com/',
});

client.addResponseTransform(response => {
  console.log(response, 'response');
});

export default client;
