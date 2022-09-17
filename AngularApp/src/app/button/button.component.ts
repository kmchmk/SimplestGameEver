import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const INCREMENT_SCORE = gql`
  mutation MyMutation {
    update_player_by_pk(pk_columns: {username: "prmadu"}, _inc: {score: 1}) {
      score
    }
  }
`;

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor(private apollo: Apollo) { }

  incrementScore() {
    this.apollo.mutate({ mutation: INCREMENT_SCORE }).subscribe((error) => {
      console.log('there was an error sending the query', error);
    });
  }

  ngOnInit(): void { }

}
