import React, { FC } from 'react'
import {  } from "react-icons/lu"

export const OfferView: FC = ({}) => {
  return (
    <section className='py-20' id="features">
      <div className='container'>
        <div className='mb-10 flex items-end justify-between'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='mb-4 text-3xl font-medium capitalize text-white'>Solana Token Popularity</h2>
            <p className='text-default-200 text-sm font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere perspiciatis adipisci laborum ea sit vel quod, quam quo beatae reprehenderit autem doloribus itaque error molestiae officiis incidunt</p>
          </div>
        </div>
        
        <div className='grid gap-6 lg:grid-cols-3'>
          {/* FIRST */}
          <div className='space-y-6'>
            <div className='bg-default-950/40 hover:-translate-y-2 border-primary border-s-2 rounded-xl backdrop-blur-3xl transition-all duration-500'>
              <div className='p-10'>
                <i className='text-primary h-10 w-10'></i>
                <h3 className='mb-4 mt-8 text-2xl font-medium text-white'>Best Token Builder</h3>
                <p className='text-default-100 mb-4 text-sm font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore itaque illo odio tempora doloribus.</p>
                <a href="#" className='text-primary group relative inline-flex items-center gap-2'>
                  <span className='bg-primary/80 absolute -bottom-0 h-px w-7/122 rounded transition-all duration-500 group-hover:w-full'>
                  Read More
                  <i className='h-4 w-4'></i>
                  </span>
                </a>
              </div>
            </div>


          </div>

          {/* SECOND */}
          <div className='space-y-6'>
            <div className='bg-default-950/40 hover:-translate-y-2 border-primary border-s-2 rounded-xl backdrop-blur-3xl transition-all duration-500'>
              <div className='p-10'>
                <i className='text-primary h-10 w-10'></i>
                <h3 className='mb-4 mt-8 text-2xl font-medium text-white'>Best Token Builder</h3>
                <p className='text-default-100 mb-4 text-sm font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore itaque illo odio tempora doloribus.</p>
                <a href="#" className='text-primary group relative inline-flex items-center gap-2'>
                  <span className='bg-primary/80 absolute -bottom-0 h-px w-7/122 rounded transition-all duration-500 group-hover:w-full'>
                  Read More
                  <i className='h-4 w-4'></i>
                  </span>
                </a>
              </div>
            </div>


          </div>

          {/* THIRD */}
          <div className='space-y-6'>
            <div className='bg-default-950/40 hover:-translate-y-2 border-primary border-s-2 rounded-xl backdrop-blur-3xl transition-all duration-500'>
              <div className='p-10'>
                <i className='text-primary h-10 w-10'></i>
                <h3 className='mb-4 mt-8 text-2xl font-medium text-white'>Best Token Builder</h3>
                <p className='text-default-100 mb-4 text-sm font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore itaque illo odio tempora doloribus.</p>
                <a href="#" className='text-primary group relative inline-flex items-center gap-2'>
                  <span className='bg-primary/80 absolute -bottom-0 h-px w-7/122 rounded transition-all duration-500 group-hover:w-full'>
                  Read More
                  <i className='h-4 w-4'></i>
                  </span>
                </a>
              </div>
            </div>


          </div>

        </div>
      </div>
    </section>
  )
}