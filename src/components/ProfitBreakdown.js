import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';

const ProfitBreakdown = (props) => {
    return (
        <Card>
            <Card.Body className="text-center">
                <Card.Title>Profit Breakdown</Card.Title>
                <h1 className={`display-2 font-weight-bold ${props.netAmount ? 'text-success' : ''}`}>Net: ${props.netAmount}</h1>
                <Row className="text-muted">
                    <Col>Ebay Fee Amount: ${props.ebayFeeAmount}</Col>
                    <Col>Paypal Fee Amount: ${props.payPalFeeAmount}</Col>
                </Row>
                <h2 className='h3 mt-3'>Sell: ${props.sellAmount}</h2>
            </Card.Body>
        </Card>
    )
}

export default ProfitBreakdown
