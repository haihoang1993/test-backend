import { mongoose, Schema } from '../../utils/mongoose'
const TokenModel = new Schema({
    ids: {
        type: String,
        required: true,
        unique: true
    },
    priceCurent: Object,
    price1h: Object,
    price1days: Object,
    price7days: Object,
    price1moth: Object,
    priceYear: Object,
    circulatingMarketCap: Object,
    circulatingSupply: Number,
    ecoTotals: Object,
    stakingStats: Object,
    updated_at: {
        type: Number,
        default: Date.now
    },
});
TokenModel.index({ ids: 1 }, { unique: true });
export default mongoose.model('token', TokenModel)