/*
 * @Author: your name
 * @Date: 2020-12-28 18:16:59
 * @LastEditTime: 2020-12-28 18:23:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kReact\react-app\src\components\context\ConsumerPage.js
 */
import React, { Component } from 'react'
import { ConText, UserContext } from '../../Context';

export default class ConsumerPage extends Component {
    render() {
        return (
            <div>
                <ConText.Consumer>
                    {
                        theme => {
                            return <div className={theme.themeColor}>omg11
                            
                                <p>
                                    <UserContext.Consumer>
                                        {
                                            user => {
                                                return user.name
                                            }
                                        }
                                    </UserContext.Consumer>
                                </p>
                            </div>
                        }
                    }
                </ConText.Consumer>
            </div>
        )
    }
}
