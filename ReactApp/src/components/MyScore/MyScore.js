import { gql, useSubscription } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import "./MyScore.css";

const GET_MYSCORE = gql`
    subscription MyQuery($email: String!) {
        player_by_pk(email: $email) {
            name
            score
        }
    }
`;

const MyScore = () => {

    const [email, setEmail] = useState("");
    const { user, isLoading } = useAuth0();
    const { loading, error, data } = useSubscription(GET_MYSCORE, { variables: { email: email } });

    useEffect(() => {
        if (user) {
            setEmail(user.email)
        }
    }, [user]);

    if (loading || isLoading) {
        return <div>Loading my profile...</div>;
    }
    if (error) {
        console.error(error);
        return <div>Error!</div>;
    }

    if (data.player_by_pk) {
        return (
            <div>
                <div className="column">
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}'s score - {data.player_by_pk.score}</h2>
                </div>
            </div>
        )
    }
}

export default MyScore;
