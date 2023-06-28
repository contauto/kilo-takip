import React from 'react';

function Section({bg,children}) {
    return (
        <div className={`h-full w-full flex flex-col justify-center items-center font-fira-sans ${bg}`}>
            {children}
        </div>
    );
}

export default Section;