import React from 'react'

export class PrettyHeader extends React.Component {
    render(){
        return(
            <div id='PrettyHeader' className='relative box-border h-yoru w-full shadow-md border-b-4 border-yellow-400
                     bg-gray-900'>
                <div className='relative h-yoru'>
                    <p className='fade-in text-5xl z-40 text-yellow-200 w-auto font-extrabold py-4 text-center
                    absolute top-1/2 left-1/2 transform -translate-y-1/2 transform -translate-x-1/2'>
                        print(Ryan);
                    </p>
                    <p className='fade-in text-5xl z-0 text-indigo-500 w-auto font-bold py-4 text-center
                    absolute top-1/2 left-1/2 transform -translate-y-1/2 transform -translate-x-1/2'>
                        print(Ryan);
                    </p>
                </div>
            </div>
        );
    }
}