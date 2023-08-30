import axios from 'axios';
import { useEffect, useState } from 'react';

const { useRouter } = require('next/router');

export default function PaymentVerification() {
  const router = useRouter();
  const params = router.query;
  console.log(params.trxref);
  const [loading, setLoading] = useState(false);

  //   console.log(params.txref);
  const handleVerification = async () => {
    console.log(params.reference);
    try {
      await axios
        .get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/account/payment/callback?reference=${params.reference}`,
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
  }, [params]);

  return (
    <div>
      <h1>Payment Completion Page</h1>
      {/* <p>txref: {txref}</p> */}
    </div>
  );
}
