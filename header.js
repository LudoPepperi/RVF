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
    },
    {
        activity: "Mes contacts",
        title: "Mes Contacts",
        action: "createNewActivity",
        deepLink: 'activities/details/{{UUID}}'
    },
    {
        activity: "Nous contacter",
        title: "Nous contacter",
        action: "createNewActivity",
        deepLink: 'activities/details/{{UUID}}'
    },


]
/*actions:
setUUIDandNav
createNewTransaction
navigation
createNewActivity
openInNewTab
zendesk
*/
