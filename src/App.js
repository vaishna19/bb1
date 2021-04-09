import { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import './App.css';
import { Layout, Menu, Breadcrumb, Card, List, Carousel } from 'antd';
import { ShoppingCartOutlined, NotificationOutlined, SkinTwoTone } from '@ant-design/icons';
import productData from './App.json';
import data from './App.json';
import BigBazar from './img/bb.png';
import Cart from './img/shopping-basket.png';
function App() {
  // const { Search } = Input;
  const { Meta } = Card;
  //const [dataArr,setDataArr]
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;
  const [num, setNum] = useState(0);
  const [form, setForm] = useState(true);
  const [productDataArr, setProductDataArr] = useState(productData.Array);
  const incNum = (e, item) => {
    console.log(e, item);
    item.count = item.count + 1;
    productDataArr[item.id - 1] = item;
    const array = [...productDataArr]
    console.log(productDataArr)
    setProductDataArr(array);
  }
  useEffect(() => {
    console.log('productDataArr', productDataArr)
  }, [productDataArr]);
  const decNum = (e, item) => {
    item.count = item.count - 1;
    productDataArr[item.id - 1] = item;
    const array = [...productDataArr]
    console.log(productDataArr)
    setProductDataArr(array);
  }
  const onClickFn = (x) => {
    console.log(x);
  };
  // const onSubmit = () => {
  //   setNum(false);
  // }
  return (
    <Layout>
      <Header className="header">
        <div className="pic">
          <img src={BigBazar} className="bigbazar" height="46px" alt="Bigbazar Logo" />
          <span className="border">
            <span className="menu">
              <img src={"https://icon-library.com/images/menu-icon-white-png/menu-icon-white-png-27.jpg"} className="menu" height="36px" alt="menu" />
              <span className="shop">shop by</span>
            </span>
          </span>
          <div>
            <div className="searchbar" width="87px">
              <img src={"https://cdn.icon-icons.com/icons2/2551/PNG/512/search_icon_152764.png"} className="searchicon" alt="" height="1px" />
              <input type="text" placeholder="What would you like to buy today?" autocomplete="off" className="search" /><span className="into" aria-hidden="true">×</span></div>
          </div>
          <div className="basketborder">
            <img src={Cart} className="basket" left="112px" alt="Cart" />
            <span className="zero">0</span>
          </div>
          <img src={"https://cflare.shop.bigbazaar.com/assets/desktop/images/customer/default-user-image.jpg"} className="man" height="43px" class="right" alt="login" />
          <span className="login">Log In</span>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<ShoppingCartOutlined />} title="Category">
              <Menu.Item key="1">Kurtas &amp; kurtis</Menu.Item>
              <Menu.Item key="2">Tops,tees &amp; shirts</Menu.Item>
              <Menu.Item key="3">Palazoos &amp; jeans</Menu.Item>
              <Menu.Item key="4">Leggings &amp; salwars</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<SkinTwoTone />} title="fruits &amp; vegetables">
              <Menu.Item key="5">Pomegrante</Menu.Item>
              <Menu.Item key="6">Grapes</Menu.Item>
              <Menu.Item key="7">Orange</Menu.Item>
              <Menu.Item key="8">Pineapple</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={< NotificationOutlined />} title="cakes">
              <Menu.Item key="9">plum</Menu.Item>
              <Menu.Item key="10">bluberry</Menu.Item>
              <Menu.Item key="11">blackcurrant</Menu.Item>
              <Menu.Item key="12">Apple pie</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '1px 0', left: '64px' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          {/* <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>, */}
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <List
              grid={{
                gutter: 0,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 3,
                xxl: 3,
              }}
              dataSource={data.Array}
              renderItem={item => (
                <List.Item>
                  <Card
                    onClick={(e) => onClickFn(item.name)}
                  //cover={<img alt={item.name} src={item.url} />}
                  >
                    {/* <Meta title={item.name} description={item.price} /> */}
                    {/* <title>={item.title}</title> */}
                    <img src={item.image} className="image-container" alt="shopping cart" />
                    <p className="img" text align="center">{item.name}</p>
                    <div className="cross" text align="left"><del>₹ 1399</del></div>
                    <div className="discount">
                      <span title="Rs.100 Off" text align="left">Rs.100 Off</span>
                    </div>
                    <p className="pic" text-align="left">{item.price}</p>
                    <span className="discountedpercentage" title="30% OFF">30%OFF</span>
                    {!item.count ? (
                      <div className="add">
                        <span className="size">M</span><button onClick={(e) => incNum(e, item)} className="button">Add</button>
                      </div>
                    ) : (
                        <>
                          <button onClick={(e) => incNum(e, item)}>+</button>
                          {item.count}
                          <button onClick={(e) => decNum(e, item)}>-</button>
                        </>
                      )
                    }
                    {/* {!item.count ? (
                      <div>
                        <button className="add" onClick={(e) => incNum(e, item)}>Add</button>
                      </div>
                    ) : (
                        <>
                          <button onClick={(e) => incNum(e, item)}>+</button>
                          {item.count}
                          <button onClick={(e) => decNum(e, item)}>-</button>
                        </>
                      )} */}
                  </Card>
                </List.Item>
              )}
            />,
  </Content>
        </Layout>
      </Layout>
    </Layout >
  );
}
export default App;