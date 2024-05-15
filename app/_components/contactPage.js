import React from "react";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-5xl font-bold mb-4 text-center font-serif mt-16">Contact Us</h1>
      <div className="container mx-auto py-8 flex flex-wrap justify-between">

        <div className="w-full lg:w-2/3 mb-4 lg:mb-0 pr-4">

          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2 font-serif ">SHRI VISHNU ENGINEERING COLLEGE FOR WOMEN (Autonomous)</h2>
            <p className="text-md mt-4 text-gray-700 leading-relaxed">
              APPROVED BY A.I.C.T.E & AFFILIATED TO JNTUK, KAKINADA<br />
              Counseling Code – VISW<br />
              Vishnupur, BHIMAVARAM – 534202<br />
              West Godavari District, Andhra Pradesh, India.
            </p>
          </div>

          <ul className="list-none mb-4">
            <li className="mb-2">
              <span className="font-bold inline-block">Phone:</span> 08816 – 250864
            </li>
            <li className="mb-2">
              <span className="font-bold inline-block">Fax:</span> 08816 – 250099
            </li>
            <li className="mb-2">
              <span className="font-bold inline-block">Email:</span> info@svecw.edu.in, principal@svecw.edu.in
            </li>
            <li><span className="font-semibold inline-block mb-2">Main Office:</span>                        08765 - 898765</li>
            <li><span className="font-semibold inline-block mb-2">Admissions Office:</span>                    09876 - 223456</li>
            <li><span className="font-semibold inline-block mb-2">Department of Computer Science:</span>       06789 - 386542</li>
            <li><span className="font-semibold inline-block mb-2">Department of Information Technology:</span> 08765 - 765478</li>
            <li><span className="font-semibold inline-block mb-2">Department of Electrical Engineering:</span> 08765 - 786655</li>
            <li><span className="font-semibold inline-block mb-2">Department of Mechanical Engineering:</span> 08765 - 897453</li>
            <li><span className="font-semibold inline-block">Department of Civil Engineering:</span> 08765 - 897453</li>

          </ul>
        </div>

        <div className="w-full lg:w-1/3  mt-16">
          <Image src="https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.6435-9/120235043_3157242221041648_2801305433604315275_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4QTJHqzXc2oQ7kNvgEQZagy&_nc_ht=scontent.fhyd14-2.fna&oh=00_AYB9fAYEDrPeSlW0IibRwcmLVoqjElJaE8oqHGJ3lie0zA&oe=666A5C23" width={1000} height={800} alt="svecw" />

        </div>
      </div>
    </div>
  );
};

export default ContactPage;