import React from 'react'
import style from '../../shared/style'

const AutoPayment = () => {
    return (
        <div id="page-content-wrapper">

            <div class="h-min-100" style={style['h-min-100']}>

                <div class="container-fluid py-2">
                    <div class="row">
                        <div class="col-6 my-auto">
                            <h4 class="py-2 mb-0 font-weight-bold">Auto Payment</h4>
                        </div>
                    </div>
                </div>

                <div class="container-fluid h-min-100">
                    <div class="row">
                        <div class="col-md-9">


                            <div class="alert alert-info">
                                <ul>
                                    <li>Auto Payment provides the convenience to the user to auto pay the monthly generated bill items.</li>
                                    <li>Recurring payment method supports Card Payment only. Any debit or credit card under Visa and Master network is acceptable.</li>
                                    <li>To ensure payment information returned from service provider (Razer), please always toggle on&nbsp;"Save my card details for next purchase" while entering card information.</li>
                                    <li>Charged amount of 1.00 will only appear temporarily on card statement.</li>
                                    <li>The payment information maintained here is only visible to user itself, not viewable by other user such as Owner or Finance Personnels.</li>
                                    <li>To utilize, please assign payment method in service pages (Cloud Accounting / Cloud Payroll).</li>
                                    <li>An email will always be sent to&nbsp;"Billing Email Address"&nbsp;from service provider after payment is completed successfully.</li>
                                    <li>Payment is scheduled on 22:00 GMT+8 daily. Outstanding recurring bill item (those visible in "Payment" page) which its "Auto Payment Date" &lt;= Today will be paid.</li>
                                </ul>
                            </div>

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

export default AutoPayment
