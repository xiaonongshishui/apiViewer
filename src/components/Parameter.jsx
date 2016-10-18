import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


var Parameter = React.createClass({
	handleSubmit:function(){
		let _this=this;
		$.get({
			url:_this.props.activeApi.source,
			success:function(data){
				_this.props.setData(data);
			}
		});
	},
	render:function(){
		console.log("parameter------render");
		console.log(this.props.activeApi);
		return (
		<div>
		<h3 style={{marginBottom:"0"}}>{this.props.activeApi.parameters.length?"Parameters":"No Parameters, please Submit directly"}</h3>
		{this.props.activeApi.parameters.map(function(ele,i){
			return (
				<TextField key={i} hintText="Hint Text" floatingLabelText={ele} style={{margin:"10px",marginTop:"0px"}}/>
				)
		})}
		<div style={{float:"right"}}>
		<RaisedButton label="submit" primary={true} onClick={this.handleSubmit}/>
		</div>
		</div>
			
			)
	}
});
export default Parameter;











