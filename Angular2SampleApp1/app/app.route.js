"use strict";
const router_1 = require('@angular/router');
const home_component_1 = require('./home/home.component');
const about_component_1 = require('./about/about.component');
const employeeadd_component_1 = require('./employee/employeeadd.component');
const routes = [
    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'employee', component: employeeadd_component_1.EmployeeComponent }
];
exports.routeModule = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.route.js.map