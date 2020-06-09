import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';
import Title from './Title'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free cocktails",
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio?'
            },
            {
                icon:<FaHiking/>,
                title:"Free cocktails",
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio?'
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free cocktails",
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio?'
            },
            {
                icon:<FaBeer/>,
                title:"Free cocktails",
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio?'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return  (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        )
    }
}
