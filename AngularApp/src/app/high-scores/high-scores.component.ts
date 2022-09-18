import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const High_SCORE = gql`
subscription HighSubscription {
  player(order_by: {score: desc}, limit: 3) {
    username
    score
  }
}`



@Component({
  selector: 'high-scores',
  templateUrl: './high-scores.component.html',
  styleUrls: ['./high-scores.component.css']
})
export class HighScores implements OnInit {
  player: any = [];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo
      .subscribe({
        query: High_SCORE,
      }).subscribe((result: any) =>{
        this.player = result?.data?.player;
        this.loading = result.loading;
        this.error = result.error;
      });

  }
}