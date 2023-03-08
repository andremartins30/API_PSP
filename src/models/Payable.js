const mongoose = require('mongoose');

const payableSchema = new mongoose.Schema({
    transactionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Transaction',},
    clientId: { type: mongoose.Schema.Types.String, ref: 'nomePortador' },
    status: {type: String, enum: ['pendente', 'pago'], required: true,},
    dataPagamento: {type: Date, required: true,},
    quantia: {type: Number, required: true,},
    formaPagamento: { type: String, enum: ['credit_card', 'debit_card'],},
    taxa: {type: Number, required: true,},
});

const Payable = mongoose.model('Payable', payableSchema);

module.exports = Payable;