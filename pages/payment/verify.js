import axios from 'axios';
import { useEffect, useState } from 'react';

const { useRouter } = require('next/router');

export default function PaymentVerification() {
  const router = useRouter();
  const params = router.query;
  const [loading, setLoading] = useState(false);

  //   console.log(params.txref);
  const handleVerification = async () => {
    console.log(params.reference);
    try {
      await axios
        .get(
          `http://localhost:5100/api/v1/account/payment/callback?reference=${params.reference}`,
        )
        .then((response) => {
          console.log(response.status);
          if (response.status == 200) {
            console.log('Account Funding Successful');
            router.push('/dashboard');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleVerification();
  }, []);

  return (
    <div>
      <h1>Payment Completion Page</h1>
      {/* <p>txref: {txref}</p> */}
    </div>
  );
}
