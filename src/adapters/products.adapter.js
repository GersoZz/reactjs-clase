export const productAdapter = (product) => {
  const { id, images, title, description, price } = product

  return {
    id,
    imageUrl: images[0],
    title,
    text: description,
    price,
  }
}
