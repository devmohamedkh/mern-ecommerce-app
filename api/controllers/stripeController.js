const stripe = require("stripe")(
  "sk_test_51JXYIiLUkaywcbNzmYFRFv00kqiCt8e1Y18wsijxn1mIgkc2ZPW11KxRd1i00v5B4cbfFBvaLgjEsT8on2daVzhG00zIvUj5z7"
);

exports.createCharge = async (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
};
