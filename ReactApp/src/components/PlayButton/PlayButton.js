import { gql, useMutation } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import "./PlayButton.css"

const INCREMENT_MYSCORE = gql`
    mutation MyMutation($email: String) {
        update_player(where: {email: {_eq: $email}}, _inc: {score: 1}) {
        returning {
            score
        }
        }
    }
`;

const Button = () => {
    const [email, setEmail] = useState("");
    const { user, isLoading } = useAuth0();
    const [incrementMyScore] = useMutation(INCREMENT_MYSCORE, { variables: { email: email } });

    useEffect(() => {
        if (user) {
            setEmail(user.email)
        }
    }, [user]);

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>
            <button type="button" className="playbutton" onClick={incrementMyScore}>Click to play</button>
        </div>
    )
};
export default Button;