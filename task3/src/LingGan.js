import React, { Component } from 'react'
import { NavBar, Icon,Tabs, WhiteSpace, Badge,Grid} from 'antd-mobile';

const tabs = [
    { title: '推荐'},
    { title:'冬季'},
    { title: '宜家'},
    {title:'小清新'},
    {title:'小户型'},
    {title:'个性色彩'},
]
const data1 = [{num:1,text:'橙色律动'},{num:2,text:'儿童房'},{num:3,text:'翻滚吧，地毯君'},{num:4,text:'角落里的遐想'},{num:5,text:'橙色律动'},{num:5,text:'橙色律动'}].map((idx) => ({
    icon: '/images/l'+idx.num+'.png',
    content:idx.text
  }));
export default class LingGan extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#ffffff'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px'}} />,
                    ]}
                    >灵感</NavBar>
                <Tabs tabs={tabs}
                initialPage={0}
                tabBarPosition="bottom"
                renderTab={tab => <span>{tab.title}</span>}
                >
                </Tabs>
                <Grid data={data1}
                    columnNum={2}
                    itemStyle={{background:'#eeeeee'}}
                    renderItem={dataItem => (
                        <div style={{ padding: '12.5px' }}>
                        <img src={dataItem.icon} style={{ width: '80%', height: '80%' }} alt="" />
                        <div style={{ color: '#888', fontSize: '14px', marginTop: '12px'}}>
                            <img src="/images/p1.png" style={{maxWidth:'10%',maxHeight:'10%',position:'absolute',left:'15%',bottom:'12%'}}/>
                            <span style={{color:'#686868'}}>{dataItem.content}</span>
                            <img src='/images/xin.png' style={{float:'right',marginRight:'35px'}}/>
                        </div>
                        </div>
                    )}
                    hasLine={false}
                    />
            </div>
        )
    }
}
