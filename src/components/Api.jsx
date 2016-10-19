import React from 'react';
import ReactDOM from 'react-dom';
import AddApi from './AddApi.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const apiStyle = {
    margin: 10,
};

var Api = React.createClass({
    setActiveId:function(id){
        console.log("api-----setid");
        console.log(id);
        this.props.setActiveId(id);
    },
    //get the activeId
    handleClick: function (ele, i) {
        console.log(i);
        console.log("this------");
        console.log(ele);
        var id = i+1;
        this.setActiveId(id);
    },
    handleAddApi:function(newApi){
        this.props.handleAddApi(newApi);
    },
    render: function () {
        console.log("api-----");
        return (
            <div>
                <section>
                    {this.props.api.map(function (ele, i) {
                        return (
                            <RaisedButton key={i+1} label={ele.name} 
                            primary={i==(this.props.activeId-1)?false:true} secondary={i==(this.props.activeId-1)?true:false} 
                            style={apiStyle} onClick={this.handleClick.bind(this,ele,i)}/>
                        )
                    }, this)}
                    <AddApi handleAddApi={this.props.handleAddApi}/>
                </section>
               
            </div>
        );
    }
});


export default Api;
