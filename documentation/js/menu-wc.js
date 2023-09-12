'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">minted-bi documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-d5ddfac108289c5d57637d4860b262f8274ff81dde9c25b00ea0680a83e9b9ad08cf911a2f40b2aca79afa7281c7e7ea5f8d58c8c1a8f43bb026afd64dbf2f7c"' : 'data-target="#xs-components-links-module-AppModule-d5ddfac108289c5d57637d4860b262f8274ff81dde9c25b00ea0680a83e9b9ad08cf911a2f40b2aca79afa7281c7e7ea5f8d58c8c1a8f43bb026afd64dbf2f7c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d5ddfac108289c5d57637d4860b262f8274ff81dde9c25b00ea0680a83e9b9ad08cf911a2f40b2aca79afa7281c7e7ea5f8d58c8c1a8f43bb026afd64dbf2f7c"' :
                                            'id="xs-components-links-module-AppModule-d5ddfac108289c5d57637d4860b262f8274ff81dde9c25b00ea0680a83e9b9ad08cf911a2f40b2aca79afa7281c7e7ea5f8d58c8c1a8f43bb026afd64dbf2f7c"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-d5ddfac108289c5d57637d4860b262f8274ff81dde9c25b00ea0680a83e9b9ad08cf911a2f40b2aca79afa7281c7e7ea5f8d58c8c1a8f43bb026afd64dbf2f7c"' : 'data-target="#xs-injectables-links-module-AppModule-d5ddfac108289c5d57637d4860b262f8274ff81dde9c25b00ea0680a83e9b9ad08cf911a2f40b2aca79afa7281c7e7ea5f8d58c8c1a8f43bb026afd64dbf2f7c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-d5ddfac108289c5d57637d4860b262f8274ff81dde9c25b00ea0680a83e9b9ad08cf911a2f40b2aca79afa7281c7e7ea5f8d58c8c1a8f43bb026afd64dbf2f7c"' :
                                        'id="xs-injectables-links-module-AppModule-d5ddfac108289c5d57637d4860b262f8274ff81dde9c25b00ea0680a83e9b9ad08cf911a2f40b2aca79afa7281c7e7ea5f8d58c8c1a8f43bb026afd64dbf2f7c"' }>
                                        <li class="link">
                                            <a href="injectables/NgxBarStackService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgxBarStackService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PlotlyService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlotlyService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-4fc7657c3f2b2697572d6812f8e25aa36e1a497978d6204e1d322ce42762f14e2c6cbe71d31022f41e2b46b5a3835a8024cb1f9f8c411f75b6f42985f3fcdb8c"' : 'data-target="#xs-components-links-module-HomeModule-4fc7657c3f2b2697572d6812f8e25aa36e1a497978d6204e1d322ce42762f14e2c6cbe71d31022f41e2b46b5a3835a8024cb1f9f8c411f75b6f42985f3fcdb8c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-4fc7657c3f2b2697572d6812f8e25aa36e1a497978d6204e1d322ce42762f14e2c6cbe71d31022f41e2b46b5a3835a8024cb1f9f8c411f75b6f42985f3fcdb8c"' :
                                            'id="xs-components-links-module-HomeModule-4fc7657c3f2b2697572d6812f8e25aa36e1a497978d6204e1d322ce42762f14e2c6cbe71d31022f41e2b46b5a3835a8024cb1f9f8c411f75b6f42985f3fcdb8c"' }>
                                            <li class="link">
                                                <a href="components/MainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PlotlyjsGraphModule.html" data-type="entity-link" >PlotlyjsGraphModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PlotlyjsGraphModule-97547c368ec98f3657273cfb4b1567e92dc5e5dc0912026c512ebb4aba7783e1ea830ee689527c0b54ad7940e05346911ccf5993448fbbf710f132caaaaaf983"' : 'data-target="#xs-components-links-module-PlotlyjsGraphModule-97547c368ec98f3657273cfb4b1567e92dc5e5dc0912026c512ebb4aba7783e1ea830ee689527c0b54ad7940e05346911ccf5993448fbbf710f132caaaaaf983"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PlotlyjsGraphModule-97547c368ec98f3657273cfb4b1567e92dc5e5dc0912026c512ebb4aba7783e1ea830ee689527c0b54ad7940e05346911ccf5993448fbbf710f132caaaaaf983"' :
                                            'id="xs-components-links-module-PlotlyjsGraphModule-97547c368ec98f3657273cfb4b1567e92dc5e5dc0912026c512ebb4aba7783e1ea830ee689527c0b54ad7940e05346911ccf5993448fbbf710f132caaaaaf983"' }>
                                            <li class="link">
                                                <a href="components/PlotlyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlotlyComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ToolBarModule.html" data-type="entity-link" >ToolBarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ToolBarModule-15991a88cac3fb1173313eb4ceb3fdd7115561dbfe2bf3de4cd8e7d678d7fc068ae1790f1094b965c15fe55d761864992963daa515b2326076593764341d44d7"' : 'data-target="#xs-components-links-module-ToolBarModule-15991a88cac3fb1173313eb4ceb3fdd7115561dbfe2bf3de4cd8e7d678d7fc068ae1790f1094b965c15fe55d761864992963daa515b2326076593764341d44d7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ToolBarModule-15991a88cac3fb1173313eb4ceb3fdd7115561dbfe2bf3de4cd8e7d678d7fc068ae1790f1094b965c15fe55d761864992963daa515b2326076593764341d44d7"' :
                                            'id="xs-components-links-module-ToolBarModule-15991a88cac3fb1173313eb4ceb3fdd7115561dbfe2bf3de4cd8e7d678d7fc068ae1790f1094b965c15fe55d761864992963daa515b2326076593764341d44d7"' }>
                                            <li class="link">
                                                <a href="components/ToolBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToolBarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/NgxBarStackService.html" data-type="entity-link" >NgxBarStackService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlotlyService.html" data-type="entity-link" >PlotlyService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});