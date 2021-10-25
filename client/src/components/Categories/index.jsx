import { categories } from "../../utils/helpers/data";
import CategoryItem from "../CategoryItem/";
import { Container } from "./style";

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
