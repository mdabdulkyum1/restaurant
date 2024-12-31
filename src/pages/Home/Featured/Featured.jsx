import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";

import featuredImg from "../../../assets//home/featured.jpg";

const Featured = () => {
  return (
    <>
      <div className="hero min-h-screen bg-[url('assets/home/featured.jpg')] bg-fixed bg-cover bg-no-repeat">
        <div className="hero-overlay bg-opacity-80"></div>
        
        <div className=" text-neutral-content text-center">
        <SectionTitle
          title="Featured Item"
          subTitle="check it out"
        ></SectionTitle>
        <div className="md:flex justify-center items-center pb-20 pt-12 px-3 lg:px-36 space-y-4">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10">
            <p>Aug 20, 2029</p>
            <p className="uppercase">Where can i get some?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              expedita hic dolorem, iusto vel suscipit nam excepturi debitis
              magnam nostrum! Ut eum dignissimos culpa doloremque eligendi
              consectetur blanditiis laboriosam fugiat ea quia similique quam
              nisi reprehenderit numquam magnam nemo vitae cupiditate, atque
              maiores dicta minus pariatur. Perspiciatis nobis vero quas?
            </p>
            <button className="btn btn-outline text-white border-0 border-b-4 mt-4">
              Order Now
            </button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
