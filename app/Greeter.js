import React, {Component} from 'react';
import config from './config.json';
import styles from './index.css';//导入

console.log(styles);

let a='ddd';

class Greeter extends Component{
    render() {
        return (
            <div className={styles.root}>
                {config.greetText+a}
            </div>
        );
    }
}

export default Greeter
