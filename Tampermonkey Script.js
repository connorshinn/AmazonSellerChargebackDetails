// ==UserScript==
// @name         Amazon US Seller Central – View Chargeback Reasons
// @include        https://sellercentra*.amazon.com/gp/chargebacks*
// @icon64			https://www.google.com/s2/favicons?sz=256&domain=sellercentral.amazon.com
// @require       https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @require       https://gist.github.com/raw/2625891/waitForKeyElements.js
//@grant			GM.xmlHttpRequest
// ==/UserScript==
waitForKeyElements(
    "#chargebacksTable", click
);

function click() {
    var finalURL = "https://sellercentral.amazon.com/chargebacks/api/v1/chargebacks?filterType=All&pageSize=50&startIndex=0&sortType=FilingDate&sortDirection=Descending"

    fetch(finalURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonResponse) {
            function createTable(data) {
                var table = $("<table class='styled-table'>");
                var thead = $("<thead>").appendTo(table);
                var tbody = $("<tbody>").appendTo(table);
                // Create table header row
                var headerRow = $("<tr>").appendTo(thead);
                $("<th>").text("Status").appendTo(headerRow);
                $("<th>").text("Order Date").appendTo(headerRow);
                $("<th>").text("Order ID").appendTo(headerRow);
                $("<th>").text("Total Amount").appendTo(headerRow);
                $("<th>").text("Chargeback Reason").appendTo(headerRow);

                // Loop through the JSON data
                var chargebackCount = jsonResponse.chargebacks.length
                console.log(chargebackCount)
                $.each(jsonResponse.chargebacks, function(key, value) {


                    var row = $("<tr>").appendTo(tbody);
                    var chargebackStatus = value.status
                    var chargebackClass = ''
                    if (chargebackStatus == 'Resolved') {
                        chargebackClass = 'resolved'
                    } else if (chargebackStatus == 'Seller Refunded') {
                        chargebackClass = 'seller'
                    } else if (chargebackStatus == 'Pending') {
                        chargebackClass = 'pending'
                    }
                    $("<td>").html('<div class="pill ' + chargebackClass + '">' + value.status + '</div>').appendTo(row);
                    $("<td>").text(value.relatedOrders[0].orderDate.formattedDate).appendTo(row);

                    $("<td>").html('<a href="https://sellercentral.amazon.com/orders-v3/order/' + value.relatedOrders[0].orderId + '" target="_blank">' + value.relatedOrders[0].orderId + '</a>').appendTo(row);
                    //$("<td>").text( value.relatedOrders[0].orderAmount.amount).appendTo(row);
                    $("<td>").text(Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(value.relatedOrders[0].orderAmount.amount)).appendTo(row);
                    $("<td>").text(value.reasonCode).appendTo(row);
                });
                var row = $('<tr>').appendTo(tbody);

                return table;
            }
            $(document).ready(function() {
                var table = createTable(jsonResponse);
                var tableContainer = document.createElement('div');
                tableContainer.setAttribute('id', 'tableContainer');
                var chargebackCount = jsonResponse.chargebacks.length
                $("#explanatory-msg").append(tableContainer);
                $("#tableContainer").append('<div id="linkCount"><span style="font-size:1.3em">' + chargebackCount + '</span> chargebacks</div>')
                $("#tableContainer").append(table);
                $("#tableContainer").append('<div id="chargebackLink"><a href="https://midigator.com/chargeback-reason-codes/" target="_blank">Click to view chargeback code details</a></div>')
                $("table.styled-table").css({
                    "border-collapse": "collapse",
                    "margin": "0",
                    "font-size": "1em",
                    "font-family": "Amazon Ember, sans-serif",
                    "min-width": "600px",
                    "box-shadow": "0 0 20px rgba(0, 0, 0, 0.15)"
                });
                $("table.styled-table thead tr").css({
                    "background-color": "#595959",
                    "color": "#ffffff",
                    "text-align": "left"
                });
                $("table.styled-table thead tr:first-of-type td").css({
                    "text-align": "center"
                });

                $("table.styled-table th,table.styled-table td ").css({
                    "padding": "6px 6px"
                });
                $("table.styled-table tbody tr ").css({
                    "border-bottom": "thin solid #dddddd",
                    "background-color": "#ffffff"
                });
                $("table.styled-table tbody tr:hover td ").css({
                    "background-color": "#f3f3f3"
                });
                $("table.styled-table tbody tr:last-of-type,table.styled-table tbody tr:nth-child(10n) ").css({
                    "border-bottom": "2px solid #595959"
                });
                $("div.pill ").css({
                    "font-weight": "bold",
                    "height": "20px",
                    "width": "100%",
                    "text-align": "center",
                    "font-size": "0.8em",
                    "font-family": "Amazon Ember, sans-serif",
                    "border": "none",
                    "color": "white",
                    "border-radius": "50px"
                });
                $("div.resolved ").css({
                    "background-color": "#40b488"
                })
                $("div.seller ").css({
                    "background-color": "#f35743"
                })
                $("div.pending ").css({
                    "background-color": "#fb991c"
                })
                $("table.styled-table tbody tr:last-of-type td ").css({
                    "text-align": "center"
                });
                $("#tableContainer").css({
                    "position": "fixed",
                    "top": "45%",
                    "left": "50%",
                    "transform": "translate(-50%, -50%)",
                    "display": "none",
                    "z-index": "9999"
                });
                $("#chargebackLink").css({
                    "text-align": "center"
                });

                $('table.styled-table').each(function() {

                    var $table = $(this);
                    var itemsPerPage = 10;
                    var currentPage = 0;
                    var pages = Math.ceil($table.find("tr:not(:has(th))").length / itemsPerPage);
                    $table.bind('repaginate', function() {
                        $("span.pg-goto").css({
                            "color": "#000000",
                            "font-size": "12px",
                            "cursor": "pointer",
                            "background": "#cfcfcf",
                            "padding": "2px 4px 2px 4px"
                        });
                        $("span.pg-selected").css({
                            "color": "#fff",
                            "font-size": "12px",
                            "background": "#595959",
                            "padding": "2px 4px 2px 4px"
                        });
                        $("span.pg-normal").css({
                            "color": "#000000",
                            "font-size": "12px",
                            "cursor": "pointer",
                            "background": "#cfcfcf",
                            "padding": "2px 4px 2px 4px"
                        });
                        $(" .pager .pg-goto").css({
                            "background": "#595959",
                            "color": "#fff",
                            "margin": "0 2px",
                            "border-radius": "3px",
                            "padding": "3px"
                        });
                        if (pages > 1) {
                            var pager;
                            if ($table.next().hasClass("pager"))
                                pager = $table.next().empty();
                            else
                                pager = $('<div class="pager" style="padding-top: 5px; direction:ltr; " align="center"></div>');
                            $('<span class="pg-goto"></span>').text(' « First ').bind('click', function() {
                                currentPage = 0;
                                $table.trigger('repaginate');
                            }).appendTo(pager);

                            $('<span class="pg-goto"> « Prev </span>').bind('click', function() {
                                if (currentPage > 0)
                                    currentPage--;
                                $table.trigger('repaginate');
                            }).appendTo(pager);

                            var startPager = currentPage > 2 ? currentPage - 2 : 0;
                            var endPager = startPager > 0 ? currentPage + 3 : 5;
                            if (endPager > pages) {
                                endPager = pages;
                                startPager = pages - 5;
                                if (startPager < 0)
                                    startPager = 0;
                            }

                            for (var page = startPager; page < endPager; page++) {
                                $('<span id="pg' + page + '" class="' + (page == currentPage ? 'pg-selected' : 'pg-normal') + '"></span>').text(page + 1).bind('click', {
                                    newPage: page
                                }, function(event) {
                                    currentPage = event.data['newPage'];
                                    $table.trigger('repaginate');
                                }).appendTo(pager);
                            }

                            $('<span class="pg-goto"> Next » </span>').bind('click', function() {
                                if (currentPage < pages - 1)
                                    currentPage++;
                                $table.trigger('repaginate');
                            }).appendTo(pager);
                            $('<span class="pg-goto">  Last » </span>').bind('click', function() {
                                currentPage = pages - 1;
                                $table.trigger('repaginate');
                            }).appendTo(pager);

                            if (!$table.next().hasClass("pager"))
                                pager.insertAfter($table);
                            //pager.insertBefore($table);
                            $("span.pg-goto").css({
                                "color": "#000000",
                                "font-size": "12px",
                                "cursor": "pointer",
                                "background": "#cfcfcf",
                                "padding": "2px 4px 2px 4px"
                            });
                            $("span.pg-selected").css({
                                "color": "#fff",
                                "font-size": "12px",
                                "background": "#595959",
                                "padding": "2px 4px 2px 4px"
                            });
                            $("span.pg-normal").css({
                                "color": "#000000",
                                "font-size": "12px",
                                "cursor": "pointer",
                                "background": "#cfcfcf",
                                "padding": "2px 4px 2px 4px"
                            });
                            $(" .pager .pg-goto").css({
                                "background": "#595959",
                                "color": "#fff",
                                "margin": "0 2px",
                                "border-radius": "3px",
                                "padding": "3px"
                            });
                        } // end $table.bind('repaginate', function () { ...

                        $table.find(
                            'tbody tr:not(:has(th))').hide().slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).show();
                    });

                    $table.trigger('repaginate');
                });

                $("span.pg-goto").css({
                    "color": "#000000",
                    "font-size": "12px",
                    "cursor": "pointer",
                    "background": "#cfcfcf",
                    "padding": "2px 4px 2px 4px"
                });
                $("span.pg-selected").css({
                    "color": "#fff",
                    "font-size": "12px",
                    "background": "#595959",
                    "padding": "2px 4px 2px 4px"
                });
                $("span.pg-normal").css({
                    "color": "#000000",
                    "font-size": "12px",
                    "cursor": "pointer",
                    "background": "#cfcfcf",
                    "padding": "2px 4px 2px 4px"
                });
                $(" .pager .pg-goto").css({
                    "background": "#595959",
                    "color": "#fff",
                    "margin": "0 2px",
                    "border-radius": "3px",
                    "padding": "3px"
                });



                var zNode = document.createElement('div');

                zNode.innerHTML = '<button id="myButton" type="button" style="cursor: pointer;font-family: Amazon Ember, sans-serif; padding: 5px 5px; background-color: #008296; border: none; color: white; font-weight: bold; font-size: 12px; border-radius: 5px">View Chargeback Details</button>'

                zNode.setAttribute('id', 'myContainer');

                $("#explanatory-msg").append(zNode);
                document.getElementById("myButton").addEventListener(
                    "click", ButtonClickAction, false
                );

            });

        });

};

function ButtonClickAction(zEvent) {

    if (tableContainer.style.display !== "none") {
        tableContainer.style.display = "none";
    } else {
        tableContainer.style.display = "block";
    }

}
