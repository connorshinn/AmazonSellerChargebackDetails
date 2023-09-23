# Amazon Seller Chargeback Details
This is a tool for Amazon sellers that provides additional information on their recent chargebacks. All data is extracted from an existing API call that is made by Amazon when opening the "Chargeback Claims" page in Seller Central. Most importantly, this tool provides a reason code for each chargeback, which you can lookup at the [following link](https://www.checkout.com/docs/developer-resources/testing/codes/chargeback-codes)

## Installation

1. Install the [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) Chrome extension
1. Once installed, [click this link](https://github.com/connorshinn/AmazonSellerChargebackDetails/raw/main/Tampermonkey%20Script.user.js) to add the script to Tampermonkey (make sure to press the install button in the new tab that opens)
1. Voila! The script should be ready to go 

## Usage

1. The script activates on the [chargebacks overview page in Seller Central](https://sellercentral.amazon.com/gp/chargebacks/home.html)
2. A blue button labeled "View Chargeback Details" is added below the header
![](https://github.com/connorshinn/AmazonSellerChargebackDetails/blob/bd1b29fcec0f23e169476887a12cfa49c65486c7/Chargeback%20Details%20Button.png)
3. Clicking the button will display a table containing a list of your chargebacks, including a column that contains the chargeback reason
![](https://github.com/connorshinn/AmazonSellerChargebackDetails/blob/73cbe17ea60ff8f5c0d32abf42a04736d3f6bf50/Chargeback%20Table.png)
4. Search for the chargeback code in the link provided above, and click it to view more details about why the chargeback was filed
5. You can click on the "View Chargeback Details" button again to hide the table
6. **Important Note: Amazon only provides the chargeback code itself – this script attempts to match that 2 digit code to a chargeback reason, but it's a bit of an art more than a science. A few things to keep in mind as a result:**
     - If a 2 digit chargeback code is listed but is missing a description / card icon, it is likely because the card used for the purchase was something other than AmEx, Visa, Mastercard, or Discover. You can do a Google search for "chargeback code" + the 2 digit code to try and find additional details for these if desired
     - There are also a number of codes where Amazon only provides the last 2 digits of a 4 digit code. For example, "37" (provided by Amazon) is not a chargeback code, but it likely refers to the "4837" Mastercard chargeback code.
     - Please keep these caveats in mind when reviewing your data, as it's possible that some of the chargeback code descriptions may not be matched perfectly
