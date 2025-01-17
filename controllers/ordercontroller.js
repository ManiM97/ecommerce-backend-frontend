export const createorder = async (req,res,next) => {
    await res.status(200).json({message: "order placed"})
}