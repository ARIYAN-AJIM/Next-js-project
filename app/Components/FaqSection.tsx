'use client'
import React from 'react'
import Image from 'next/image'
import * as Accordion from '@radix-ui/react-accordion';
import Plus from '../../public/assets/Plus.svg'


const items = [
    {
        question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet." 
    },
    {
        question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet." 
    },
    {
        question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet." 
    },
    {
        question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet." 
    },
    {
        question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet." 
    },
    {
        question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet." 
    },
]

const FaqSection = () => {
  return (
    <div className='flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row gap-x-6'>
        <div className='lg:w-1/3 lg:py-[32px] '>
            <h3 className='text-[#EB2891] text-[14px] font-medium lg:text-base  '>Frequently Asked Questions</h3>
            <h1 className="text-[#172026] font-medium text-2xl py-4 lg:text-[42px] lg:leading-[58px]">Let’s clarify some of your questions</h1>
            <p className='text-[#36485C] text-[16px]pb-[24px] font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
        </div>
        
        <div className="lg:w-2/3 pt-8 lg:pt-0">
            <Accordion.Root 
            type="single"
            defaultValue='item-1'
            collapsible
            className='flex flex-col gap-y-4'
            >
                {items.map((item,index)=>(
                    <div key={index}>
                        <Accordion.Item value={`items-${index + 1}`} className='bg-[#E3F1FF] p-[16px] rounded-[8px]'>
                            <Accordion.Header>
                                <Accordion.Trigger className='flex w-full items-center justify-between'>
                                    <p className='text-left font-medium text-[#172026] lg:text-[18px]'>{item.question}</p>
                                    <span>
                                        <Image src={Plus} alt="Plus icon" className="h-10 w-10 lg:size-6"/>
                                    </span>
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content>
                                <p className='pt-2 text-[#36485C]'>{item.answer}</p>
                            </Accordion.Content>
                        </Accordion.Item>
                    </div>
                ))}

            </Accordion.Root>
        </div>
    </div>



  )
}

export default FaqSection
