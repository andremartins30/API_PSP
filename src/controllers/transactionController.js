const Transaction = require('../models/Transactions');
const Payable = require('../models/Payable');

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
        const { valor, descricao, formaPagamento, numeroCartao, portadorCartao, validadeCartao, cvv } = req.body;

        function esconderNumeroCartao(numeroCartao) {
            const esconderNumeros = numeroCartao.slice(0, 15).replace(/\d/g, '*');
            const lastFourDigits = numeroCartao.slice(-4);
            return `${esconderNumeros}${lastFourDigits}`;
        }
        
        const ultimos4Digitos = esconderNumeroCartao(numeroCartao);


        if(formaPagamento === 'credit_card'){
            taxa = valor * 0.05;
            valorProcessado = valor + taxa;
        } else if (formaPagamento === 'debit_card') {
            valorProcessado = valor;
        }


        const transaction = new Transaction({
            valor,
            descricao,
            formaPagamento,
            numeroCartao,
            ultimos4Digitos,
            portadorCartao,
            validadeCartao,
            cvv,
        });

        await transaction.save();

        const payable = new Payable({
            transactionId: transaction._id,
            clientId: transaction.portadorCartao,
            status: 'pendente',
            dataPagamento: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // D+30
            quantia: valorProcessado,
            formaPagamento,
            taxa: valorProcessado - valor,
        });
        console.log(payable)
        await payable.save();

        res.status(201).json(transaction);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro do servidor' });
    }
};