import React, { Component } from 'react'
import CardUI from './CardsUI'

import img1 from '../../assets/images/laravel.png'
import img2 from '../../assets/images/linux.jpg'
import img3 from '../../assets/images/Nginx.png'

class Cards extends Component
{
    render()
    {
        return (
            <div>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                            <CardUI imgsrc={img1} title="Laravel" content="Laravel is an open-source PHP framework, which is robust and easy to understand. It follows a model-view-controller design pattern. Laravel reuses the existing components of different frameworks which helps in creating a web application. The web application thus designed is more structured and pragmatic." page="/laravel" />
                        </div>
                        <div className="col-md-4">
                            <CardUI imgsrc={img2} title="Linux" content="Linux is a Unix-like, open source and community-developed operating system for computers, servers, mainframes, mobile devices and embedded devices. It is supported on almost every major computer platform including x86, ARM and SPARC, making it one of the most widely supported operating systems." page="/linux" />
                        </div>
                        <div className="col-md-4">
                            <CardUI imgsrc={img3} title="Nginx" content="NGINX is open source software for web serving, reverse proxying, caching, load balancing, media streaming, and more. ... In addition to its HTTP server capabilities, NGINX can also function as a proxy server for email  and a reverse proxy and load balancer for HTTP, TCP, and UDP servers." page="nginx" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;