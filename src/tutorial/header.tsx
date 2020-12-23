import React from 'react';

type HeaderProps = {
    welcomeText: string
}

export function Header(props: HeaderProps) {
   // props.welcomeText = 'Do not change properties inside Component';
    // alert('HELLO'); <- will be triggered before the component is loaded

    React.useEffect(() =>{ // executes after the component is loaded
       // alert(document.getElementById('customHeader'));
    });

    return(
        <h1 id="customHeader" style={{color: 'green', fontSize: '100px'}} // more important, then defined in css file. Attributes and css values - camelCase
        className='primaryHeader'>Hello world: {props.welcomeText}!</h1>
    )
}

Header.displayName = 'VeryCustomName'; // this will replace component name in React dev tools
