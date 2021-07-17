import React from 'react';
import './Styles.css';

class NavLinks extends React.Component {
    render() {
        return (
            <div className={this.props.cls}>
                <div className='linkName'>
                    <pre className='subName'>{this.props.subName}</pre>
                    <span className='mainName beforeText'>{this.props.beforeText}<i className={this.props.icon}><img src={this.props.img}/><span className='afterText'>{this.props.afterText}</span></i></span>
                </div>
            </div>

        );
    }
}

export default NavLinks;