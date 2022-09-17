import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const MY_SCORE = gql`
subscription MySubscription {
  player_by_pk(username: "prmadu") {
    username
    score
  }
}
`

@Component({
  selector: 'app-myscore',
  templateUrl: './myscore.component.html',
  styleUrls: ['./myscore.component.css']
})

export class MyscoreComponent implements OnInit {

  player: any = [];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo
      .subscribe({
        query: MY_SCORE,
      }).subscribe((result: any) => {
        this.player = result?.data?.player_by_pk;
        this.loading = result.loading;
        this.error = result.error;
      });
  }
}
