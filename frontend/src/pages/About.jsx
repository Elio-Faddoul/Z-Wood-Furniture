import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_us} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vehicula, ligula at facilisis cursus, erat elit tincidunt nulla, ut
            imperdiet purus erat eu velit. Donec in tortor id orci hendrerit
            fermentum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vehicula, ligula at facilisis cursus, erat elit tincidunt nulla, ut
            imperdiet purus erat eu velit. Donec in tortor id orci hendrerit
            fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Integer dapibus risus a lacus
            viverra, nec malesuada orci scelerisque.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Z-Wood Furniture, our mission is to continue a legacy of
            excellence in woodworking by crafting beautiful, durable, and
            sustainable wood furniture. We are dedicated to combining skilled
            craftsmanship with innovative design, ensuring that every piece
            reflects both quality and functionality. With a passion for natural
            materials and attention to detail, we strive to create furniture
            that transforms spaces, bringing warmth and elegance to homes for
            generations to come.
          </p>
        </div>
      </div>

      <div className="text- xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We meticulously handpick and craft each piece of wood furniture,
            ensuring it meets our strict quality standards for durability,
            aesthetics, and sustainability.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            Wood Furniture shopping has never been easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
