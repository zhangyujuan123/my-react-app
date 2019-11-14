import React, { Component } from 'react'
import { NavBar, Icon,Tabs,Carousel, Grid ,Card} from 'antd-mobile';



const data1 = [{num:'h_03',text:'热门品牌'},{num:'h_05',text:'私人搭配师'},{num:'h_07',text:'选购指南'}].map((idx) => ({
    icon: 'images/'+idx.num+'.png',
    content:idx.text
  }));
const data2=[{name:'tuijian'}].map((idx)=>({
    icon:'images/'+idx.name+'.jpg'
}));
export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#ffffff'}}
                    >住吧家居</NavBar>
                    <Carousel
                        autoplay={true}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        >
                        {[1,2].map(val => (
                            <img
                                src={'images/home'+val+'.png'}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        ))}
                        </Carousel>
                        <Grid data={data1}
                            columnNum={3}
                            renderItem={dataItem => (
                                <div style={{ position:'relative',width:'100%',height:'100%',padding: '12.5px'}}>
                                    <img src={dataItem.icon} style={{width:"100%",height:'100%'}} alt="" />
                                </div>
                            )}
                            hasLine={false}
                            />
                        <p style={{marginLeft:'12.5px'}}>热门推荐</p>
                        <Card style={{position:'relative',overflow:'hidden'}}>
                            <Card.Body style={{margin:'0',padding:'0',width:'100%'}}>
                                <img src='images/tuijian.jpg' style={{width:'100%',height:'100%'}}/>
                            </Card.Body>
                            <Card.Footer content={<p style={{position:'absolute',bottom:'5px',color:'white',width:'100%',textAlign:'center'}}>什么是英伦装修风格 英伦风家装 英伦风格装修效果图</p>} />
                        </Card>
            </div>
        )
    }
}
