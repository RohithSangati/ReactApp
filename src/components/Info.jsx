import React from 'react';

class Info extends React.Component{
    render(){
        var cards=this.props.data.map(function(e){
            return(
                <p className='lnk'>{e}</p>
            )
        });
        return(
            <div className='info'>
                <p className='heading'>{this.props.heading}</p>
                {cards}
            </div>
        );
    }
}

export default Info;