import {create} from 'apisauce';

const client = create({
  baseURL: 'https://dummyjson.com/',
});

client.addResponseTransform(response => {});

export default client;
