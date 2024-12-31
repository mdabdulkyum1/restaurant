import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";
import FeaturedSlider from "./CategorySlider";



const Category = () => {
    return (
        <div className="my-10">  
            <SectionTitle title="ORDER ONLINE" subTitle="From 11:00am to 10:00pm"></SectionTitle>

            <div className="mt-10 px-2">
                <FeaturedSlider></FeaturedSlider>
            </div>
        </div>
    );
};

export default Category;

