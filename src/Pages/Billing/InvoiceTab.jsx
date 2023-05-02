import React, { useEffect } from 'react'
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";
const invoices = [
    {
        "DATE": "mr",
        "QUOTATION": "Lawson",
        "STATUS": "Luke",
        "AMOUNT": 28,
    },
]

const InvoiceTab = () => {
    useEffect(() => {
        if (!$.fn.DataTable.isDataTable("#mytable")) {
            $(document).ready(function () {
                $("#mytable").DataTable({
                    processing: true,
                    select: {
                        style: "single",
                    }, searching: false, paging: false, info: false
                });
            });
        } else {
            console.log("already datatable")
        }
        // }, 1000);
    })

    const showTable = () => {
        try {
            return invoices.map((item, index) => {
                return (
                    <tr key={index}>
                        {/* <td className="text-xs font-weight-bold">{index + 1}</td> */}
                        <td className="text-xs font-weight-bold">{item.DATE}</td>
                        <td className="text-xs font-weight-bold">{item.QUOTATION}</td>
                        <td className="text-xs font-weight-bold">{item.STATUS}</td>
                        <td className="text-xs font-weight-bold  text-right">{item.AMOUNT}</td>
                        {/* <td></td> */}
                    </tr>
                );
            });
        } catch (e) {
            alert(e.message);
        }
    };
    return (
        // <div class="tab-content" id="myTabContent">

        //     <div class="tab-pane fade active show" id="home" role="tabpanel" aria-labelledby="home-tab">
        //         <table class="table table-hover" id="tbl-inv">
        //             <thead>
        //                 <tr>
        //                     <th>DATE</th>
        //                     <th>INVOICE</th>
        //                     <th>STATUS</th>
        //                     <th class="text-right">AMOUNT (RM)</th>
        //                 </tr>
        //             </thead>
        //             <tbody><tr> <td colspan="4" class="text-center">No result found</td> </tr></tbody>
        //         </table>
        //     </div>
        // </div>

        <div class="tab-content" id="myTabContent">
            <table id="mytable" className="align-items-center justify-content-center mb-0">
                <thead>
                    <tr>
                        <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">DATE</th>
                        <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">QUOTATION</th>
                        <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">STATUS</th>
                        <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2 text-right">AMOUNT (RM)</th>
                        {/* <th></th> */}
                    </tr>
                </thead>

                <tbody>
                    {showTable()}
                </tbody>
            </table>
        </div>
    )
}

export default InvoiceTab
