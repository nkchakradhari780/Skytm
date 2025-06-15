const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    recieverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    transactionType: {
        type: String,
        enum: ['Debit','Credit','Wallet']
    },
    TransactionDate: {
        type: Date,
        default: Date.now
    },
    InitialAmount: {
        type: Number,
        required: true,
    },
    TransferAmount: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('transaction', transactionSchema);