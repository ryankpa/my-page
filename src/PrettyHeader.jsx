import React from 'react'

export class PrettyHeader extends React.Component {
    render(){
        return(
            <div id='PrettyHeader' class='relative bg-yoru h-yoru w-full shadow-md'>
                <div id='gradient-overlay' class='bg-gradient-to-b from-transparent to-gray-900 h-yoru'>

                </div>
                <div class='absolute fade-in w-full text-center m-auto bottom-0 shadow-md'>
                    <p class='text-5xl font-mono font-normal text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-yellow-600 border-dashed border-b-2'>
                        print(selfIntro);
                    </p>
                </div>
            </div>
        );
    }
}