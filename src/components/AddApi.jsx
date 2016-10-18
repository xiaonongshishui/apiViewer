import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';


var AddApi = React.createClass({
  getInitialState:function(){
  	return {
  		open:false,
  		parameters:[]
  	}
  },
  handleOpen:function(){
  	var obj=Object.assign({},this.state);
  	obj.open = true;
  	this.setState(obj);
  },
  handleClose:function(){
  	var obj=Object.assign({},this.state);
  	obj.open = false;
  	this.setState(obj);
  },
  addApi:function(){
  	var name = document.getElementById("name").value;
  	var source = document.getElementById("source").value;
  	var parameters = [];
  	for(let i=0;i<this.state.parameters.length;i++){
  		let newPara = document.getElementById("parameters"+i).value;
  		parameters.push(newPara);
  	}
  	var newApi = {
  		name:name,
  		source:source,
  		parameters:parameters
  	};
  	this.props.handleAddApi(newApi);
  	this.setState({
  		open:false,
  		parameters:[]
  	});
  },
  addPara:function(){
  	let obj=Object.assign({},this.state);
  	obj.parameters.push("");
  	this.setState(obj);
  },
  render:function(){
  	const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Add"
        primary={true}
        onTouchTap={this.addApi}
      />,
    ];

    return (
    	<div style={{verticalAlign:"middle",marginLeft:"10px",marginTop:"-5px",display:"inline-block"}}>
        <FloatingActionButton mini={true}  onTouchTap={this.handleOpen}>
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          title="Please add the new API information"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
        <div>
        <TextField hintText="API name" id="name"/><br />
        <TextField hintText="API Source" id="source"/><br />
	    {
        	this.state.parameters.map(function(ele,i){
				return (<TextField hintText={"API parameters"+(i+1)} key={i} id={"parameters"+i} style={{margin:"5px"}}/>)
        	})
        }
	    <span>{this.state.parameters.length?"":"add parameters"}</span><FloatingActionButton 
	    mini={true} style={{verticalAlign:"middle",marginLeft:"10px",marginTop:"-3px"}} 
	    onTouchTap={this.addPara}>
	     <ContentAdd />
        </FloatingActionButton><br />
	    
	    </div>
         
        </Dialog>
        </div>
      );
  }
});
export default AddApi;