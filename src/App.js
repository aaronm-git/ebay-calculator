import "./App.css";
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EbayOptions from './components/EbayOptions'
import ProfitBreakdown from './components/ProfitBreakdown'

function App() {
  const [sellAmount, setSellAmount] = useState(0);
  const [netAmount, setNetAmount] = useState(0);
  const [ebayFeeAmount, setEbayFeeAmount] = useState(0);
  const [payPalFeeAmount, setPayPalFeeAmount] = useState(0);
  const ebayFee = .1;
  const paypalFee = .029;
  const paypalFlatFee = .3;
  const magicNumber = 1.14811;

  const calculateSellAmount = () => {
    const desiredNetAmount = parseInt(document.getElementById('net-earnings').value) || 0;
    setNetAmount(desiredNetAmount);
    // const paypalChecked = document.getElementById('paypal-checkbox').checked;
    // const newSellAmount = paypalChecked ? (netAmount + (netAmount * totalFeePercent)) + paypalFlatFee : netEarnings * ebayFee;
    const newSellAmount = (desiredNetAmount + paypalFlatFee) * magicNumber;
    setEbayFeeAmount((newSellAmount * ebayFee).toFixed(2))
    setPayPalFeeAmount(((newSellAmount * paypalFee) + paypalFlatFee).toFixed(2))
    setSellAmount(newSellAmount.toFixed(2));
  }
  return <Container>
    <h1 className="display-3 text-center font-weight-bold">Ebay Net Profit</h1>
    <h1 className="display-3 text-center font-weight-bold mb-4">Calculator 🏷</h1>
    <Row>
      <Col md={4}>
        <EbayOptions calculateSellAmount={() => calculateSellAmount} />
      </Col>
      <Col>
        <ProfitBreakdown sellAmount={sellAmount} netAmount={netAmount} ebayFeeAmount={ebayFeeAmount} payPalFeeAmount={payPalFeeAmount} />
      </Col>
    </Row>
  </Container>;
}

export default App;
