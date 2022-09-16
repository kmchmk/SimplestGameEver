import { gql, useSubscription } from '@apollo/client';
import React from 'react';

const GET_HIGHSCORES = gql`
    subscription MyQuery {
      player(limit: 10, order_by: {score: desc}) {
        username
        score
      }
    }
`;

const HighScores = () => {
  const { loading, error, data } = useSubscription(GET_HIGHSCORES);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }

  if (data) {
    return data.player.map((p) => {
      return (
        <div key={p.username}>
          <p>{p.username}-{p.score}</p>
        </div>
      )
    })
  }
};

export default HighScores;
