(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1132:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(58),_clientLogger=__webpack_require__(40),_configFilename=__webpack_require__(1133);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1133:function(module,exports){Object.defineProperty(exports,"__esModule",{value:!0}),exports.parameters=void 0;exports.parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1134:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(153).configure)([__webpack_require__(1135)],module,!1)}).call(this,__webpack_require__(78)(module))},1135:function(module,exports,__webpack_require__){var map={"./components/Task/Task.stories.js":1136,"./packages/MyButton/MyButton.stories.js":1161,"./packages/Welcome/Welcome.stories.js":1175};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1135},1136:function(module,exports,__webpack_require__){(function(module){var _interopRequireWildcard=__webpack_require__(223),_interopRequireDefault=__webpack_require__(36);Object.defineProperty(exports,"__esModule",{value:!0}),exports.actions=exports.task=void 0;var _extends2=_interopRequireDefault(__webpack_require__(137)),_defineProperty2=_interopRequireDefault(__webpack_require__(114)),React=_interopRequireWildcard(__webpack_require__(0)),_reactNative=__webpack_require__(90),_styles=__webpack_require__(499),_reactNative2=__webpack_require__(153),_addonActions=__webpack_require__(222),_=_interopRequireDefault(__webpack_require__(1145));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty2.default)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var task={id:"1",title:"Take a coffee",state:"TASK_DEFAULT",updatedAt:new Date(2018,0,1,9,0)};exports.task=task;var actions={onPinTask:(0,_addonActions.action)("onPinTask"),onArchiveTask:(0,_addonActions.action)("onArchiveTask")};exports.actions=actions,(0,_reactNative2.storiesOf)("Task",module).addDecorator((function(story){return React.createElement(_reactNative.View,{style:_styles.styles.TaskBox},story())})).add("default",(function(){return React.createElement(_.default,(0,_extends2.default)({task:_objectSpread(_objectSpread({},task),{},{state:"TASK_DEFAULT"})},actions))})).add("checked",(function(){return React.createElement(_.default,(0,_extends2.default)({task:_objectSpread(_objectSpread({},task),{},{state:"TASK_CHECKED"})},actions))})).add("disabled",(function(){return React.createElement(_.default,(0,_extends2.default)({task:_objectSpread(_objectSpread({},task),{},{state:"TASK_DISABLED"})},actions))}))}).call(this,__webpack_require__(78)(module))},1145:function(module,exports,__webpack_require__){var _interopRequireWildcard=__webpack_require__(223);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function Task(_ref){var _ref$task=_ref.task,id=_ref$task.id,title=_ref$task.title,state=_ref$task.state,color=_ref.color,onArchiveTask=_ref.onArchiveTask;_ref.onPinTask;return React.createElement(_reactNative.SafeAreaView,{style:_styles.styles.ListItem},React.createElement(_reactNative.View,{style:_styles.styles.TaskBox},React.createElement(_reactNative.TouchableOpacity,{onPress:function onPress(){return onArchiveTask(id)},disabled:"TASK_DISABLED"===state},{TASK_DEFAULT:React.createElement(_reactNative.View,{style:_styles.styles.CheckBox}),TASK_CHECKED:React.createElement(_reactNative.View,{style:[_styles.styles.CheckBox,{color:color}]},React.createElement(_svgs.CheckSVG,{color:color})),TASK_DISABLED:React.createElement(_reactNative.View,{style:[_styles.styles.CheckBox,_styles.styles.CheckBoxWithDisabled]})}[state]),React.createElement(_reactNative.Text,{style:[_styles.styles.Title,"TASK_DISABLED"===state?_styles.styles.TitleWithDisabled:null],accessibilityState:{selected:"TASK_CHECKED"===state,disabled:"TASK_DISABLED"===state}},title)),React.createElement(_reactNative.View,{style:_styles.styles.PinBox},React.createElement(_reactNative.TouchableOpacity,{onPress:function onPress(){return onArchiveTask(id)}},React.createElement(_reactNative.View,{style:_styles.styles.CheckBox}))))};var React=_interopRequireWildcard(__webpack_require__(0)),_reactNative=__webpack_require__(90),_styles=__webpack_require__(499),_svgs=__webpack_require__(1146)},1146:function(module,exports,__webpack_require__){var _interopRequireWildcard=__webpack_require__(223),_interopRequireDefault=__webpack_require__(36);Object.defineProperty(exports,"__esModule",{value:!0}),exports.CheckSVG=void 0;var _extends2=_interopRequireDefault(__webpack_require__(137)),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__(310)),React=_interopRequireWildcard(__webpack_require__(0)),_reactNativeSvg=_interopRequireWildcard(__webpack_require__(1147)),_constants=__webpack_require__(338);exports.CheckSVG=function CheckSVG(_ref){var _ref$width=_ref.width,width=void 0===_ref$width?50:_ref$width,_ref$height=_ref.height,height=void 0===_ref$height?50:_ref$height,_ref$color=_ref.color,color=void 0===_ref$color?_constants.PRIMARY_COLOR:_ref$color,rest=(0,_objectWithoutProperties2.default)(_ref,["width","height","color"]);return React.createElement(_reactNativeSvg.default,(0,_extends2.default)({},rest,{xmlns:"http://www.w3.org/2000/svg",width:width,height:height,viewBox:"0 0 24 24"}),React.createElement(_reactNativeSvg.Path,{fill:color,d:"M19.281 5.281L9 15.563 4.719 11.28 3.28 12.72l5 5 .719.687.719-.687 11-11z"}))}},1161:function(module,exports,__webpack_require__){(function(module){var _interopRequireDefault=__webpack_require__(36),_addonActions=__webpack_require__(222),_addonKnobs=__webpack_require__(1162),_reactNative=__webpack_require__(153),_react=_interopRequireDefault(__webpack_require__(0)),_reactNative2=__webpack_require__(90),_=_interopRequireDefault(__webpack_require__(1171)),_CenterView=_interopRequireDefault(__webpack_require__(1173)),_constants=__webpack_require__(338),action=function action(name,options){var constructedAction=(0,_addonActions.action)(name,options);return function(event){return constructedAction(event.persist())}};(0,_reactNative.storiesOf)("Components/MyButton",module).addDecorator((function(getStory){return _react.default.createElement(_CenterView.default,null,getStory())})).add("Primary",(function(){return _react.default.createElement(_.default,{variantColor:_constants.PRIMARY_COLOR,onPress:action("clicked-text")},_react.default.createElement(_reactNative2.Text,null,(0,_addonKnobs.text)("MyButton text","Hello MyButton")))})).add("Success",(function(){return _react.default.createElement(_.default,{variantColor:_constants.SUCCESS_COLOR,onPress:action("clicked-text")},_react.default.createElement(_reactNative2.Text,null,(0,_addonKnobs.text)("MyButton text","Hello MyButton")))})).add("Danger",(function(){return _react.default.createElement(_.default,{variantColor:_constants.DANGER_COLOR,onPress:action("clicked-text")},_react.default.createElement(_reactNative2.Text,null,(0,_addonKnobs.text)("MyButton text","Hello MyButton")))})).add("with some emoji",(function(){return _react.default.createElement(_.default,{onPress:action("clicked-emoji")},_react.default.createElement(_reactNative2.Text,null,"😀 😎 👍 💯"))}))}).call(this,__webpack_require__(78)(module))},1171:function(module,exports,__webpack_require__){var _interopRequireDefault=__webpack_require__(36);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=MyButton;var _react=_interopRequireDefault(__webpack_require__(0)),_propTypes=_interopRequireDefault(__webpack_require__(1)),_reactNative=__webpack_require__(90),_styles=_interopRequireDefault(__webpack_require__(1172));function MyButton(_ref){var variantColor=_ref.variantColor,onPress=_ref.onPress,children=_ref.children;return _react.default.createElement(_reactNative.View,{style:[_styles.default.buttonContainer,variantColor?{backgroundColor:variantColor}:null]},_react.default.createElement(_reactNative.TouchableHighlight,{onPress:onPress},_react.default.createElement(_reactNative.Text,{style:_styles.default.buttonText},children)))}MyButton.defaultProps={children:null,onPress:function onPress(){}},MyButton.propTypes={children:_propTypes.default.node,onPress:_propTypes.default.func}},1172:function(module,exports){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;exports.default={buttonContainer:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#722ed1",padding:10,borderRadius:5},buttonText:{color:"#fff"}}},1173:function(module,exports,__webpack_require__){var _interopRequireDefault=__webpack_require__(36);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=CenterView;var _react=_interopRequireDefault(__webpack_require__(0)),_propTypes=_interopRequireDefault(__webpack_require__(1)),_reactNative=__webpack_require__(90),_styles=_interopRequireDefault(__webpack_require__(1174));function CenterView(_ref){var children=_ref.children;return _react.default.createElement(_reactNative.View,{style:_styles.default.main},children)}CenterView.defaultProps={children:null},CenterView.propTypes={children:_propTypes.default.node}},1174:function(module,exports){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;exports.default={main:{flex:1,justifyContent:"center",alignItems:"center"}}},1175:function(module,exports,__webpack_require__){(function(module){var _interopRequireDefault=__webpack_require__(36),_react=_interopRequireDefault(__webpack_require__(0)),_addonLinks=__webpack_require__(492),_reactNative=__webpack_require__(153),_index=_interopRequireDefault(__webpack_require__(1176));(0,_reactNative.storiesOf)("Welcome",module).add("to Storybook",(function(){return _react.default.createElement(_index.default,{showApp:(0,_addonLinks.linkTo)("Button")})}))}).call(this,__webpack_require__(78)(module))},1176:function(module,exports,__webpack_require__){var _interopRequireDefault=__webpack_require__(36);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=Welcome;var _react=_interopRequireDefault(__webpack_require__(0)),_propTypes=_interopRequireDefault(__webpack_require__(1)),_reactNative=__webpack_require__(90);function Welcome(props){var styles={wrapper:{flex:1,padding:24,justifyContent:"center"},header:{fontSize:18,marginBottom:18},content:{fontSize:12,marginBottom:10,lineHeight:18}};return _react.default.createElement(_reactNative.View,{style:styles.wrapper},_react.default.createElement(_reactNative.Text,{style:styles.header},"Welcome to React Native Storybook"),_react.default.createElement(_reactNative.Text,{style:styles.content},"This is a UI Component development environment for your React Native app. Here you can display and interact with your UI components as stories. A story is a single state of one or more UI components. You can have as many stories as you want. In other words a story is like a visual test case."),_react.default.createElement(_reactNative.Text,{style:styles.content},'We have added some stories inside the "storybook/stories" directory for examples. Try editing the "storybook/stories/Welcome.js" file to edit this message.'))}Welcome.defaultProps={showApp:null},Welcome.propTypes={showApp:_propTypes.default.func}},338:function(module,exports){Object.defineProperty(exports,"__esModule",{value:!0}),exports.DISABLED_COLOR=exports.DANGER_COLOR=exports.SUCCESS_COLOR=exports.PRIMARY_COLOR=void 0;exports.PRIMARY_COLOR="#722ed1";exports.SUCCESS_COLOR="#52c41a";exports.DANGER_COLOR="#f5222d";exports.DISABLED_COLOR="#bfbfbf"},499:function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.styles=void 0;var _reactNative=__webpack_require__(90),_constants=__webpack_require__(338),styles=_reactNative.StyleSheet.create({ListItem:{flexDirection:"row",flex:1,justifyContent:"space-between"},TaskBox:{flexDirection:"row",alignItems:"center"},CheckBox:{width:20,height:20,borderRadius:4,borderColor:_constants.PRIMARY_COLOR,borderWidth:1,justifyContent:"center",alignItems:"center"},CheckBoxWithDisabled:{borderColor:_constants.DISABLED_COLOR},Title:{color:_constants.PRIMARY_COLOR,marginLeft:10},TitleWithDisabled:{color:_constants.DISABLED_COLOR},PinBox:{}});exports.styles=styles},530:function(module,exports,__webpack_require__){__webpack_require__(531),__webpack_require__(703),__webpack_require__(704),__webpack_require__(860),__webpack_require__(1075),__webpack_require__(1107),__webpack_require__(1111),__webpack_require__(1123),__webpack_require__(1125),__webpack_require__(1130),__webpack_require__(1132),module.exports=__webpack_require__(1134)},605:function(module,exports){},704:function(module,exports,__webpack_require__){__webpack_require__(153)}},[[530,1,2]]]);
//# sourceMappingURL=main.fc6e336c558def872e7a.bundle.js.map