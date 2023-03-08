const { Schema, model } = require('mongoose')

const TransactionSchema = new Schema({
    valor: { type: Number, required: true },
    descricao: { type: String, required: true },
    numeroCartao: { type: String, required: true },
    ultimos4Digitos: { type: String, required: true },
    portadorCartao: { type: String, required: true },
    validadeCartao: { type: String, required: true },
    cvv: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = model('Transaction', TransactionSchema)