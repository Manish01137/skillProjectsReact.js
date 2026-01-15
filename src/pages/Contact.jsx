const Contact = () => {
    return (
      <section className="page">
        <h1>Contact Us</h1>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button>Submit</button>
        </form>
      </section>
    )
  }
  
  export default Contact
  