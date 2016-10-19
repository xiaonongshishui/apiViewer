import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


var Parameter = React.createClass({
	handleSubmit:function(){
		let _this=this;
		_this.props.setFlag(true);
		$.get({
			url:_this.props.activeApi.source,
			success:function(data){
				_this.props.setFlag(false);
				_this.props.setData(_this.props.activeId,data);
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
		<RaisedButton label="submit" secondary={true} onClick={this.handleSubmit}/>
		</div>
		</div>
			
			)
	}
});
export default Parameter;











