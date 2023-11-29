import { Client, cacheExchange, fetchExchange } from "urql";

const client = new Client({
	url: "http://192.168.0.14:3000/graphql",
	exchanges: [cacheExchange, fetchExchange],
});

export default client;
