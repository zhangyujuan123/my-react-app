import React, { Component } from 'react'
import { NavBar, Carousel,SearchBar ,Grid} from 'antd-mobile';

const data1 = [{num:1,txt:'桌'},{num:2,txt:'床'},{num:3,txt:'椅'},{num:4,txt:'几'},{num:5,txt:'柜'},{num:6,txt:'书架'},{num:7,txt:'沙发'},{num:8,txt:'家居饰品'},{num:9,txt:'户外家具'},{num:10,txt:'全部分类'}].map((idx) => ({
    icon: 'images/shop'+idx.num+'.jpg',
    txt:idx.txt
  }));
const data2=[{num:1,txt:'Top Art Studio 欧式风格精细...',money:'¥39.95'},{num:2,txt:'顺顺工艺欧式风格塑料外框黑...',money:"¥83.99"}].map((idx)=>({
    icon:'images/store'+idx.num+'.png',
    txt:idx.txt,
    money:idx.money
}))

export default class ShangCheng extends Component {
    render() {
        return (
            <div>
                 <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#ffffff'}}
                    rightContent={[
                        <i className='iconfont icon-gouwuche' style={{ marginRight: '16px' }} />
                    ]}
                    >商城</NavBar>
                <Carousel
                autoplay={true}
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
                >
                {[1,2,3,4].map(val => (
                    <a
                    key={val}
                    style={{  width: '100%', height:176,position:'relative' }}
                    >
                        <img
                            src='images/store.png'
                            alt=""
                            style={{ width: '100%', height:'100%',verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                            <SearchBar placeholder="输入关键字搜索" maxLength={8} style={{width:'80%',position:"absolute",top:'2px',left:'10%',background:'rgba(77,61,59,0.3)'}}/>
                        </a>
                    ))}
                </Carousel>
                <Grid data={data1}
                    columnNum={5}
                    renderItem={dataItem => (
                        <div style={{ padding: '12.5px',height:'100%' ,width:'100%'}}>
                        <img src={dataItem.icon} style={{ width: '90%', height: '90%' }} alt="" />
                        <div style={{ color: 'black',fontSize:'1em', marginTop: '12px',height:'10%'}}>
                            <span style={{}}>{dataItem.txt}</span>
                        </div>
                        </div>
                    )}
                    hasLine={false}
                    />
                <Grid data={data2}
                    columnNum={2}
                    itemStyle={{background:'#eeeeee'}}
                    renderItem={dataItem => (
                        <div style={{ padding: '12.5px' }}>
                        <img src={dataItem.icon} style={{ width: '100%', height: '100%' }} alt="" />
                        <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                            <span>{dataItem.txt}</span>
                            <p>{dataItem.money}</p>
                        </div>
                        </div>
                    )}
                    hasLine={false}
                    />
            </div>
        )
    }
}
