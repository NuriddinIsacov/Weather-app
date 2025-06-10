const getData = async () => {
  data = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
  console.log(data);
};
