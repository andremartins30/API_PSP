const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    valor: { type: Number, required: true },
    descricao: { type: String, required: true },
    formaPagamento: { type: String, required: true },
    numeroCartao: { type: String, required: true },
    ultimos4Digitos: { type: String, required: true },
    portadorCartao: { type: String, required: true },
    validadeCartao: { type: String, required: true },
    cvv: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;