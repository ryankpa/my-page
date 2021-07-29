import React from 'react';
import icon from './assets/icon.png';

const paraStyle = "";

export class About extends React.Component {
    
    render() {
        return (
            <div class='relative w-full'>
                <h1 class="m-2 text-center text-white text-5xl rounded-md w-80 bg-gradient-to-r from-yellow-400 to-indigo-700 p-2">About Me</h1>
                <section class='p-2 m-2 rounded-lg bg-gradient-to-b from-gray-200 to-transparent'>
                    <img src={icon} alt="self portrait/selfie" class='m-auto rounded-full'></img>
                    <p class='text-justify font-sans p-2 m-2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam purus, mollis sit amet nisi quis, semper accumsan orci. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit lacinia felis non feugiat. Sed gravida leo quis gravida semper. 
                        Praesent enim ipsum, pretium sollicitudin orci pellentesque, fermentum tempor orci. Donec quis accumsan felis, sit amet dictum urna. 
                        Aliquam aliquam orci non sem porttitor, vitae vehicula nunc sollicitudin. Donec non mi eu ligula molestie commodo. 
                        Cras elementum urna at dui faucibus, quis tincidunt est sollicitudin. Nulla accumsan quam porta, euismod ligula sit amet, ultricies orci. 
                        Nunc pulvinar facilisis nisl. Cras velit lacus, dignissim feugiat aliquam id, rutrum pellentesque lacus. Aenean malesuada, justo eget feugiat gravida, 
                        ligula velit pharetra neque, ac scelerisque nisl risus et ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                        Integer vitae aliquet tellus.
                    </p>
                </section>
                <h1 class="m-2 text-center text-white text-5xl rounded-md w-80 bg-gradient-to-r from-yellow-400 to-indigo-700 p-2">Section 2</h1>
                <section class='rounded-md p-2 m-2 bg-gradient-to-b from-gray-200 to-transparent'>
                    <p class='text-justify font-sans p-2 m-2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam purus, mollis sit amet nisi quis, semper accumsan orci. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit lacinia felis non feugiat. Sed gravida leo quis gravida semper. 
                        Praesent enim ipsum, pretium sollicitudin orci pellentesque, fermentum tempor orci. Donec quis accumsan felis, sit amet dictum urna. 
                        Aliquam aliquam orci non sem porttitor, vitae vehicula nunc sollicitudin. Donec non mi eu ligula molestie commodo. 
                        Cras elementum urna at dui faucibus, quis tincidunt est sollicitudin. Nulla accumsan quam porta, euismod ligula sit amet, ultricies orci. 
                        Nunc pulvinar facilisis nisl. Cras velit lacus, dignissim feugiat aliquam id, rutrum pellentesque lacus. Aenean malesuada, justo eget feugiat gravida, 
                        ligula velit pharetra neque, ac scelerisque nisl risus et ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                        Integer vitae aliquet tellus.
                        <br /> <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam purus, mollis sit amet nisi quis, semper accumsan orci. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit lacinia felis non feugiat. Sed gravida leo quis gravida semper. 
                        Praesent enim ipsum, pretium sollicitudin orci pellentesque, fermentum tempor orci. Donec quis accumsan felis, sit amet dictum urna. 
                        Aliquam aliquam orci non sem porttitor, vitae vehicula nunc sollicitudin. Donec non mi eu ligula molestie commodo. 
                        Cras elementum urna at dui faucibus, quis tincidunt est sollicitudin. Nulla accumsan quam porta, euismod ligula sit amet, ultricies orci. 
                        Nunc pulvinar facilisis nisl. Cras velit lacus, dignissim feugiat aliquam id, rutrum pellentesque lacus. Aenean malesuada, justo eget feugiat gravida, 
                        ligula velit pharetra neque, ac scelerisque nisl risus et ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                        Integer vitae aliquet tellus.
                    </p>
                </section>
            </div>
        )
    }
}