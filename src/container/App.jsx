import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Api from '../components/api.jsx';
import Parameter from '../components/Parameter.jsx';
import Result from '../components/Result.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Paper from 'material-ui/Paper';

injectTapEventPlugin();

const paperStyle = {
    width: "100%",
    height: "auto",
    marginTop: "20px",
    marginBottom: "50px",
    padding: "20px",
    textAlign: 'left',
    display: 'inline-block'
};
var App = React.createClass({
	getInitialState:function(){
		return {
			api:[
			{
				id:1,
				name:"firstApi",
				parameters:[],
				source:"/CompanyDesc.json",
				data:[],
				startLoad:false
			},
			{
				id:2,
				name:"secondApi",
				parameters:["a2","b2","c2","d2"],
				source:"http://172.22.136.192/api/ASHARES/CompanyDesc",
				data:[],
				startLoad:false
			}
			],
			activeId:1,
			
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
	// set the ActiveId
	setActiveId:function(id){
		this.setState(
			 {
				api: this.state.api,
				activeId:id,
				startLoad:this.state.startLoad
			}
		);
	},
	// add new api information
	handleAddApi:function(newApi){
		var state = Object.assign({},this.state);
		newApi.id = state.api.length;
		newApi.data = [];
		state.api.push(newApi);
		this.setState(state);
	},
	//add the api data 
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
	handleLoad:function(flag){
		var state = Object.assign({},this.state);
		state.api[this.state.activeId-1].startLoad = flag;
		this.setState(state);
	},
	render:function(){
		console.log("app--------");
		console.log(this.state);
		let activeApi = this.state.api[this.state.activeId-1];
        console.log(activeApi);
		return(
			<MuiThemeProvider>
				<section>
					<Api api={this.state.api} setActiveId={this.setActiveId} 
					activeId={this.state.activeId} handleAddApi={this.handleAddApi}/>
	                <Paper style={paperStyle} children={<Parameter activeId={this.state.activeId}
	                       activeApi={activeApi} setData={this.handleSetApiData}
	                       setFlag={this.handleLoad}/>}/>
	                <Result  flag={activeApi.startLoad} activeApi={activeApi} eachPage={50}/>
                </section>
			</MuiThemeProvider>
			)
	}
});

export default App;