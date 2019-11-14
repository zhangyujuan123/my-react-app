import { TabBar } from 'antd-mobile';
import React from 'react';
import AppHome from './AppHome';
import LingGan from './LingGan';
import ShangCheng from './ShangCheng';

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    };
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#3fcccb"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<i style={{fontSize:'22',lineHeight:'22px'}} className='iconfont icon-shouye'></i>
            }
            selectedIcon={
                <i style={{fontSize:'22',lineHeight:'22px'}} className='iconfont icon-shouye'></i>
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
          >
            <AppHome/>
          </TabBar.Item>
          <TabBar.Item
            icon={
                <i style={{fontSize:'22',lineHeight:'22px'}} className='iconfont icon-linggan'></i>
            }
            selectedIcon={
                <i style={{fontSize:'22',lineHeight:'22px'}} className='iconfont icon-linggan'></i>
            }
            title="灵感"
            key="Friend"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <LingGan/>
          </TabBar.Item>
          <TabBar.Item
            icon={
                <i style={{fontSize:'22',lineHeight:'22px'}} className='iconfont icon-shangcheng'></i>
            }
            selectedIcon={
                <i style={{fontSize:'22',lineHeight:'22px'}} className='iconfont icon-shangcheng'></i>
            }
            title="商城"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            <ShangCheng/>
          </TabBar.Item>
          
          <TabBar.Item
            icon={<i style={{fontSize:'22',lineHeight:'22px'}} className='iconfont icon-wode'></i>}
            selectedIcon={<i style={{fontSize:'22',lineHeight:'22px'}} className='iconfont icon-wode'></i>}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
              我的
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
