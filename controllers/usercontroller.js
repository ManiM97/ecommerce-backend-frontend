export const products = async (req, res,next) => {
  await res.status(200).json({ message: "Get products>" });
};
 

export const getsingleproduct = async (req, res,next) => {
    await res.status(200).json({ message: "Get single products>" });
  };
 