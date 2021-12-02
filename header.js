var Transaction = 'Sales Order';
var Catalog = 'Default Catalog'
const logo = 'https://ludopepperi.github.io/RVF/logoRVF.jpg'
const LeftMenu = [


];
const RightMenu = [

    {
        catalog: "Sales Order",
        transaction: "Default Catalog",
        title: "Passer une commande",
        action: "createNewTransaction",
        deepLink: '/Transactions/scope_items/{{UUID}}'
    },
    {
        title: "Historique",
        action: "navigation",
        deepLink: 'list/all_activities'
    }
]
/*actions:
setUUIDandNav
createNewTransaction
navigation
createNewActivity
openInNewTab
zendesk
*/
