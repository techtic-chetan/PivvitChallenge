/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
 
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      "npm:": "node_modules/"
    },
    // map tells the System loader where to look for things
    map: {

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',  
      
      '@angular/material': 'npm:@angular/material/bundles/material.umd.js',

      '@ng/bootbox': 'node_modules/ngbootbox/ngBootboxs.js',  

      'ng2-page-scroll/ng2-page-scroll': 'npm:ng2-page-scroll/bundles/ng2-page-scroll.umd.js',

      'rxjs':                      'npm:rxjs',

      'angular2-notifications': 'npm:angular2-notifications',

      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'ng2-google-recaptcha': 'node_modules/ng2-google-recaptcha' ,
      'ng2-rating': 'node_modules/ng2-rating',
    	'@ng-bootstrap/ng-bootstrap': 'npm:@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js',

      'primeng':  'npm:primeng',
      'angular-2-data-table': 'npm:angular-2-data-table/dist',

      'moment': 'node_modules/moment',

      'nouislider': 'node_modules/nouislider',
      'ng2-nouislider': 'node_modules/ng2-nouislider',
      'ui-tour': 'src/app/tour',
      'angular2-cookie':            'npm:angular2-cookie'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      "rxjs": {
        defaultExtension: 'js'
      },
      "ng2-google-recaptcha": { 
        main: "index.js", 
        defaultExtension: "js" 
      },
      "angular2-notifications": { 
        main: "components.js", 
        defaultExtension: "js" 
      },
      "ng2-rating": { 
        main: "index.js", 
        defaultExtension: "js" 
      },
      "primeng": { 
        defaultExtension: "js" 
      },
      'angular-2-data-table': {
        format: 'cjs',
        defaultExtension: 'js',
        main: 'index.js'
      },
      'moment': { defaultExtension: 'js' },

      'nouislider': { main: 'distribute/nouislider.js', defaultExtension: 'js' },
      'ng2-nouislider': { main: 'src/nouislider.js', defaultExtension: 'js' },
      'ui-tour': { main: 'dist/angular-ui-tour.js', defaultExtension: 'js'},
      'angular2-cookie': { main: './core.js', defaultExtension: 'js'}
    }
  });
})(this);
