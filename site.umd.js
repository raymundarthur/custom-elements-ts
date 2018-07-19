(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.Site = {})));
}(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    var CustomElement = function (args) {
        return function (target) {
            var toKebabCase = function (string) { return string.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase(); };
            var tag = args.tag || toKebabCase(target.prototype.constructor.name);
            var customElement = (function (_super) {
                __extends(class_1, _super);
                function class_1() {
                    var _this = _super.call(this) || this;
                    _this.props = {};
                    _this.__connected = false;
                    if (!_this.shadowRoot) {
                        _this.attachShadow({ mode: 'open' });
                    }
                    return _this;
                }
                Object.defineProperty(class_1, "observedAttributes", {
                    get: function () {
                        return Object.keys(this.watchAttributes || {});
                    },
                    enumerable: true,
                    configurable: true
                });
                class_1.prototype.attributeChangedCallback = function (name, oldValue, newValue) {
                    var watchAttributes = this.constructor.watchAttributes;
                    if (watchAttributes && watchAttributes[name] && oldValue != newValue) {
                        var methodToCall = watchAttributes[name];
                        this[methodToCall]({ old: oldValue, new: newValue });
                    }
                };
                class_1.prototype.connectedCallback = function () {
                    this.__connected = true;
                    this.__render();
                    _super.prototype.connectedCallback && _super.prototype.connectedCallback.call(this);
                };
                class_1.prototype.__render = function () {
                    var template = document.createElement('template');
                    template.innerHTML = "\n          <style>" + (args.style ? args.style : '') + "</style>\n          " + (args.template ? args.template : '');
                    this.shadowRoot.appendChild(document.importNode(template.content, true));
                };
                return class_1;
            }(target));
            if (!customElements.get(tag)) {
                customElements.define(tag, customElement);
            }
            return customElement;
        };
    };

    var CodeExampleElement = (function (_super) {
        __extends(CodeExampleElement, _super);
        function CodeExampleElement() {
            var _this = _super.call(this) || this;
            var code = "\n// Typescript\nimport { CustomElement } from 'custom-elements-ts';\n\n@CustomElement({\n  tag: 'cts-message',\n  template: '<h1></h1>'\n  style: '' // css styles here or can use styleUrl\n})\nexport class MessageElement extends HTMLElement {\n\n  constructor() {\n    super();\n    this.addEventListener('click', () => {\n      alert('what are you waiting for?');\n    });\n  }\n\n  get message() {\n    return this.getAttribute('message');\n  }\n\n  set message(value) {\n    this.setAttribute('message', value);\n  }\n\n  connectedCallback(){\n    this.shadowRoot.querySelector('h1').innerHTML = this.message;\n  }\n}\n\n// HTML\n<cts-message message=\"npm install custom-elements-ts\"></cts-message>\n        ";
            _this.code = Prism.highlight(code, Prism.languages.javascript);
            return _this;
        }
        CodeExampleElement.prototype.connectedCallback = function () {
            this.shadowRoot.querySelector('#code').innerHTML = "<pre><code>" + this.code + "</code></pre>";
        };
        CodeExampleElement = __decorate([
            CustomElement({
                tag: 'cts-code-example',
                template: '<div id="code"></div>',
                style: ':host{font-size:15px;padding:24px;display:block;overflow-x:auto;color:#bbb;max-height:500px}@media screen and (min-width: 1000px){:host{font-size:17px;padding:32px}}code[class*=\"language-\"]{color:#c5c8c6;text-shadow:0 1px rgba(0,0,0,0.3);font-family:Inconsolata, Monaco, Consolas, \"Courier New\", Courier, monospace;direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre{margin:0}pre[class*=\"language-\"]{color:#c5c8c6;text-shadow:0 1px rgba(0,0,0,0.3);font-family:Inconsolata, Monaco, Consolas, \"Courier New\", Courier, monospace;direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;padding:1em;overflow:auto;border-radius:0.3em}:not(pre)>code[class*=\"language-\"],pre[class*=\"language-\"]{background:#1d1f21}:not(pre)>code[class*=\"language-\"]{padding:.1em;border-radius:.3em}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:#7C7C7C}.token.punctuation{color:#c5c8c6}.namespace{opacity:.7}.token.property,.token.keyword,.token.tag{color:#e06c75}.token.class-name{color:#FFFFB6;text-decoration:underline}.token.boolean,.token.constant{color:#99CC99}.token.symbol,.token.deleted{color:#f92672}.token.number{color:#FF73FD}.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted{color:#A8FF60}.token.variable{color:#C6C5FE}.token.operator{color:#EDEDED}.token.entity{color:#FFFFB6}.token.url{color:#96CBFE}.language-css .token.string,.style .token.string{color:#87C38A}.token.atrule,.token.attr-value{color:#F9EE98}.token.function{color:#DAD085}.token.regex{color:#E9C062}.token.important{color:#fd971f;font-weight:bold}.token.bold{font-weight:bold}.token.italic{font-style:italic}.token.entity{cursor:help} '
            }),
            __metadata("design:paramtypes", [])
        ], CodeExampleElement);
        return CodeExampleElement;
    }(HTMLElement));

    var MessageElement = (function (_super) {
        __extends(MessageElement, _super);
        function MessageElement() {
            var _this = _super.call(this) || this;
            _this.addEventListener('click', function () {
                alert('what are you waiting for?');
            });
            return _this;
        }
        Object.defineProperty(MessageElement.prototype, "message", {
            get: function () {
                return this.getAttribute('message');
            },
            set: function (value) {
                this.setAttribute('message', value);
            },
            enumerable: true,
            configurable: true
        });
        MessageElement.prototype.connectedCallback = function () {
            this.shadowRoot.querySelector('h1').innerHTML = this.message;
        };
        MessageElement = __decorate([
            CustomElement({
                tag: 'cts-message',
                template: '<h1></h1>',
                style: "\n    :host {\n      margin: 0 auto;\n      margin-top: 50px;\n      display: block;\n      width: calc(100% - 50px);\n      text-align: center;\n      cursor: pointer;\n    }\n    h1 {\n      font-size: 14px;\n      margin: 0 auto;\n      padding: 20px;\n      background: #2e8edf;\n      color: whitesmoke;\n      border-radius: 3px;\n    }\n  "
            }),
            __metadata("design:paramtypes", [])
        ], MessageElement);
        return MessageElement;
    }(HTMLElement));

    exports.CodeExampleElement = CodeExampleElement;
    exports.MessageElement = MessageElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=site.umd.js.map