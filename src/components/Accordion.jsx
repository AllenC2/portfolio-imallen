
import React, { useState } from "react";
import { InstagramIcon } from '../assets/icons/InstagramIcon'
import { MetaIcon } from '../assets/icons/MetaIcon'
import { AdwordsIcon } from '../assets/icons/AdwordsIcon'
import { IllustratorIcon } from '../assets/icons/IllustratorIcon'
import { FullPhpIcon } from '../assets/icons/FullPhpIcon'
import { ArrowDownIcon } from '../assets/icons/ArrowDownIcon'
import { FigmaIcon } from '../assets/icons/FigmaIcon'
import { ReactIcon } from '../assets/icons/ReactIcon'
import { MySqlIcon } from '../assets/icons/MySqlIcon'
import { WordpressIcon } from "../assets/icons/WordpressIcon";

export function Accordion ( props ){

    const iconos = {
      meta: MetaIcon,
      insta: InstagramIcon,
      adwords: AdwordsIcon,
      illustrator: IllustratorIcon,
      php: FullPhpIcon,
      figma: FigmaIcon,
      react: ReactIcon,
      sql: MySqlIcon,
      wp: WordpressIcon
    };

    const IconC1 = iconos[props.icon1] || null;
    const IconC2 = iconos[props.icon2] || null;
    const IconC3 = iconos[props.icon3] || null;
  
  
    return (
      <div className="my-4 rounded-lg overflow-hidden">
        <div
          className="p-4 cursor-pointer dark:bg-neutral-900  bg-[#1F232B] text-[#fff] hover:bg-[#292D35] "
          onClick={props.onClick}
        >
  
          <div className='grid grid-cols-12'>
            <div className=' col-span-10'>
              <div className='flex space-x-2'>
                {IconC1 && <IconC1 height="15" color="#fff" />}
                {IconC2 && <IconC2 height="15" color="#fff" />}
                {IconC3 && <IconC3 height="15" color="#fff" />}
              </div>
              <h2 className="text-lg font-bold">{props.title}</h2>
              <p className=' font-light'>{props.lugar}</p>
              <p className='text-sm font-light'>{props.periodo}</p>
            </div>
            <div className='col-span-2'>
              <div className={`flex justify-end h-full items-center`}>
                <ArrowDownIcon className={`origin-center transform duration-500 ${props.isOpen ? "rotate-180":"rotate-0"}`} height="20" color="#fff" />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`transition-[max-height,opacity] duration-500 ease-in-out ${props.isOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="p-4 dark:bg-black">
            {props.children}
          </div>
        </div>
      </div>
    );
};