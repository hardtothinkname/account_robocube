import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import QuotationTab from './QuotationTab'
import InvoiceTab from './InvoiceTab'
import style from '../../shared/style'

const Billing = () => {
    const [key, setKey] = useState('invoice');

    return (
        <div id="page-content-wrapper">

            <div class="h-min-100" style={style['h-min-100']}>

                <div class="container-fluid py-2">
                    <div class="row">
                        <div class="col-6 my-auto">
                            <h4 class="py-2 mb-0 font-weight-bold">Billing</h4>
                        </div>
                    </div>
                </div>

                <div class="container-fluid h-min-100">
                    <div class="row">
                        <div class="col-md-9">
                            <Tabs
                                defaultActiveKey="invoice"
                                id="uncontrolled-tab-example"
                                activeKey={key}
                                onSelect={(k) => setKey(k)}
                            >
                                <Tab eventKey="invoice" title="Invoice">
                                    < InvoiceTab/>
                                </Tab>
                                <Tab eventKey="quotation" title="Quotation">
                                    <QuotationTab />
                                </Tab>
                            </Tabs>

                        </div>
                    </div>
                </div>

            </div>


            <div class="container-fluid pt-3 border-top">
                2023 © Robocube. All right reserved. Powered by <a href="https://synorexcloud.com/" target="_blank">Synorex</a>
            </div>
        </div>
    )
}

export default Billing
