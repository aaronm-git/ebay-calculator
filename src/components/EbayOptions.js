import React from 'react'
import { Card, Form, InputGroup } from 'react-bootstrap';

const EbayOptions = (props) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title className="text-center">Ebay Options</Card.Title>
                <Form>
                    <Form.Group controlId="net-earnings">
                        <Form.Label>Desired Net Earnings</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="net-earnings-input">$</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="number" placeholder="400" aria-describedby="net-earnings-input" onChange={props.calculateSellAmount()} />
                        </InputGroup>
                        <Form.Text className="text-muted">
                            Net earnings of item sold, after all fees considered.
                    </Form.Text>
                    </Form.Group>
                    <Form.Check
                        type={'checkbox'}
                        id={'paypal-checkbox'}
                        label={'Paypal'}
                        defaultChecked
                        onChange={props.calculateSellAmount()}
                    />
                    <Form.Text className="text-muted">
                        PayPal fees is 2.9% + $0.30 of the total selling price including the sales tax. This fee is calculated before eBay fees.
                    </Form.Text>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default EbayOptions
