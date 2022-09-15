import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'high-scores',
  templateUrl: './high-scores.component.html',
  styleUrls: ['./high-scores.component.css']
})
export class ExchangeRates implements OnInit {
  player: any = [];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: gql`
          {
          player (limit: 3, order_by: {score: desc}) {
            username
            score
          }
        }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.player = result?.data?.player;
        this.loading = result.loading;
        this.error = result.error;
      });
  }
}