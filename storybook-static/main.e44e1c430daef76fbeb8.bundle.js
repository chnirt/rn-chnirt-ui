(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1129:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(58),_clientLogger=__webpack_require__(39),_configFilename=__webpack_require__(1130);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1130:function(module,exports){Object.defineProperty(exports,"__esModule",{value:!0}),exports.parameters=void 0;exports.parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1131:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(152).configure)([__webpack_require__(1132)],module,!1)}).call(this,__webpack_require__(78)(module))},1132:function(module,exports,__webpack_require__){var map={"./components/Task/Task.stories.js":1133,"./packages/MyButton/MyButton.stories.js":1144,"./packages/Welcome/Welcome.stories.js":1158};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1132},1133:function(module,exports,__webpack_require__){(function(module){var _interopRequireWildcard=__webpack_require__(494),_interopRequireDefault=__webpack_require__(47);Object.defineProperty(exports,"__esModule",{value:!0}),exports.actions=exports.task=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(136)),_extends2=_interopRequireDefault(__webpack_require__(222)),React=_interopRequireWildcard(__webpack_require__(0)),_reactNative=__webpack_require__(124),_styles=__webpack_require__(496),_reactNative2=__webpack_require__(152),_addonActions=__webpack_require__(221),_=_interopRequireDefault(__webpack_require__(1143));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty2.default)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var task={id:"1",title:"Test Task",state:"TASK_INBOX",updatedAt:new Date(2018,0,1,9,0)};exports.task=task;var actions={onPinTask:(0,_addonActions.action)("onPinTask"),onArchiveTask:(0,_addonActions.action)("onArchiveTask")};exports.actions=actions,(0,_reactNative2.storiesOf)("Task",module).addDecorator((function(story){return React.createElement(_reactNative.View,{style:_styles.styles.TaskBox},story())})).add("default",(function(){return React.createElement(_.default,(0,_extends2.default)({task:task},actions))})).add("pinned",(function(){return React.createElement(_.default,(0,_extends2.default)({task:_objectSpread(_objectSpread({},task),{},{state:"TASK_PINNED"})},actions))})).add("archived",(function(){return React.createElement(_.default,(0,_extends2.default)({task:_objectSpread(_objectSpread({},task),{},{state:"TASK_ARCHIVED"})},actions))}))}).call(this,__webpack_require__(78)(module))},1143:function(module,exports,__webpack_require__){var _interopRequireWildcard=__webpack_require__(494);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function Task(_ref){var _ref$task=_ref.task,id=_ref$task.id,title=_ref$task.title,onArchiveTask=(_ref$task.state,_ref.onArchiveTask);_ref.onPinTask;return React.createElement(_reactNative.SafeAreaView,{style:_styles.styles.ListItem},React.createElement(_reactNative.View,{style:_styles.styles.TaskBox},React.createElement(_reactNative.TouchableOpacity,{onPress:function onPress(){return onArchiveTask(id)}},React.createElement(_reactNative.View,{style:_styles.styles.CheckBox})),(null==title?void 0:title.length)>0&&React.createElement(_reactNative.TextInput,{style:_styles.styles.Title,value:title,editable:!1})),React.createElement(_reactNative.View,{style:_styles.styles.PinBox},React.createElement(_reactNative.TouchableOpacity,{onPress:function onPress(){return onArchiveTask(id)}},React.createElement(_reactNative.View,{style:_styles.styles.CheckBox}))))};var React=_interopRequireWildcard(__webpack_require__(0)),_reactNative=__webpack_require__(124),_styles=__webpack_require__(496)},1144:function(module,exports,__webpack_require__){(function(module){var _interopRequireDefault=__webpack_require__(47),_addonActions=__webpack_require__(221),_addonKnobs=__webpack_require__(1145),_reactNative=__webpack_require__(152),_react=_interopRequireDefault(__webpack_require__(0)),_reactNative2=__webpack_require__(124),_=_interopRequireDefault(__webpack_require__(1154)),_CenterView=_interopRequireDefault(__webpack_require__(1156)),_constants=__webpack_require__(497),action=function action(name,options){var constructedAction=(0,_addonActions.action)(name,options);return function(event){return constructedAction(event.persist())}};(0,_reactNative.storiesOf)("Components/MyButton",module).addDecorator((function(getStory){return _react.default.createElement(_CenterView.default,null,getStory())})).add("Primary",(function(){return _react.default.createElement(_.default,{variantColor:_constants.PRIMARY_COLOR,onPress:action("clicked-text")},_react.default.createElement(_reactNative2.Text,null,(0,_addonKnobs.text)("MyButton text","Hello MyButton")))})).add("Success",(function(){return _react.default.createElement(_.default,{variantColor:_constants.SUCCESS_COLOR,onPress:action("clicked-text")},_react.default.createElement(_reactNative2.Text,null,(0,_addonKnobs.text)("MyButton text","Hello MyButton")))})).add("Danger",(function(){return _react.default.createElement(_.default,{variantColor:_constants.DANGER_COLOR,onPress:action("clicked-text")},_react.default.createElement(_reactNative2.Text,null,(0,_addonKnobs.text)("MyButton text","Hello MyButton")))})).add("with some emoji",(function(){return _react.default.createElement(_.default,{onPress:action("clicked-emoji")},_react.default.createElement(_reactNative2.Text,null,"😀 😎 👍 💯"))}))}).call(this,__webpack_require__(78)(module))},1154:function(module,exports,__webpack_require__){var _interopRequireDefault=__webpack_require__(47);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=MyButton;var _react=_interopRequireDefault(__webpack_require__(0)),_propTypes=_interopRequireDefault(__webpack_require__(1)),_reactNative=__webpack_require__(124),_styles=_interopRequireDefault(__webpack_require__(1155));function MyButton(_ref){var variantColor=_ref.variantColor,onPress=_ref.onPress,children=_ref.children;return _react.default.createElement(_reactNative.View,{style:[_styles.default.buttonContainer,variantColor?{backgroundColor:variantColor}:null]},_react.default.createElement(_reactNative.TouchableHighlight,{onPress:onPress},_react.default.createElement(_reactNative.Text,{style:_styles.default.buttonText},children)))}MyButton.defaultProps={children:null,onPress:function onPress(){}},MyButton.propTypes={children:_propTypes.default.node,onPress:_propTypes.default.func}},1155:function(module,exports){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;exports.default={buttonContainer:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#722ed1",padding:10,borderRadius:5},buttonText:{color:"#fff"}}},1156:function(module,exports,__webpack_require__){var _interopRequireDefault=__webpack_require__(47);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=CenterView;var _react=_interopRequireDefault(__webpack_require__(0)),_propTypes=_interopRequireDefault(__webpack_require__(1)),_reactNative=__webpack_require__(124),_styles=_interopRequireDefault(__webpack_require__(1157));function CenterView(_ref){var children=_ref.children;return _react.default.createElement(_reactNative.View,{style:_styles.default.main},children)}CenterView.defaultProps={children:null},CenterView.propTypes={children:_propTypes.default.node}},1157:function(module,exports){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;exports.default={main:{flex:1,justifyContent:"center",alignItems:"center"}}},1158:function(module,exports,__webpack_require__){(function(module){var _interopRequireDefault=__webpack_require__(47),_react=_interopRequireDefault(__webpack_require__(0)),_addonLinks=__webpack_require__(489),_reactNative=__webpack_require__(152),_index=_interopRequireDefault(__webpack_require__(1159));(0,_reactNative.storiesOf)("Welcome",module).add("to Storybook",(function(){return _react.default.createElement(_index.default,{showApp:(0,_addonLinks.linkTo)("Button")})}))}).call(this,__webpack_require__(78)(module))},1159:function(module,exports,__webpack_require__){var _interopRequireDefault=__webpack_require__(47);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=Welcome;var _react=_interopRequireDefault(__webpack_require__(0)),_propTypes=_interopRequireDefault(__webpack_require__(1)),_reactNative=__webpack_require__(124);function Welcome(props){var styles={wrapper:{flex:1,padding:24,justifyContent:"center"},header:{fontSize:18,marginBottom:18},content:{fontSize:12,marginBottom:10,lineHeight:18}};return _react.default.createElement(_reactNative.View,{style:styles.wrapper},_react.default.createElement(_reactNative.Text,{style:styles.header},"Welcome to React Native Storybook"),_react.default.createElement(_reactNative.Text,{style:styles.content},"This is a UI Component development environment for your React Native app. Here you can display and interact with your UI components as stories. A story is a single state of one or more UI components. You can have as many stories as you want. In other words a story is like a visual test case."),_react.default.createElement(_reactNative.Text,{style:styles.content},'We have added some stories inside the "storybook/stories" directory for examples. Try editing the "storybook/stories/Welcome.js" file to edit this message.'))}Welcome.defaultProps={showApp:null},Welcome.propTypes={showApp:_propTypes.default.func}},496:function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.styles=void 0;var _reactNative=__webpack_require__(124),_constants=__webpack_require__(497),styles=_reactNative.StyleSheet.create({ListItem:{flexDirection:"row",flex:1,justifyContent:"space-between"},TaskBox:{flexDirection:"row",alignItems:"center"},CheckBox:{width:20,height:20,borderRadius:4,borderColor:_constants.PRIMARY_COLOR,borderWidth:1},Title:{marginLeft:10},PinBox:{}});exports.styles=styles},497:function(module,exports){Object.defineProperty(exports,"__esModule",{value:!0}),exports.DANGER_COLOR=exports.SUCCESS_COLOR=exports.PRIMARY_COLOR=void 0;exports.PRIMARY_COLOR="#722ed1";exports.SUCCESS_COLOR="#52c41a";exports.DANGER_COLOR="#f5222d"},526:function(module,exports,__webpack_require__){__webpack_require__(527),__webpack_require__(699),__webpack_require__(700),__webpack_require__(856),__webpack_require__(1072),__webpack_require__(1104),__webpack_require__(1108),__webpack_require__(1120),__webpack_require__(1122),__webpack_require__(1127),__webpack_require__(1129),module.exports=__webpack_require__(1131)},601:function(module,exports){},700:function(module,exports,__webpack_require__){__webpack_require__(152)}},[[526,1,2]]]);
//# sourceMappingURL=main.e44e1c430daef76fbeb8.bundle.js.map