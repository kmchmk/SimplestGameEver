import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

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
      .watchQuery({
        query: gql`
        {
          player_by_pk(username: "prmadu") {
            username
            score
          }
        }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        console.log("asdf", result)
        this.player = result?.data?.player_by_pk;
        this.loading = result.loading;
        this.error = result.error;
      });
  }


}
