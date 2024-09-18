import Image from 'next/image'
import authorImage from '@/public/images/authors/Imagen de WhatsApp 2024-09-17 a las 20.45.03_7ae6148c.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m José.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a Web Developer based in Cancún, México. I&#39;m
          Always learning new stuff, currently seeking opportunities to grow professionally an personally. Studying a major in Software Engineering and part time web developer in freelance projects.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Hamed Bahram'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
