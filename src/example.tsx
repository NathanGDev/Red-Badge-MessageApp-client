import React from 'react';

// Props
//      title: string
//      content: string
//       mydata: obj{}

interface MyProps {
    title: string,
    content: string,
    myData?: {
        name: string;
        token: string;
        age: number;
    }
}

function MyComp(props: MyProps) {
    return (
        <div>Hello</div>
    )
}

function OtherComp(props: any) {
    return (
        <div>
            <MyComp title="stringy"  />
        </div>

    )
}