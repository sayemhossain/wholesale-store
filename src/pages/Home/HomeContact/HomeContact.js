import React from "react";
const HomeContact = () => {
  const handleContact = (e) => {
    e.preventDefualt();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const subject = e.target.subject.value;
    const text = e.target.text.value;

    const contactData = {
      name,
      email,
      phone,
      subject,
      text,
    };
    fetch(`http://localhost:5000/contact`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contactData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Your Message is send..!");
      });
    e.target.reset();
  };
  return (
    <div className="md:px-28 px-5 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl font-bold">Get In Touch</h1>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            temporibus nisi impedit deleniti eos? Molestiae repellendus natus
            voluptas veritatis blanditiis.
          </p>
          <div>
            <form action="" onSubmit={handleContact}>
              <div className="md:flex gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  class="input input-bordered w-full max-w-xs"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="flex gap-3 my-5">
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  class="input input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="h-32">
                <textarea
                  name="text"
                  class="textarea w-full h-full input-bordered"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="mt-5">
                <button type="submit" className="btn btn-neutral px-5">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <img
            className=""
            src="https://www.d360tconnects.com/assets/images/contact1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
