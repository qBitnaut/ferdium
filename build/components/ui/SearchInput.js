"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=require("tslib"),jsx_runtime_1=require("react/jsx-runtime"),react_1=require("react"),mobx_react_1=require("mobx-react"),classnames_1=(0,tslib_1.__importDefault)(require("classnames")),lodash_1=require("lodash"),js_1=require("@mdi/js"),icon_1=require("./icon");class SearchInput extends react_1.Component{constructor(e){super(e),this.input=null,this.state={value:e.value},this.throttledOnChange=(0,lodash_1.debounce)(this.throttledOnChange,this.props.throttleDelay)}componentDidMount(){const{autoFocus:e}=this.props;e&&this.input.focus()}onChange(e){const{throttle:t,onChange:s}=this.props,{value:n}=e.target;this.setState({value:n}),t?(e.persist(),this.throttledOnChange(n)):s(n)}throttledOnChange(e){const{onChange:t}=this.props;t(e)}reset(){const{onReset:e}=this.props;this.setState({value:""}),e()}render(){const{className:e,name:t,placeholder:s}=this.props,{value:n}=this.state;return(0,jsx_runtime_1.jsxs)("div",{className:(0,classnames_1.default)([e,"search-input"]),children:[(0,jsx_runtime_1.jsxs)("label",{htmlFor:t,children:[(0,jsx_runtime_1.jsx)(icon_1.Icon,{icon:js_1.mdiMagnify},void 0),(0,jsx_runtime_1.jsx)("input",{name:t,id:t,type:"text",placeholder:s,value:n,onChange:e=>this.onChange(e),ref:e=>{this.input=e}},void 0)]},void 0),n.length>0&&(0,jsx_runtime_1.jsx)("span",{onClick:()=>this.reset(),children:(0,jsx_runtime_1.jsx)(icon_1.Icon,{icon:js_1.mdiCloseCircleOutline},void 0)},void 0)]},void 0)}}SearchInput.defaultProps={value:"",placeholder:"",className:"",name:"searchInput",throttle:!1,throttleDelay:250,onChange:()=>null,onReset:()=>null,autoFocus:!1},exports.default=(0,mobx_react_1.observer)(SearchInput);