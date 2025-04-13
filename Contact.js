function Contact() {
  const handleContactClick = () => {
    alert("Contact form submitted! (Placeholder)");
  };

  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="w-full mb-4 p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-2 border rounded"
          />
          <textarea
            placeholder="Message"
            className="w-full mb-4 p-2 border rounded"
            rows="4"
          ></textarea>
          <button
            onClick={handleContactClick}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;