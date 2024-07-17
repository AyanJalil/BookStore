import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function About() {
  return (
    <>
    <Navbar/>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 pt-28">
      <section className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">About Us</h1>
        <p>Welcome to [BookStore], your one-stop destination for a diverse range of books spanning various genres and categories. Our mission is to cultivate a community of readers and provide them with an unparalleled literary experience.</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p>At [BookStore], our mission is to inspire and nurture a love for reading by offering an extensive collection of books. We believe that books have the power to transform lives, ignite imagination, and broaden horizons. Our goal is to make books accessible to everyone and foster a community where readers can connect and share their passion for literature.</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our History</h2>
        <p>Founded in [xxx], [BookStore xxx] began as a small independent bookstore in [City, Country]. Over the years, we have grown into a beloved destination for book lovers, known for our curated selection of books, knowledgeable staff, and commitment to promoting a love for reading. Our journey started with a simple idea – to create a space where readers of all ages could discover and enjoy books.</p>
      </section>
      
    </div>
    <Footer/>
    </>
  )
}

export default About
