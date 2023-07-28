const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    second_img: String,
    first_img: String,
    title: String,
    price: Number
})

const AccessoriesProductModel = mongoose.model("accessorie", productSchema);
const ClothingsProductModel = mongoose.model("clothing", productSchema);
const FootwearsProductModel = mongoose.model("footwear", productSchema);
const InnerwearsProductModel = mongoose.model("innerwear", productSchema);
const KidsProductModel = mongoose.model("kid", productSchema);
const LoungewearsProductModel = mongoose.model("loungewear", productSchema);
const New_inProductModel = mongoose.model("new_in", productSchema);
const SalesProductModel = mongoose.model("sale", productSchema);

module.exports = {
    AccessoriesProductModel, ClothingsProductModel, FootwearsProductModel, InnerwearsProductModel, KidsProductModel, LoungewearsProductModel, New_inProductModel, SalesProductModel
}