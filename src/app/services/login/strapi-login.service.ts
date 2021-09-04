import { Injectable } from '@angular/core';

import { Apollo, gql } from 'apollo-angular';

// We use the gql tag to parse our query string into a query document
const GET_POST = gql`
  mutation($id: String!, $password: String!) {
    login(input: { identifier: $id, password: $password }) {
      user {
        id
        username
      }
      jwt
    }
  }
`;

@Injectable()
export class StrapiLoginService {
  
  constructor(private apollo: Apollo) {}

  gLogin(username: string, password: string) {
    return this.apollo.mutate({
      mutation: GET_POST,
      variables: {
        "id": username,
        "password": password
      }
    });
  }
}
