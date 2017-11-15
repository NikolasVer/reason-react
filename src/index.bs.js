'use strict';

var ReactDOMRe         = require("reason-react/src/reactDOMRe.js");
var ReasonReact        = require("reason-react/src/reasonReact.js");
var Page$ReactTemplate = require("./page.bs.js");

ReactDOMRe.renderToElementWithId(ReasonReact.element(0,0, Page$ReactTemplate.make("Hello!1",[])), "index");