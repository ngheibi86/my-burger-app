import React, {Component} from "react";
import Toolbar from '../Navigation/Toolbar/Toolbar';

import Aux from "../../hoc/Aux";
import classes from "./Layoutx.module.css";
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component
{
    state={showSideDrawer:false}

    sideClosedDrawerHandler = ()=>{
        this.setState({showSideDrawer:false});
    }

    sideDrawerToggleHandler =()=>{
        this.setState((prevState) => {

            return{showSideDrawer: !prevState.showSideDrawer};
        });

        }

    render(){
    return (
        <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}></Toolbar>
        <SideDrawer
         open={this.state.showSideDrawer} 
         closed={this.sideClosedDrawerHandler}></SideDrawer>
        <main className={classes.Content}>{this.props.children}</main>
             </Aux>

    )}

};


export default Layout;