import React from 'react';
import icon from './assets/icon.png';

export class About extends React.Component {
    
    render() {
        return (
            <div class='relative w-full'>
                <h1 class="m-2 text-center text-transparent bg-clip-text bg-yoru text-5xl font-bold border-2 rounded-md w-70 p-2">About Me</h1>
                <section class='p-2 m-2 rounded-lg bg-gradient-to-b from-gray-200 to-transparent'>
                    <div class='flex flex-row'>
                        <img src={icon} alt="self portrait/selfie" class='rounded-full w-32 h-32'></img>
                        <table>
                            <tr>
                                <th>NAME: </th>
                                <td>Ryan Kevin Atienza</td>
                            </tr>
                            <tr>
                                <th>LEVEL: </th>
                                <td>23</td>
                            </tr>
                            <tr>
                                <th>CLASS: </th>
                                <td>Novice Software/Web Developer</td>
                            </tr>
                        </table>
                    </div>
                    <p class='text-justify font-sans p-2 m-2'>
                    &emsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam purus, mollis sit amet nisi quis, semper accumsan orci. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit lacinia felis non feugiat. Sed gravida leo quis gravida semper. 
                        Praesent enim ipsum, pretium sollicitudin orci pellentesque, fermentum tempor orci. Donec quis accumsan felis, sit amet dictum urna. 
                        Aliquam aliquam orci non sem porttitor, vitae vehicula nunc sollicitudin. Donec non mi eu ligula molestie commodo. 
                        Cras elementum urna at dui faucibus, quis tincidunt est sollicitudin. Nulla accumsan quam porta, euismod ligula sit amet, ultricies orci. 
                        Nunc pulvinar facilisis nisl. Cras velit lacus, dignissim feugiat aliquam id, rutrum pellentesque lacus. Aenean malesuada, justo eget feugiat gravida, 
                        ligula velit pharetra neque, ac scelerisque nisl risus et ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                        Integer vitae aliquet tellus.
                    </p>
                </section>
                <h1 class="m-2 text-center text-transparent bg-clip-text bg-yoru text-5xl font-bold border-2 rounded-md w-70 p-2">Section 2</h1>
                <section class='rounded-md p-2 m-2 bg-gradient-to-b from-gray-200 to-transparent'>
                    <p class='text-justify font-sans p-2 m-2'>
                    &emsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam purus, mollis sit amet nisi quis, semper accumsan orci. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit lacinia felis non feugiat. Sed gravida leo quis gravida semper. 
                        Praesent enim ipsum, pretium sollicitudin orci pellentesque, fermentum tempor orci. Donec quis accumsan felis, sit amet dictum urna. 
                        Aliquam aliquam orci non sem porttitor, vitae vehicula nunc sollicitudin. Donec non mi eu ligula molestie commodo. 
                        Cras elementum urna at dui faucibus, quis tincidunt est sollicitudin. Nulla accumsan quam porta, euismod ligula sit amet, ultricies orci. 
                        Nunc pulvinar facilisis nisl. Cras velit lacus, dignissim feugiat aliquam id, rutrum pellentesque lacus. Aenean malesuada, justo eget feugiat gravida, 
                        ligula velit pharetra neque, ac scelerisque nisl risus et ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                        Integer vitae aliquet tellus.
                        <br /> <br />
                        &emsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam purus, mollis sit amet nisi quis, semper accumsan orci. 
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