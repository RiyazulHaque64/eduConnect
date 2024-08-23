import { Category } from "@/model/category-model";

export const getCategoryList = async () => {
  const categories = await Category.find().lean();
  return categories;
};
