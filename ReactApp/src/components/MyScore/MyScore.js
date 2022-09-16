import { gql, useSubscription } from '@apollo/client';
import React from 'react';

const GET_MYSCORE = gql`
    subscription MyQuery {
        player(where: {username: {_eq: "Ravindu"}}) {
        username
        score
        }
    }
`;


const MyScore = () => {
    const { loading, error, data } = useSubscription(GET_MYSCORE);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        console.error(error);
        return <div>Error!</div>;
    }
    if (data.player[0]) {
        return (
            <div>
                <p>{data.player[0].username}'s score - {data.player[0].score}</p>
            </div>
        )
    }
}

export default MyScore;
