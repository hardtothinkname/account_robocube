import React, { useEffect } from 'react'
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery"; const quotations = [
    {
        "DATE": "mr",
        "QUOTATION": "Lawson",
        "STATUS": "Luke",
        "AMOUNT": 28,
    },
]
const QuotationTab = () => {
    useEffect(() => {
        if (!$.fn.DataTable.isDataTable("#mytable")) {
            $(document).ready(function () {
                $("#mytable2").DataTable({
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
            return quotations.map((item, index) => {
                return (
                    <tr key={index}>
                        <td className="text-xs font-weight-bold">{item.DATE}</td>
                        <td className="text-xs font-weight-bold">{item.QUOTATION}</td>
                        <td className="text-xs font-weight-bold">{item.STATUS}</td>
                        <td className="text-xs font-weight-bold text-right">{item.AMOUNT}</td>
                    </tr>
                );
            });
        } catch (e) {
            alert(e.message);
        }
    };
    return (
        <div class="tab-content" id="myTabContent">
            <table id="mytable2" className="align-items-center justify-content-center mb-0">
                <thead>
                    <tr>
                        <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">DATE</th>
                        <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">QUOTATION</th>
                        <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">STATUS</th>
                        <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2 text-right">AMOUNT (RM)</th>
                    </tr>
                </thead>

                <tbody>
                    {showTable()}
                </tbody>
            </table>
        </div>

    )
}

export default QuotationTab
