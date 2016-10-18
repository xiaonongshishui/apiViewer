import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Api from '../components/api.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

var App = React.createClass({
	getInitialState:function(){
		return {
			api:[
			{
				id:1,
				name:"firstApi",
				parameters:[],
				source:"/CompanyDesc.json",
				data:[]
			},
			{
				id:2,
				name:"secondApi",
				parameters:["a2","b2","c2","d2"],
				source:"http://172.22.136.192/api/ASHARES/CompanyDesc",
				data:[]
			}
			],
			activeId:1
		}
	},
	componentWillMount:function(){
		// var localState = localStorage.getItem("state") || this.state;
		// console.log("localState--------------");
		// console.log(localState);
		// this.setState(localState);
	},
	componentDidUpdate:function(){
		// localStorage.setItem("state",this.state);
	},
	setActiveId:function(id){
		console.log("app-----setid");
		console.log(id);
		this.setState(
			 {
				api: this.state.api,
				activeId:id
			}
		);
		console.log("after app set Id---------------");
		console.log(this.state.activeId);
	},
	handleAddApi:function(newApi){
		var state = Object.assign({},this.state);
		newApi.id = state.api.length;
		newApi.data = [];
		state.api.push(newApi);
		this.setState(state);
	},
	handleSetApiData:function(id,data){

		console.log('app handle');
		let i,len;

		for(i=0,len=this.state.api.length;i<len;i++){
			console.log(this.state.api[i]);
			if(this.state.api[i].id==id){
				let arr=Object.assign([],this.state.api),
					obj=Object.assign({},this.state.api[i]);
				obj.data=data.datatable;
				arr.splice(i,1,obj);
				console.log('app set state start');
				this.setState({
					api:arr,
					activeId:this.state.activeId
				});
				console.log(this.state);
				console.log('app set state over')
			}
		}
	},
	render:function(){
		console.log("app--------");
		console.log(this.state);
		return(
			<MuiThemeProvider>
				<Api api={this.state.api} setData={this.handleSetApiData} setActiveId={this.setActiveId} 
				activeId={this.state.activeId} handleAddApi={this.handleAddApi}/>
			</MuiThemeProvider>
			)
	}
});

export default App;