import React from 'react';

type FruitsProps = {
    fruits: string[];
}

export function FruitLoops(props: FruitsProps) {
    return (
        <ul>
            {props.fruits.map((fruit: string, index: number) => {
                let colour: string = '';
                if (fruit === 'banana') {
                    colour = 'red';
                }
                return <li key={index} style={{color: colour}}>{fruit}</li>
            })}
        </ul>
    )
}
