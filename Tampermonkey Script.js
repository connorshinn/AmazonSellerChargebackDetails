// ==UserScript==
// @name         Amazon US Seller Central – View Chargeback Reasons
// @include        https://sellercentra*.amazon.com/gp/chargebacks*
// @icon64			https://www.google.com/s2/favicons?sz=256&domain=sellercentral.amazon.com
// @require       https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @require       https://gist.github.com/raw/2625891/waitForKeyElements.js
// @resource		https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined;
// @import			url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined);
// @font-face 	   {font-family: 'Material Icons'; src: url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined'); }
//@grant			GM.xmlHttpRequest
// @grant			GM_addStyle
// ==/UserScript==
addStyleSheet('@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined);');

function addStyleSheet(style) {
    var getHead = document.getElementsByTagName("HEAD")[0];
    var cssNode = window.document.createElement('style');
    var elementStyle = getHead.appendChild(cssNode);
    elementStyle.innerHTML = style;
    return elementStyle;
}
waitForKeyElements(
    "#chargebacksTable", click
);

function click() {
    var finalURL = "https://sellercentral.amazon.com/chargebacks/api/v1/chargebacks?filterType=All&pageSize=50&startIndex=0&sortType=FilingDate&sortDirection=Descending"

    var cardDetails = JSON.parse('{"10":[{"Card":"Discover","Category":"Fraudulent","Details":"Fraud Card Present Transaction"}],"21":[{"Card":"Mastercard","Category":"Fraudulent","Details":"Cardholder does not recognize transaction"}],"30":[{"Card":"Discover","Category":"Fraudulent","Details":"Fraud Card Not Present Transaction"}],"31":[{"Card":"Mastercard","Category":"Amount disuputed","Details":"Transaction Amount Differs"}],"34":[{"Card":"Mastercard","Category":"Amount disuputed","Details":"Transaction Amount Differs"}],"37":[{"Card":"Mastercard","Category":"Fraudulent","Details":"No Cardholder Authorization"}],"41":[{"Card":"Mastercard","Category":"Fraudulent","Details":"Fraud investigation"}],"49":[{"Card":"Mastercard","Category":"Fraudulent","Details":"Questionable Merchant Activity"}],"52":[{"Card":"Discover","Category":"Fraudulent","Details":"Does Not Recognize"}],"53":[{"Card":"Mastercard or Discover","Category":"Product quality issues","Details":"General Defective/Not as Described"}],"55":[{"Card":"Discover","Category":"Product not received","Details":"Non-Receipt of Goods or Services"}],"60":[{"Card":"Mastercard","Category":"Credit not processed","Details":"Credit Not Processed"}],"63":[{"Card":"Mastercard","Category":"Fraudulent","Details":"Cardholder Does Not Recognize—Potential Fraud"}],"66":[{"Card":"Discover","Category":"Fraudulent","Details":"Fraud Chip Card Counterfeit Transaction"}],"67":[{"Card":"Discover","Category":"Fraudulent","Details":"Fraud Chip Card and PIN Transaction"}],"127":[{"Card":"AmEx","Category":"Fraudulent","Details":"Unrecognized Charge"}],"154":[{"Card":"AmEx","Category":"Credit not processed","Details":"Goods/Services Cancelled/Refused"}],"155":[{"Card":"AmEx","Category":"Product not received","Details":"Goods not Received (Request Credit)"}],"158":[{"Card":"AmEx","Category":"Credit not processed","Details":"Goods Returned (Request Credit)"}],"175":[{"Card":"AmEx","Category":"Credit not processed","Details":"Credit Not Processed"}],"176":[{"Card":"AmEx","Category":"Fraudulent","Details":"Unrecognized Charge (Card Not Present)"}],"177":[{"Card":"AmEx","Category":"Fraudulent","Details":"Unauthorized Charge"}],"193":[{"Card":"AmEx","Category":"Fraudulent","Details":"Fraudulent Charge"}],"680":[{"Card":"AmEx","Category":"Credit not processed","Details":"Incorrect Charge Amount"}],"02":[{"Card":"Discover","Category":"Credit not processed","Details":"Credit Not Processed"}],"004":[{"Card":"AmEx","Category":"Product not received","Details":"Product Not Received"}],"05":[{"Card":"Mastercard","Category":"Amount disupted","Details":"Cardholder does not agree with amount billed"}],"10.1":[{"Card":"Visa","Category":"Fraudulent","Details":"EMV Liability Shift Counterfeit Fraud"}],"10.2":[{"Card":"Visa","Category":"Fraudulent","Details":"EMV Liability Shift Non-Counterfeit Fraud"}],"10.3":[{"Card":"Visa","Category":"Fraudulent","Details":"Other Fraud - Card Present Environment"}],"10.4":[{"Card":"Visa","Category":"Fraudulent","Details":"Other Fraud - Card Absent Environment"}],"13.1":[{"Card":"Visa","Category":"Product not received","Details":"Merchandise/Services Not Received"}],"13.2":[{"Card":"Visa","Category":"Subscription canceled","Details":"Cancelled Recurring"}],"13.3":[{"Card":"Visa","Category":"Product quality issues","Details":"Not as Described or Defective Merchandise/Services"}],"13.4":[{"Card":"Visa","Category":"Product quality issues","Details":"Counterfeit Merchandise"}],"13.5":[{"Card":"Visa","Category":"Product quality issues","Details":"Misrepresentation"}],"13.6":[{"Card":"Visa","Category":"Credit not processed","Details":"Credit not processed"}],"13.7":[{"Card":"Visa","Category":"Credit not processed","Details":"Cancelled Merchandise/Services"}],"13.9":[{"Card":"Visa","Category":"Product not received","Details":"Non-Receipt of Cash or Load Transaction Value"}],"021":[{"Card":"AmEx","Category":"Subscription canceled","Details":"Goods/Services Cancelled/Expired"}],"024":[{"Card":"AmEx","Category":"Product quality issues","Details":"Goods Damaged/Defective"}],"059":[{"Card":"AmEx","Category":"Product quality issues","Details":"Goods Damaged/Defective (Request Repair)"}],"063":[{"Card":"AmEx","Category":"Product quality issues","Details":"Product Quality Unacceptable"}],"A02":[{"Card":"AmEx","Category":"General","Details":"No Valid Authorization"}],"A08":[{"Card":"AmEx","Category":"General","Details":"Authorization Approval Expired"}],"C02":[{"Card":"AmEx","Category":"Credit not processed","Details":"Credit Not Processed"}],"C04":[{"Card":"AmEx","Category":"Credit not processed","Details":"Goods/Services Returned or Refused"}],"C05":[{"Card":"AmEx","Category":"Credit not processed","Details":"Goods/Services Cancelled"}],"C08":[{"Card":"AmEx","Category":"Product not received","Details":"Goods/Services Not Received or Only Partially Received"}],"C31":[{"Card":"AmEx","Category":"Product quality issues","Details":"Goods/Services Not As Described"}],"C32":[{"Card":"AmEx","Category":"Product quality issues","Details":"Goods/Services Damaged or Defective"}],"F10":[{"Card":"AmEx","Category":"Fraudulent","Details":"Missing Imprint"}],"F24":[{"Card":"AmEx","Category":"Fraudulent","Details":"Multiple ROCs"}],"F29":[{"Card":"AmEx","Category":"Fraudulent","Details":"Card Not Present"}],"F30":[{"Card":"AmEx","Category":"Fraudulent","Details":"EMV Liability Shift - Counterfeit"}],"F31":[{"Card":"AmEx","Category":"Fraudulent","Details":"EMV Liability Shift - Lost/Stolen/Non-Received"}],"FR2":[{"Card":"AmEx","Category":"Fraudulent","Details":"Fraud Full Recourse Program"}],"FR4":[{"Card":"AmEx","Category":"Fraudulent","Details":"Immediate Chargeback Program"}],"FR5":[{"Card":"AmEx","Category":"Fraudulent","Details":"Immediate Chargeback Program"}],"FR6":[{"Card":"AmEx","Category":"Fraudulent","Details":"Partial Immediate Chargeback Program"}],"P05":[{"Card":"AmEx","Category":"Credit not processed","Details":"Incorrect Charge Amount"}]}')

    function searchAndReturnDetails(searchString) {
        var details = null;

        // Loop through the keys in the JSON object
        for (var key in cardDetails) {
            if (key === searchString) {
                // Found a match, store the details
                details = cardDetails[key][0];
                break;
            }
        }

        return details;
    }

    // Call the search function and store the result

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
                $("<th>").text("Filing Date").appendTo(headerRow);
                $("<th>").text("Order Details").appendTo(headerRow);
                $("<th>").text("Total Amount").appendTo(headerRow);
                $("<th>").text("Chargeback Reason").appendTo(headerRow);
                $("<th>").text("Details").appendTo(headerRow);

                // Loop through the JSON data
                var chargebackCount = jsonResponse.chargebacks.length
                console.log(chargebackCount)
                $.each(jsonResponse.chargebacks, function(key, value) {
                    var searchString = value.reasonCode
                    var result = searchAndReturnDetails(searchString);

                    // Check if a match was found
                    if (result !== null) {
                        var cardLogo = ''
                        var chargebackListDetails = ''
                        // Match found, display the card and category details
                        if (result.Card == 'Visa') {
                            //cardLogo =  '<br><img src="' + 'https://github.com/aaronfagan/svg-credit-card-payment-icons/raw/main/logo/visa.svg" style="width: 45px; height: auto"/>'
                            cardLogo = '<br><img src="' + 'https://github.com/aaronfagan/svg-credit-card-payment-icons/raw/main/flat-rounded/visa.svg" style="width: 45px; height: auto;box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"/>'

                        } else if (result.Card == 'Mastercard') {
                            //cardLogo =  '<br><img src="' + 'https://github.com/aaronfagan/svg-credit-card-payment-icons/raw/main/logo/mastercard.svg" style="width: 45px; height: auto"/>'
                            cardLogo = '<br><img src="' + 'https://github.com/aaronfagan/svg-credit-card-payment-icons/raw/main/flat-rounded/mastercard.svg" style="width: 45px; height: auto;box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"/>'

                        } else if (result.Card == 'AmEx') {
                            //cardLogo =  '<br><img src="' + 'https://github.com/aaronfagan/svg-credit-card-payment-icons/raw/main/logo/amex.svg" style="width: 45px; height: auto"/>'
                            cardLogo = '<br><img src="' + 'https://github.com/aaronfagan/svg-credit-card-payment-icons/raw/main/flat-rounded/amex.svg" style="width: 45px; height: auto;box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"/>'

                        } else if (result.Card == 'Discover') {
                            //cardLogo =  '<br><img src="' + 'https://github.com/aaronfagan/svg-credit-card-payment-icons/raw/main/logo/discover.svg" style="width: 45px; height: auto"/>'
                            cardLogo = '<br><img src="' + 'https://github.com/aaronfagan/svg-credit-card-payment-icons/raw/main/flat-rounded/discover.svg" style="width: 45px; height: auto;box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"/>'

                        } else if (result.Card == 'Mastercard or Discover') {
                            //cardLogo =  '<br><img src="' + 'https://github.com/aaronfagan/svg-credit-card-payment-icons/raw/main/logo/discover.svg" style="width: 45px; height: auto"/> or  <img src="' + 'https://github.com/aaronfagan/svg-credit-card-payment-icons/raw/main/logo/amex.svg" style="width: 45px; height: auto"/>'
                            cardLogo = '<br><img src="' + 'https://github.com/aaronfagan/svg-credit-card-payment-icons/raw/main/flat-rounded/discover.svg" style="width: 45px; height: auto;box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"/> or  <img src="' + 'https://github.com/aaronfagan/svg-credit-card-payment-icons/raw/main/flat-rounded/mastercard.svg" style="width: 45px; height: auto;box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"/>'

                        }
                        var disputeCategory = result.Category
                        chargebackListDetails = '<span style="font-weight: bold">' + value.reasonCode + ': ' + disputeCategory + '</span>' + cardLogo


                    } else {
                        // No match found
                        cardLogo = ''
                        disputeCategory = ''
                        chargebackListDetails = '<span style="font-weight: bold">' + value.reasonCode + '</span>'
                    }


                    var itemCount = value.relatedOrders[0].items.length;

                    var a = []

                    $.each(value.relatedOrders[0].items, function(key, value) {
                        var itemList = ''
                        var title = value.offeringTitle;
                        title = title.slice(0, 25)
                        var orderQuantity = value.orderQuantity;
                        var orderASIN = value.asin;
                        itemList += orderQuantity + "x " + title + "... (" + orderASIN + ")"
                        a.push(itemList)
                    })
                    a = a.join('</br>');
                    console.log(a)


                    var row = $("<tr>").appendTo(tbody);
                    var chargebackStatus = value.status
                    var chargebackClass = ''
                    var icon = ''
                    var finalStatus = ''
                    if (chargebackStatus == 'Resolved') {
                        chargebackClass = 'resolved'
                        icon = 'done'
                        finalStatus = 'Resolved'
                    } else if (chargebackStatus == 'Seller Refunded') {
                        chargebackClass = 'seller'
                        icon = 'exclamation'
                        finalStatus = 'Refunded'
                    } else if (chargebackStatus == 'Pending') {
                        chargebackClass = 'pending'
                        icon = 'schedule'
                        finalStatus = 'Pending'
                    }
                    $('<td width="100px">').html('<button class="pill ' + chargebackClass + '">' + '<i style="font-size: 1em !important;line-height: 100% !important;" class="material-symbols-outlined">' + icon + '</i> ' + finalStatus + '</button>').appendTo(row);
                    $("<td>").text(value.filingDate.formattedDate).appendTo(row);
                    $("<td>").text(value.relatedOrders[0].orderDate.formattedDate).appendTo(row);

                    $("<td>").html('<a href="https://sellercentral.amazon.com/orders-v3/order/' + value.relatedOrders[0].orderId + '" target="_blank">' + value.relatedOrders[0].orderId + '</a></br><div style=font-size:0.8em>' + a + '</div>').appendTo(row);
                    //$("<td>").text( value.relatedOrders[0].orderAmount.amount).appendTo(row);
                    $("<td>").text(Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(value.relatedOrders[0].orderAmount.amount)).appendTo(row);
                    $("<td>").html(chargebackListDetails).appendTo(row);
                    $("<td>").html('<a href="https://sellercentral.amazon.com/gp/chargebacks/home.html/ref=xx_chrgbck_dnav_xx#/details?chargebackId=' + value.id + '" target="_blank">' + 'View Details</a>').appendTo(row);
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
                $("#tableContainer").append('<div id="linkCount" style="float: right"><span style="font-size:1.3em; font-weight: bold">' + chargebackCount + '</span> chargebacks</div>')
                $("#tableContainer").append(table);
                $("#tableContainer").append('<div id="chargebackLink"><a href="https://midigator.com/chargeback-reason-codes/" target="_blank">Click to view chargeback code details</a></div>')


                $("tableContainer").css({
                    "background-color": "#fff",
                    "z-index": "11",
                });
                $("table.styled-table").css({
                    "border-collapse": "collapse",
                    "margin": "0",
                    "font-size": "1em",
                    "font-family": "Amazon Ember, sans-serif",
                    "min-width": "75vw",
                    "box-shadow": "0 0 20px rgba(0, 0, 0, 0.15)",
                    "z-index": "9998",
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
                $("button.pill ").css({
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
                $("button.resolved ").css({
                    "background-color": "#40b488"
                })
                $("button.seller ").css({
                    "background-color": "#f35743"
                })
                $("button.pending ").css({
                    "background-color": "#fb991c"
                })
                $("table.styled-table tbody tr:last-of-type td ").css({
                    "text-align": "center"
                });
                $("#tableContainer").css({
                    "position": "fixed",
                    "top": "50%",
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
