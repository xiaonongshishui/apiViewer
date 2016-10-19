import React from 'react';

const style={
  width:"20px"
};
//this.props.eachPage = 20;this.props.dataBody
var Pagination = React.createClass({
  handleClick:function(ele,i){
    var id = i+1;
    console.log("------"+id);
    this.props.setActivePageId(id);
  },
  render:function(){
    console.log("pagination");
    console.log(this.props.pageArr);
    return (
     <ul className="pagination">
     {
      this.props.pageArr.map(function(ele,i){
        return <li key={i} onClick={this.handleClick.bind(this,ele,i)}>{i+1}</li>
      },this)
     }
     </ul>
      );
  }
});
export default Pagination;