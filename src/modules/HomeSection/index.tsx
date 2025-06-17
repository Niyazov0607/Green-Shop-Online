import Cards from "./Cards/Cards";
import Categories from "./Categories/Categories";

const HomeSection = () => {
    return (
        <div className="containers">
            <div className="flex mt-[26px] gap-[30px]">
                <Categories />
                <Cards />
            </div>
        </div>
    );
};

export default HomeSection;
