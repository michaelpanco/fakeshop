const PostPreview = {
  fromDto: (dto) => ({
    id: dto?.id ?? "",
    title: dto?.title ?? "",
    image: dto?.image ?? "",
    price: dto?.price ?? "",
    description: dto?.description ?? "",
    category: dto?.category ?? "",
    ratingAvg: dto?.rating?.rate ?? "",
    ratingTotal: dto?.rating?.count ?? "",
  }),
};

export default PostPreview;
