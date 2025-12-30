 const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },

		phone: {
			type: Number,
		},

		postCode: {
			type: String,
		},

		address: {
			type: String,
		},

		avatar: {
			type: String,
		},

		bookings: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Profile",
			},
		],
		role: {
			type: String,
			enum: ["customer", "cleaner", "admin"],
			default: "customer",
		},
	},
	{ 
		timestamps: true 
	}
);

const customerModel = mongoose.model("Customer", customerSchema);
module.exports = customerModel;

