import {ApolloClient, HttpLink, InMemoryCache, split} from '@apollo/client'
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from '@apollo/client/utilities';

const wsLink = new WebSocketLink({
	uri: 'wss://easy-swine-48.hasura.app/v1/graphql',
	options: {
	  reconnect: true,
	  connectionParams: {
		headers: {
		  'x-hasura-admin-secret': "HymKhMmrN6qiKkB3kORwGzm4CIvOABvqLzawX3PI5Gz5MQTaEnxzJER062b2xpBC"
		}
	  }
	}
  })
  
  const httpLink = new HttpLink({
	uri: 'https://easy-swine-48.hasura.app/v1/graphql',
	headers: {
	  'x-hasura-admin-secret': "HymKhMmrN6qiKkB3kORwGzm4CIvOABvqLzawX3PI5Gz5MQTaEnxzJER062b2xpBC"
	},
  })
  
  const splitLink = split(
	({ query }) => {
	  const definition = getMainDefinition(query);
	  return (
		definition.kind === "OperationDefinition" &&
			  definition.operation === "subscription"
	  )
	},
	wsLink,
	httpLink
  )
  
  const client = new ApolloClient({
	link: splitLink,
	cache: new InMemoryCache(),
  })
  
export default client;