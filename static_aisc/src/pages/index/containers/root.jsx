import React, { PropTypes, Component } from 'react';
// import { connect } from 'react-redux';
import { Section, Card, Breadcrumb, Button, Search, Select, Dropdown, Menu, Notice } from '@alife/aisc';
// import Layout from '@alife/aonec-layout';
// import { Translate } from '@alife/aisc-i18n'; // 国际化方法

// 布局相关组件从aonec-layout中引用，文档见：http://web.npm.alibaba-inc.com/package/@alife/aonec-layout
// const { Nav, Card, Section, Toolbar } = Layout;

const ButtonGroup = Button.Group;
const { Option } = Select;

class Root extends Component {
  static propTypes = {
    breadcrumb: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    breadcrumb: [],
  };

  componentDidMount() {}

  onSearch = (searchParams) => {
    console.log(searchParams);
  }

  onSelectChange = (value, data) => {
    console.log(value, data);
  }

  onMenuClick = (selectedKeys, menuItem, meta) => {
    console.log(selectedKeys, menuItem, meta);
  }

  render() {
    const { breadcrumb } = this.props;
    const subNavData = {
      navs: [
        {
          key: 'home',
          text: '导航操作区',
          active: true,
          link: '#',
        },
        {
          key: 'permit',
          text: '权限',
          link: '#',
        },
        {
          key: 'favorite',
          text: '常用链接',
          link: '#',
        },
      ],
    };

    return (
      <div>
        <div>
          <Breadcrumb dataSource={breadcrumb} />
        </div>
        <div>
          <Notice title="提示：" type="info">
            页面提示信息区（Notice组件）
          </Notice>
        </div>
        <div>
          <div>
            <div>
              <div>
                <Button type="primary">页面操作区</Button>
              </div>
              <div>
                <ButtonGroup>
                  <Dropdown triggerButton={<Button type="normal">批量操作</Button>} triggerType="click">
                    <Menu onClick={this.onMenuClick}>
                      <Menu.Item key="submit_cr">提交待发布</Menu.Item>
                      <Menu.Item key="close_cr">关闭变更</Menu.Item>
                    </Menu>
                  </Dropdown>
                  <Dropdown triggerButton={<Button type="normal">更多</Button>} triggerType="click">
                    <Menu onClick={this.onMenuClick}>
                      <Menu.Item key="other_1">更多操作 1</Menu.Item>
                      <Menu.Item key="other_2">更多操作 2</Menu.Item>
                      <Menu.Item key="other_3">更多操作 3</Menu.Item>
                    </Menu>
                  </Dropdown>
                </ButtonGroup>
              </div>
            </div>
            <div>
              <div>
                <Select onChange={this.onSelectChange} defaultValue="default">
                  <Option value="default">默认排序</Option>
                  <Option value="gmt_create|DESC">按创建时间降序</Option>
                  <Option value="gmt_create|ASC">按创建时间升序</Option>
                </Select>
              </div>
              <div>
                <Search placeholder="请输入关键词搜索" onSearch={this.onSearch} />
              </div>
            </div>
          </div>
        </div>
        <Section>
          <Card title="详细内容展示区（Card组件）" extra={<a href="#">更多操作</a>}>
            <p>
              <a
                href="https://udemo.alibaba-inc.com/system/extracted/f8/91/54/d2/6986a985c7a85f6e20b9a8d0/index.html"
                target="_blank"
                rel="noreferrer noopener"
              >
                点击查看Aone设计规范
              </a>
            </p>
            <p>
              <Button type="primary" onClick={this.props.changeLang}>
              </Button>
            </p>
          </Card>
        </Section>
      </div>
    );
  }
}

export default Root;
