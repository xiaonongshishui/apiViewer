import React from 'react';
import Pagination from './Pagination.jsx';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import CircularProgress from 'material-ui/CircularProgress';
const loadingStyle={
  textAlign:"center"
}


var Result = React.createClass({
  getInitialState:function(){
    return {
      activePageId:1,
      pageArr:[],
      dataHead:[],
      dataBody:[]
    }
  },
  setActivePageId:function(activePageId){
    console.log("++++++++"+activePageId);
    this.setState({
      activePageId:activePageId,
      pageArr:this.state.pageArr,
      dataHead:this.state.dataHead,
      dataBody:this.state.dataBody
    });
    console.log(this.state);
  },
  componentWillReceiveProps:function(nextProps){
    console.log("shouldComponentUpdate---------start");
    var data = nextProps.activeApi.data;
    console.log(data);
    var dataHead = data[0]?data[0]:[];
    var dataBody = data;
    dataBody.shift();
    console.log(dataBody);
    var length = dataBody.length;
    var eachPage = this.props.eachPage;
    var pages = length / eachPage;
    var pageArr = [];
    for(let i=0;i<pages-1;i++){
      pageArr.push(i+1);
    }
   // console.log(dataBodyActive);
   this.setState({
    activePageId:this.state.activePageId,
    pageArr:pageArr,
    dataHead:dataHead,
    dataBody:dataBody
   });
   console.log(this.state);
   
  },
  render:function(){
    console.log("result-------111");
    var dataBodyActive;
    dataBodyActive = this.state.dataBody.slice(this.props.eachPage*(this.state.activePageId-1),this.props.eachPage*(this.state.activePageId));
    return (
      <div>
      {
        this.props.flag?<div style={loadingStyle}><CircularProgress size={60} thickness={7} color={"rgb(255, 64, 129)"}/></div>
        :<div><Table showCheckboxes={false}>
         <TableBody showRowHover={true} displayRowCheckbox={false}> 
         <TableRow>
            {
              this.state.dataHead.map(function(ele,i){
                return <TableRowColumn key={i}>{ele}</TableRowColumn>
              })
            }
           </TableRow>
         
         {
          dataBodyActive.map(function(ele,i){
            
            return (
              <TableRow key={i}>
              {
                ele.map(function(ele,i){
                    return <TableRowColumn key={i}>{ele}</TableRowColumn>
                  })
              }

              </TableRow>
              )
          })
         }
        
         </TableBody>
        </Table>
        <Pagination pageArr={this.state.pageArr}
        activePageId={this.state.activePageId} 
        setActivePageId={this.setActivePageId}/></div>
      }
      </div>
       
      );
  }
});
export default Result;