import React from "react";
const HomeContact = () => {
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
            <form action="">
              <div className="md:flex gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  class="input input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="Your Name"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="flex gap-3 my-5">
                <input
                  type="text"
                  placeholder="Your Phone"
                  class="input input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="h-32">
                <textarea
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
