import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedLink } from './AnimatedLink';

export function ImageColorShadow(props){

    return(
        <AnimatedLink to={`/post/${props.id}`}>
        <div className='relative mt-8 mb-8 cursor-pointer'>
            <div  className='z-10 absolute inset-x-0 top-10 px-10'>
                <h1
                style={{viewTransitionName: 'title-' + props.id }}
                className='text-white font-bold text-xl opacity-80'
                >
                    {props.title}
                </h1>
                <p
                style={{viewTransitionName: 'desc-' + props.id }}
                className='text-white text-sm opacity-80'
                >
                    {props.description}
                </p>
            </div>
            <img
            style={{viewTransitionName: 'cover-' + props.id }}
            className='project-cover rounded-lg' 
            src={props.src} alt="Image 1"/>
        </div>
        </AnimatedLink>
    )
}