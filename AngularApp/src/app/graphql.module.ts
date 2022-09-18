import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { HttpHeaders } from '@angular/common/http';
import { WebSocketLink } from '@apollo/client/link/ws';
import { environment } from '../environments/environment';

export function createApolloClient(): ApolloClientOptions<any> {
  return {
    link: new WebSocketLink({
      uri: 'wss://simplest-game-ever.hasura.app/v1/graphql',
      options: {
        reconnect: true,
        connectionParams: {
          headers: {
            'x-hasura-admin-secret': environment.X_hasura_admin_secret
          }
        }
      }
    }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApolloClient,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule { }