import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: "Client-ID ICGtgey656l7QdcJhTxWwwOCsEtTAnOCOzCbFeg79Xs",
  },
});
