const Transaction = require('../models/Transactions');

exports.showTransaction = async (req, res) => {
    try {
        const transactions = await Transaction.find().select('-numeroCartao').sort('-createdAt').exec();
        res.json(transactions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro do servidor' });
    }
};

exports.createTransaction = async (req, res) => {
    try {
        const { valor, descricao, numeroCartao, portadorCartao, validadeCartao, cvv } = req.body;

        function esconderNumeroCartao(numeroCartao) {
            const esconderNumeros = numeroCartao.slice(0, 15).replace(/\d/g, '*');
            const lastFourDigits = numeroCartao.slice(-4);
            return `${esconderNumeros}${lastFourDigits}`;
        }
        
        const ultimos4Digitos = esconderNumeroCartao(numeroCartao);

        const transaction = new Transaction({
            valor,
            descricao,
            numeroCartao,
            ultimos4Digitos,
            portadorCartao,
            validadeCartao,
            cvv,
        });
        await transaction.save();

        res.status(201).json(transaction);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro do servidor' });
    }
};
