import React from 'react'
import emily from '../../../assets/testimonials/Emily.png'
import jesica from '../../../assets/testimonials/Jesica.png'
import kylie from '../../../assets/testimonials/Kylie.png'
import Client from '../Client/Client'

const users = [
  {
    name: 'Emiley, 28',
    place: 'Delaware, NJ',
    star: 5,
    img: emily,
    description:
      'I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts.',
  },
  {
    name: 'Kylie, 40',
    place: 'Los Angeles',
    star: 5,
    img: kylie,
    description:
      'I will be very straightforward I hatesports and working out. Positive Yoga put my physical activity to the  next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress.',
  },
  {
    name: 'Jesica, 51',
    place: 'San Francisco, CA',
    star: 5,
    img: jesica,
    description: `I have many friends who practiceyoga and I decided to try it myself. It is the best decision I have made in a long time. With Positive Yoga
    )} program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation..`,
  },
]
const Clients = () => {
  return (
    <div id='hidemobile' className='max-w-screen-xl	 mx-auto my-12'>
      <h1 className=' sm:text-left ml-3 lg:text-center lg:ml-0 font-bold text-3xl mb-5'>
        Here success stories from out clients
      </h1>
      <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-8'>
        {users.map((user) => (
          <Client user={user}></Client>
        ))}
      </div>
      <div className='flex justify-center items-center'>
        <button className='w-4/5  mt-12 lg:w-2/6 font-bold text-white bg-orange-400 lg:py-6 py-3 rounded-lg text-xl'>
          Get My plan
        </button>
      </div>
    </div>
  )
}

export default Clients
