import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://easy-swine-48.hasura.app/v1/graphql",
	cache: new InMemoryCache(),
	headers: {
		"x-hasura-admin-secret":
			"HymKhMmrN6qiKkB3kORwGzm4CIvOABvqLzawX3PI5Gz5MQTaEnxzJER062b2xpBC",
	},
});

export default client;