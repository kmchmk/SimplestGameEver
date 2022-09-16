import React from 'react';

const Button = () => {
    const [count, setCount] = React.useState(false);
    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <button type="button" onClick={handleClick}>Click Me</button>
            {count}
        </div>
    )
};
export default Button;