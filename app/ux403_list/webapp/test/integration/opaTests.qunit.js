sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'mn/ux403list/test/integration/FirstJourney',
		'mn/ux403list/test/integration/pages/CustomersList',
		'mn/ux403list/test/integration/pages/CustomersObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomersList, CustomersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('mn/ux403list') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomersList: CustomersList,
					onTheCustomersObjectPage: CustomersObjectPage
                }
            },
            opaJourney.run
        );
    }
);