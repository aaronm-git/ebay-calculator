import "./App.css";
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EbayOptions from './components/EbayOptions'
import ProfitBreakdown from './components/ProfitBreakdown'
import currency from "currency.js"

function App() {
  const [sellAmount, setSellAmount] = useState(0);
  const [netAmount, setNetAmount] = useState(0);
  const [ebayFeeAmount, setEbayFeeAmount] = useState(0);
  const [payPalFeeAmount, setPayPalFeeAmount] = useState(0);
  const ebayFeeRate = .1;
  const paypalFeeRate = .029;
  const paypalFlatFeeRate = .3;
  const constant = 1.14811;

  const calculator = () => {
    const desiredAmount = (document.getElementById("desiredNetAmount").value || 0)
    setNetAmount(currency(desiredAmount).value);
    const newSellAmount = desiredAmount * constant;
    document.getElementById("itemSoldAmount").value = currency(newSellAmount).value;
    setSellAmount(currency(newSellAmount).value)

    // const itemCostAmount = document.getElementById("#itemCost").value.length ? document.getElementById("#itemCost").value : 0
    // const itemSoldAmount = document.getElementById("#itemSoldAmount").value.length ? document.getElementById("#itemSoldAmount").value : 0
    // const paypalType = document.getElementById("#paypal-checkbox").checked ? "domestic" : false

    // const paypalChecked = document.getElementById('paypal-checkbox').checked;
    // const newSellAmount = paypalChecked ? (netAmount + (netAmount * totalFeePercent)) + paypalFlatFee : netEarnings * ebayFee;
    // const paypalFee
    // const newSellAmount = desiredNetAmount.add(paypalFlatFee).multiply(constant)
    // setEbayFeeAmount(newSellAmount.multiply(ebayFee))
    // setPayPalFeeAmount(((newSellAmount * paypalFee) + paypalFlatFee).toFixed(2))
    // setSellAmount(newSellAmount.toFixed(2));
  }
  return <Container>
    <h1 className="text-center font-weight-bold mb-4">Ebay Net Profit Calculator 🏷</h1>
    <Row>
      <Col md={4}>
        <EbayOptions calculator={() => calculator} />
      </Col>
      <Col>
        <ProfitBreakdown sellAmount={sellAmount} netAmount={netAmount} ebayFeeAmount={ebayFeeAmount} payPalFeeAmount={payPalFeeAmount} />
      </Col>
    </Row>
  </Container>;
}

export default App;
