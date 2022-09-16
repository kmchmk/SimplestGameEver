import { gql, useMutation } from '@apollo/client';
import React from 'react';

const INCREMENT_MYSCORE = gql`
    mutation MyMutation {
        update_player(where: {username: {_eq: "Ravindu"}}, _inc: {score: 1}) {
        returning {
            score
        }
        }
    }
`;

const Button = () => {
    const [incrementMyScore] = useMutation(INCREMENT_MYSCORE);

    return (
        <div>
            <button type="button" onClick={incrementMyScore}>Click Me</button>
        </div>
    )
};
export default Button;