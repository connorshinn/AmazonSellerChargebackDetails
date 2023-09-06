# Amazon Seller Chargeback Details
This is a tool for Amazon sellers that provides additional information on their recent chargebacks. All data is extracted from an existing API call that is made by Amazon when opening the "Chargeback Claims" page in Seller Central. Most importantly, this tool provides a reason code for each chargeback, which you can lookup at the [following link:](https://midigator.com/chargeback-reason-codes/)

## Installation

1. Install [Tampermonkey]([https://tampermonkey.net/](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo))
1. Click this link to open the raw version of this script
1. Copy the entire text of the script
1. Open Tampermonkey in your browser and click the Add Script tab (icon with a plus symbol)
1. Paste the script into the window and hit save
1. Voila!

## Usage

1. The script activates on the [chargebacks overview page in Seller Central](https://sellercentral.amazon.com/gp/chargebacks/home.html)
2. A blue button labeled "View Chargeback Details" is added below the header:
3. Clicking the button will display a table containing a list of your chargebacks, including a column that contains the chargeback reason
4. Search for the chargeback code in the link provided above, and click it to view more details about why the chargeback was filed
5. You can click on the "View Chargeback Details" button again to hide the table
