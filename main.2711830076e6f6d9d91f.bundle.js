(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(module,exports){Object.defineProperty(exports,"__esModule",{value:!0}),exports.DISABLED_COLOR=exports.DANGER_COLOR=exports.SUCCESS_COLOR=exports.PRIMARY_COLOR=void 0;exports.PRIMARY_COLOR="#722ed1";exports.SUCCESS_COLOR="#52c41a";exports.DANGER_COLOR="#f5222d";exports.DISABLED_COLOR="#bfbfbf"},1141:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(59),_clientLogger=__webpack_require__(40),_configFilename=__webpack_require__(1142);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1142:function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.parameters=void 0;__webpack_require__(105);exports.parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1143:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(121).configure)([__webpack_require__(1144)],module,!1)}).call(this,__webpack_require__(70)(module))},1144:function(module,exports,__webpack_require__){var map={"./components/Task/Task.stories.js":499,"./components/TaskList/TaskList.stories.js":1173,"./components/TaskScreen/TaskScreen.stories.js":1177,"./packages/MyButton/MyButton.stories.js":1187,"./packages/Welcome/Welcome.stories.js":1192};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1144},1161:function(module,exports,__webpack_require__){var _interopRequireWildcard=__webpack_require__(84),_interopRequireDefault=__webpack_require__(31);Object.defineProperty(exports,"__esModule",{value:!0}),exports.CheckSVG=void 0;var _extends2=_interopRequireDefault(__webpack_require__(93)),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__(165)),React=_interopRequireWildcard(__webpack_require__(0)),_reactNativeSvg=_interopRequireWildcard(__webpack_require__(340)),_constants=__webpack_require__(105);exports.CheckSVG=function CheckSVG(_ref){var _ref$width=_ref.width,width=void 0===_ref$width?50:_ref$width,_ref$height=_ref.height,height=void 0===_ref$height?50:_ref$height,_ref$color=_ref.color,color=void 0===_ref$color?_constants.PRIMARY_COLOR:_ref$color,rest=(0,_objectWithoutProperties2.default)(_ref,["width","height","color"]);return React.createElement(_reactNativeSvg.default,(0,_extends2.default)({},rest,{xmlns:"http://www.w3.org/2000/svg",width:width,height:height,viewBox:"0 0 24 24"}),React.createElement(_reactNativeSvg.Path,{fill:color,d:"M19.281 5.281L9 15.563 4.719 11.28 3.28 12.72l5 5 .719.687.719-.687 11-11z"}))}},1173:function(module,exports,__webpack_require__){(function(module){var _interopRequireWildcard=__webpack_require__(84),_interopRequireDefault=__webpack_require__(31);Object.defineProperty(exports,"__esModule",{value:!0}),exports.withCheckedTasks=exports.defaultTasks=void 0;var _extends2=_interopRequireDefault(__webpack_require__(93)),_toConsumableArray2=_interopRequireDefault(__webpack_require__(506)),_defineProperty2=_interopRequireDefault(__webpack_require__(79)),React=_interopRequireWildcard(__webpack_require__(0)),_reactNative=__webpack_require__(54),_styles=__webpack_require__(509),_reactNative2=__webpack_require__(121),_Task=__webpack_require__(499),_=__webpack_require__(510);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty2.default)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var defaultTasks=[_objectSpread(_objectSpread({},_Task.task),{},{id:"1",title:"Task 1"}),_objectSpread(_objectSpread({},_Task.task),{},{id:"2",title:"Task 2"}),_objectSpread(_objectSpread({},_Task.task),{},{id:"3",title:"Task 3"}),_objectSpread(_objectSpread({},_Task.task),{},{id:"4",title:"Task 4"}),_objectSpread(_objectSpread({},_Task.task),{},{id:"5",title:"Task 5"}),_objectSpread(_objectSpread({},_Task.task),{},{id:"6",title:"Task 6"})];exports.defaultTasks=defaultTasks;var withCheckedTasks=[].concat((0,_toConsumableArray2.default)(defaultTasks.slice(0,5)),[{id:"6",title:"Task 6 (checked)",state:"TASK_CHECKED"}]);exports.withCheckedTasks=withCheckedTasks,(0,_reactNative2.storiesOf)("TaskList",module).addDecorator((function(story){return React.createElement(_reactNative.View,{style:[_styles.styles.TaskBox,_styles.styles.TaskListBox]},story())})).add("default",(function(){return React.createElement(_.TaskList,(0,_extends2.default)({tasks:defaultTasks},_Task.actions))})).add("withCheckedTasks",(function(){return React.createElement(_.TaskList,(0,_extends2.default)({tasks:withCheckedTasks},_Task.actions))})).add("loading",(function(){return React.createElement(_.TaskList,(0,_extends2.default)({loading:!0,tasks:[]},_Task.actions))})).add("empty",(function(){return React.createElement(_.TaskList,(0,_extends2.default)({tasks:[]},_Task.actions))}))}).call(this,__webpack_require__(70)(module))},1174:function(module,exports,__webpack_require__){var _interopRequireWildcard=__webpack_require__(84),_interopRequireDefault=__webpack_require__(31);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.LoadingRow=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(79)),_react=_interopRequireWildcard(__webpack_require__(0)),_reactNative=__webpack_require__(54),_styles=__webpack_require__(1175);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty2.default)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var GlowView=function GlowView(props){var glowAnim=(0,_react.useRef)(new _reactNative.Animated.Value(0)).current;return(0,_react.useEffect)((function(){_reactNative.Animated.loop(_reactNative.Animated.timing(glowAnim,{toValue:1,duration:1500,easing:_reactNative.Easing.inOut(_reactNative.Easing.quad)})).start()}),[]),_react.default.createElement(_reactNative.Animated.View,{style:_objectSpread(_objectSpread({},props.style),{},{opacity:glowAnim})},props.children)},LoadingRow=function LoadingRow(_ref){var index=_ref.index,isLast=index===_ref.length-1;return _react.default.createElement(_reactNative.SafeAreaView,{key:index},_react.default.createElement(GlowView,null,_react.default.createElement(_reactNative.View,{style:_styles.styles.LoadingItem},_react.default.createElement(_reactNative.View,{style:_styles.styles.GlowCheckbox}),_react.default.createElement(_reactNative.Text,{style:_styles.styles.GlowText}))),!isLast&&_react.default.createElement(_reactNative.View,{style:_styles.styles.Divider}))};exports.LoadingRow=LoadingRow;var _default=LoadingRow;exports.default=_default},1175:function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.styles=void 0;var _reactNative=__webpack_require__(54),_constants=__webpack_require__(105),styles=_reactNative.StyleSheet.create({LoadingItem:{flexDirection:"row",padding:20},GlowCheckbox:{backgroundColor:_constants.DISABLED_COLOR,width:20,height:20},GlowText:{flex:1,backgroundColor:_constants.DISABLED_COLOR,marginLeft:10},Divider:{borderBottomColor:_constants.DISABLED_COLOR,borderBottomWidth:1}});exports.styles=styles},1176:function(module,exports,__webpack_require__){var _interopRequireWildcard=__webpack_require__(84),_interopRequireDefault=__webpack_require__(31);Object.defineProperty(exports,"__esModule",{value:!0}),exports.CheckSVG=void 0;var _extends2=_interopRequireDefault(__webpack_require__(93)),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__(165)),React=_interopRequireWildcard(__webpack_require__(0)),_reactNativeSvg=_interopRequireWildcard(__webpack_require__(340)),_constants=__webpack_require__(105);exports.CheckSVG=function CheckSVG(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?50:_ref$size,_ref$width=_ref.width,width=void 0===_ref$width?50:_ref$width,_ref$height=_ref.height,height=void 0===_ref$height?50:_ref$height,_ref$color=_ref.color,color=void 0===_ref$color?_constants.PRIMARY_COLOR:_ref$color,rest=(0,_objectWithoutProperties2.default)(_ref,["size","width","height","color"]);return React.createElement(_reactNativeSvg.default,(0,_extends2.default)({},rest,{xmlns:"http://www.w3.org/2000/svg",width:null!=size?size:width,height:null!=size?size:height,viewBox:"0 0 24 24"}),React.createElement(_reactNativeSvg.Path,{fill:color,d:"M19.281 5.281L9 15.563 4.719 11.28 3.28 12.72l5 5 .719.687.719-.687 11-11z"}))}},1177:function(module,exports,__webpack_require__){(function(module){var React=__webpack_require__(84)(__webpack_require__(0)),_reactNative=__webpack_require__(121),_recoil=__webpack_require__(341),_=__webpack_require__(1178);(0,_reactNative.storiesOf)("TaskScreen",module).addDecorator((function(story){return React.createElement(_recoil.RecoilRoot,null,story())})).add("default",(function(){return React.createElement(_.TaskScreen,null)})).add("error",(function(){return React.createElement(_.TaskScreen,{error:"Something"})}))}).call(this,__webpack_require__(70)(module))},1178:function(module,exports,__webpack_require__){var _interopRequireWildcard=__webpack_require__(84),_interopRequireDefault=__webpack_require__(31);Object.defineProperty(exports,"__esModule",{value:!0}),exports.TaskScreen=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(79)),_slicedToArray2=_interopRequireDefault(__webpack_require__(1179)),React=_interopRequireWildcard(__webpack_require__(0)),_reactNative=__webpack_require__(54),_recoil=__webpack_require__(341),_TaskList=__webpack_require__(510),_styles=__webpack_require__(1183),_atoms=__webpack_require__(1184),_svgs=__webpack_require__(1186);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty2.default)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}exports.TaskScreen=function TaskScreen(_ref){var error=_ref.error,_useRecoilState=(0,_recoil.useRecoilState)(_atoms.tasksState),_useRecoilState2=(0,_slicedToArray2.default)(_useRecoilState,2),tasks=_useRecoilState2[0],setTasks=_useRecoilState2[1];return error?React.createElement(_reactNative.SafeAreaView,{style:_styles.styles.TaskContainer},React.createElement(_reactNative.View,{style:_styles.styles.ErrorContainer},React.createElement(_svgs.CrySVG,{size:64}),React.createElement(_reactNative.Text,{style:_styles.styles.TitleMessage},"Oh no!"),React.createElement(_reactNative.Text,{style:_styles.styles.SubtitleMessage},"Something went wrong"))):React.createElement(_reactNative.SafeAreaView,{style:_styles.styles.TaskContainer},React.createElement(_TaskList.TaskList,{tasks:tasks,onCheckTask:function handleCheckTask(id){setTasks((function(prevState){return prevState.map((function(task){return _objectSpread(_objectSpread({},task),{},{state:task.id===id?"TASK_DEFAULT"===task.state?"TASK_CHECKED":"TASK_DEFAULT":task.state})}))}))}}))}},1183:function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.styles=void 0;var _reactNative=__webpack_require__(54),_constants=__webpack_require__(105),styles=_reactNative.StyleSheet.create({TaskContainer:{backgroundColor:_constants.PRIMARY_COLOR},FlatListContainer:{backgroundColor:"#fff",margin:42},TitleMessage:{fontSize:16,fontWeight:"bold",marginTop:10},SubtitleMessage:{fontSize:14,marginTop:5},ErrorContainer:{backgroundColor:"#fff",justifyContent:"center",alignItems:"center",minHeight:365,margin:42}});exports.styles=styles},1184:function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0});var _tasks=__webpack_require__(1185);Object.keys(_tasks).forEach((function(key){"default"!==key&&"__esModule"!==key&&(key in exports&&exports[key]===_tasks[key]||Object.defineProperty(exports,key,{enumerable:!0,get:function get(){return _tasks[key]}}))}))},1185:function(module,exports,__webpack_require__){var _interopRequireDefault=__webpack_require__(31);Object.defineProperty(exports,"__esModule",{value:!0}),exports.tasksState=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(79)),_recoil=__webpack_require__(341);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty2.default)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var task={id:"1",title:"Take a coffee",state:"TASK_DEFAULT",updatedAt:new Date(2018,0,1,9,0)},initTask=[_objectSpread(_objectSpread({},task),{},{id:"1",title:"Task 1"}),_objectSpread(_objectSpread({},task),{},{id:"2",title:"Task 2"}),_objectSpread(_objectSpread({},task),{},{id:"3",title:"Task 3"}),_objectSpread(_objectSpread({},task),{},{id:"4",title:"Task 4"}),_objectSpread(_objectSpread({},task),{},{id:"5",title:"Task 5"}),_objectSpread(_objectSpread({},task),{},{id:"6",title:"Task 6"})],tasksState=(0,_recoil.atom)({key:"tasksState",default:initTask});exports.tasksState=tasksState},1186:function(module,exports,__webpack_require__){var _interopRequireWildcard=__webpack_require__(84),_interopRequireDefault=__webpack_require__(31);Object.defineProperty(exports,"__esModule",{value:!0}),exports.CrySVG=void 0;var _extends2=_interopRequireDefault(__webpack_require__(93)),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__(165)),React=_interopRequireWildcard(__webpack_require__(0)),_reactNativeSvg=_interopRequireWildcard(__webpack_require__(340)),_constants=__webpack_require__(105);exports.CrySVG=function CrySVG(_ref){var _ref$color=_ref.color,color=void 0===_ref$color?_constants.PRIMARY_COLOR:_ref$color,_ref$size=_ref.size,size=void 0===_ref$size?50:_ref$size,rest=(0,_objectWithoutProperties2.default)(_ref,["color","size"]);return React.createElement(_reactNativeSvg.default,(0,_extends2.default)({width:size,height:size},rest,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50"}),React.createElement(_reactNativeSvg.Path,{fill:color,d:"M25 2C12.309 2 2 12.309 2 25s10.309 23 23 23 23-10.309 23-23C48 12.363 37.775 2.103 25.158 2.016A1 1 0 0025 2zm0 2c11.61 0 21 9.39 21 21s-9.39 21-21 21S4 36.61 4 25 13.39 4 25 4zm-8 14a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3zm16 0a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3zm-8 11c-6.444 0-10.707 4.293-10.707 4.293a1 1 0 101.414 1.414S19.444 31 25 31c5.556 0 9.293 3.707 9.293 3.707a1 1 0 101.414-1.414S31.444 29 25 29z"}))}},1187:function(module,exports,__webpack_require__){(function(module){var _interopRequireDefault=__webpack_require__(31),_addonActions=__webpack_require__(225),_addonKnobs=__webpack_require__(503),_reactNative=__webpack_require__(121),_react=_interopRequireDefault(__webpack_require__(0)),_reactNative2=__webpack_require__(54),_=_interopRequireDefault(__webpack_require__(1188)),_CenterView=_interopRequireDefault(__webpack_require__(1190)),_constants=__webpack_require__(105),action=function action(name,options){var constructedAction=(0,_addonActions.action)(name,options);return function(event){return constructedAction(event.persist())}};(0,_reactNative.storiesOf)("Components/MyButton",module).addDecorator((function(getStory){return _react.default.createElement(_CenterView.default,null,getStory())})).add("Primary",(function(){return _react.default.createElement(_.default,{variantColor:_constants.PRIMARY_COLOR,onPress:action("clicked-text")},_react.default.createElement(_reactNative2.Text,null,(0,_addonKnobs.text)("MyButton text","Hello MyButton")))})).add("Success",(function(){return _react.default.createElement(_.default,{variantColor:_constants.SUCCESS_COLOR,onPress:action("clicked-text")},_react.default.createElement(_reactNative2.Text,null,(0,_addonKnobs.text)("MyButton text","Hello MyButton")))})).add("Danger",(function(){return _react.default.createElement(_.default,{variantColor:_constants.DANGER_COLOR,onPress:action("clicked-text")},_react.default.createElement(_reactNative2.Text,null,(0,_addonKnobs.text)("MyButton text","Hello MyButton")))})).add("with some emoji",(function(){return _react.default.createElement(_.default,{onPress:action("clicked-emoji")},_react.default.createElement(_reactNative2.Text,null,"😀 😎 👍 💯"))}))}).call(this,__webpack_require__(70)(module))},1188:function(module,exports,__webpack_require__){var _interopRequireDefault=__webpack_require__(31);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=MyButton;var _react=_interopRequireDefault(__webpack_require__(0)),_propTypes=_interopRequireDefault(__webpack_require__(1)),_reactNative=__webpack_require__(54),_styles=_interopRequireDefault(__webpack_require__(1189));function MyButton(_ref){var variantColor=_ref.variantColor,onPress=_ref.onPress,children=_ref.children;return _react.default.createElement(_reactNative.View,{style:[_styles.default.buttonContainer,variantColor?{backgroundColor:variantColor}:null]},_react.default.createElement(_reactNative.TouchableHighlight,{onPress:onPress},_react.default.createElement(_reactNative.Text,{style:_styles.default.buttonText},children)))}MyButton.defaultProps={children:null,onPress:function onPress(){}},MyButton.propTypes={children:_propTypes.default.node,onPress:_propTypes.default.func}},1189:function(module,exports){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;exports.default={buttonContainer:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#722ed1",padding:10,borderRadius:5},buttonText:{color:"#fff"}}},1190:function(module,exports,__webpack_require__){var _interopRequireDefault=__webpack_require__(31);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=CenterView;var _react=_interopRequireDefault(__webpack_require__(0)),_propTypes=_interopRequireDefault(__webpack_require__(1)),_reactNative=__webpack_require__(54),_styles=_interopRequireDefault(__webpack_require__(1191));function CenterView(_ref){var children=_ref.children;return _react.default.createElement(_reactNative.View,{style:_styles.default.main},children)}CenterView.defaultProps={children:null},CenterView.propTypes={children:_propTypes.default.node}},1191:function(module,exports){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;exports.default={main:{flex:1,justifyContent:"center",alignItems:"center"}}},1192:function(module,exports,__webpack_require__){(function(module){var _interopRequireDefault=__webpack_require__(31),_react=_interopRequireDefault(__webpack_require__(0)),_addonLinks=__webpack_require__(494),_reactNative=__webpack_require__(121),_index=_interopRequireDefault(__webpack_require__(1193));(0,_reactNative.storiesOf)("Welcome",module).add("to Storybook",(function(){return _react.default.createElement(_index.default,{showApp:(0,_addonLinks.linkTo)("Button")})}))}).call(this,__webpack_require__(70)(module))},1193:function(module,exports,__webpack_require__){var _interopRequireDefault=__webpack_require__(31);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=Welcome;var _react=_interopRequireDefault(__webpack_require__(0)),_propTypes=_interopRequireDefault(__webpack_require__(1)),_reactNative=__webpack_require__(54);function Welcome(props){var styles={wrapper:{flex:1,padding:24,justifyContent:"center"},header:{fontSize:18,marginBottom:18},content:{fontSize:12,marginBottom:10,lineHeight:18}};return _react.default.createElement(_reactNative.View,{style:styles.wrapper},_react.default.createElement(_reactNative.Text,{style:styles.header},"Welcome to React Native Storybook"),_react.default.createElement(_reactNative.Text,{style:styles.content},"This is a UI Component development environment for your React Native app. Here you can display and interact with your UI components as stories. A story is a single state of one or more UI components. You can have as many stories as you want. In other words a story is like a visual test case."),_react.default.createElement(_reactNative.Text,{style:styles.content},'We have added some stories inside the "storybook/stories" directory for examples. Try editing the "storybook/stories/Welcome.js" file to edit this message.'))}Welcome.defaultProps={showApp:null},Welcome.propTypes={showApp:_propTypes.default.func}},499:function(module,exports,__webpack_require__){(function(module){var _interopRequireWildcard=__webpack_require__(84),_interopRequireDefault=__webpack_require__(31);Object.defineProperty(exports,"__esModule",{value:!0}),exports.actions=exports.task=void 0;var _extends2=_interopRequireDefault(__webpack_require__(93)),_defineProperty2=_interopRequireDefault(__webpack_require__(79)),React=_interopRequireWildcard(__webpack_require__(0)),_reactNative=__webpack_require__(54),_styles=__webpack_require__(502),_reactNative2=__webpack_require__(121),_addonActions=__webpack_require__(225),_addonKnobs=__webpack_require__(503),_=__webpack_require__(504);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty2.default)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var task={id:"1",title:"Take a coffee",state:"TASK_DEFAULT",updatedAt:new Date(2018,0,1,9,0)};exports.task=task;var actions={onCheckTask:(0,_addonActions.action)("onCheckTask")};exports.actions=actions,(0,_reactNative2.storiesOf)("Task",module).addDecorator(_addonKnobs.withKnobs).addDecorator((function(story){return React.createElement(_reactNative.View,{style:_styles.styles.TaskBox},story())})).add("default",(function(){return React.createElement(_.Task,(0,_extends2.default)({task:(0,_addonKnobs.object)("task",_objectSpread(_objectSpread({},task),{},{state:"TASK_DEFAULT"}))},actions))})).add("checked",(function(){return React.createElement(_.Task,(0,_extends2.default)({task:_objectSpread(_objectSpread({},task),{},{state:"TASK_CHECKED"})},actions))})).add("disabled",(function(){return React.createElement(_.Task,(0,_extends2.default)({task:_objectSpread(_objectSpread({},task),{},{state:"TASK_DISABLED"})},actions))})).add("long title",(function(){return React.createElement(_.Task,(0,_extends2.default)({task:_objectSpread(_objectSpread({},task),{},{state:"TASK_DEFAULT",title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})},actions))}))}).call(this,__webpack_require__(70)(module))},502:function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.styles=void 0;var _reactNative=__webpack_require__(54),_constants=__webpack_require__(105),styles=_reactNative.StyleSheet.create({TaskContainer:{flexDirection:"row",flex:1,justifyContent:"space-between"},TaskBox:{flex:1,flexDirection:"row",alignItems:"center"},CheckBox:{width:20,height:20,borderRadius:4,borderColor:_constants.PRIMARY_COLOR,borderWidth:1,justifyContent:"center",alignItems:"center"},CheckBoxWithDisabled:{borderColor:_constants.DISABLED_COLOR},Title:{color:_constants.PRIMARY_COLOR,marginLeft:10},TitleWithDisabled:{color:_constants.DISABLED_COLOR}});exports.styles=styles},504:function(module,exports,__webpack_require__){var _interopRequireWildcard=__webpack_require__(84);Object.defineProperty(exports,"__esModule",{value:!0}),exports.Task=void 0;var React=_interopRequireWildcard(__webpack_require__(0)),_reactNative=__webpack_require__(54),_styles=__webpack_require__(502),_svgs=__webpack_require__(1161);exports.Task=function Task(_ref){var _ref$task=_ref.task,id=_ref$task.id,title=_ref$task.title,state=_ref$task.state,color=_ref.color,onCheckTask=_ref.onCheckTask;return React.createElement(_reactNative.SafeAreaView,{style:_styles.styles.TaskContainer},React.createElement(_reactNative.TouchableOpacity,{style:_styles.styles.TaskBox,onPress:function onPress(){return onCheckTask(id)},disabled:"TASK_DISABLED"===state},React.createElement(_reactNative.View,null,{TASK_DEFAULT:React.createElement(_reactNative.View,{style:_styles.styles.CheckBox}),TASK_CHECKED:React.createElement(_reactNative.View,{style:[_styles.styles.CheckBox,{color:color}]},React.createElement(_svgs.CheckSVG,{color:color})),TASK_DISABLED:React.createElement(_reactNative.View,{style:[_styles.styles.CheckBox,_styles.styles.CheckBoxWithDisabled]})}[state]),React.createElement(_reactNative.Text,{style:[_styles.styles.Title,"TASK_DISABLED"===state?_styles.styles.TitleWithDisabled:null],numberOfLines:1,ellipsizeMode:"tail",accessibilityState:{selected:"TASK_CHECKED"===state,disabled:"TASK_DISABLED"===state}},title)))}},509:function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.styles=void 0;var _reactNative=__webpack_require__(54),_constants=__webpack_require__(105),styles=_reactNative.StyleSheet.create({TaskContainer:{backgroundColor:_constants.PRIMARY_COLOR},FlatListContainer:{backgroundColor:"#fff",margin:42},TaskItem:{padding:20},Divider:{borderBottomColor:_constants.DISABLED_COLOR,borderBottomWidth:1},TitleMessage:{fontSize:16,fontWeight:"bold",marginTop:10},SubtitleMessage:{fontSize:14,marginTop:5},EmptyContainer:{backgroundColor:"#fff",justifyContent:"center",alignItems:"center",minHeight:365}});exports.styles=styles},510:function(module,exports,__webpack_require__){var _interopRequireWildcard=__webpack_require__(84),_interopRequireDefault=__webpack_require__(31);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.TaskList=void 0;var _extends2=_interopRequireDefault(__webpack_require__(93)),React=_interopRequireWildcard(__webpack_require__(0)),_reactNative=__webpack_require__(54),_Task=__webpack_require__(504),_styles=__webpack_require__(509),_LoadingRow=__webpack_require__(1174),_svgs=__webpack_require__(1176),TaskList=function TaskList(_ref){var loading=_ref.loading,tasks=_ref.tasks,events={onCheckTask:_ref.onCheckTask};if(loading)return React.createElement(_reactNative.SafeAreaView,{style:_styles.styles.TaskContainer},React.createElement(_reactNative.View,{style:_styles.styles.FlatListContainer},Array.from(Array(6).keys()).map((function(index){return React.createElement(_LoadingRow.LoadingRow,{index:index,length:6})}))));return React.createElement(_reactNative.SafeAreaView,{style:_styles.styles.TaskContainer},React.createElement(_reactNative.FlatList,{contentContainerStyle:_styles.styles.FlatListContainer,data:tasks,keyExtractor:function keyExtractor(task){return"".concat(task.id)},renderItem:function renderItem(_ref2){var item=_ref2.item;return React.createElement(_reactNative.View,{key:null==item?void 0:item.id,style:_styles.styles.TaskItem},React.createElement(_Task.Task,(0,_extends2.default)({task:item},events)))},ItemSeparatorComponent:function Divider(){return React.createElement(_reactNative.View,{style:_styles.styles.Divider})},ListEmptyComponent:React.createElement((function Empty(){return React.createElement(_reactNative.View,{style:_styles.styles.EmptyContainer},React.createElement(_svgs.CheckSVG,{size:64}),React.createElement(_reactNative.Text,{style:_styles.styles.TitleMessage},"You have no tasks"),React.createElement(_reactNative.Text,{style:_styles.styles.SubtitleMessage},"Sit back and relax"))}),null)}))};exports.TaskList=TaskList;var _default=TaskList;exports.default=_default},539:function(module,exports,__webpack_require__){__webpack_require__(540),__webpack_require__(712),__webpack_require__(713),__webpack_require__(869),__webpack_require__(1084),__webpack_require__(1116),__webpack_require__(1120),__webpack_require__(1132),__webpack_require__(1134),__webpack_require__(1139),__webpack_require__(1141),module.exports=__webpack_require__(1143)},614:function(module,exports){},713:function(module,exports,__webpack_require__){__webpack_require__(121)}},[[539,1,2]]]);
//# sourceMappingURL=main.2711830076e6f6d9d91f.bundle.js.map