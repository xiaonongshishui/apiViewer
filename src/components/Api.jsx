import React from 'react';
import ReactDOM from 'react-dom';
import AddApi from './AddApi.jsx';
import Parameter from './Parameter.jsx';
import Result from './Result.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Paper from 'material-ui/Paper';


const apiStyle = {
    margin: 10,
};
const paperStyle = {
    width: "100%",
    height: "auto",
    marginTop: "20px",
    marginBottom: "50px",
    padding: "20px",
    textAlign: 'left',
    display: 'inline-block'
};

var Api = React.createClass({
    setActiveId:function(id){
        console.log("api-----setid");
        console.log(id);
        this.props.setActiveId(id);
    },
    handleClick: function (ele, i) {
        //拿到id
        console.log(i);
        var id = i+1;
        this.setActiveId(id);
    },
    handleSubmit:function(data){
        console.log('click submit');
        this.props.setData(this.props.activeId,data);
    },
    handleAddApi:function(newApi){
        this.props.handleAddApi(newApi);
    },
    render: function () {
        console.log("api-----");
        
        var activeApi = this.props.api[this.props.activeId-1];
        console.log(activeApi);
        return (
            <div>
                <section>
                    {this.props.api.map(function (ele, i) {
                        return (

                            <RaisedButton key={i+1} label={ele.name} primary={true} style={apiStyle}
                                          onClick={this.handleClick.bind(this,ele,i)}/>

                        )
                    }, this)}

                    <AddApi handleAddApi={this.props.handleAddApi}/>
                </section>
                <section>
                    <Paper style={paperStyle} children={<Parameter activeApi={activeApi} setData={this.handleSubmit}/>}/>

                </section>
                <section>
                    <Result  activeApi={activeApi} />
                </section>
            </div>
        );
    }
});




export default Api;
