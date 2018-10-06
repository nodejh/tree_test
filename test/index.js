const assert = require('assert');
const utils = require('../utils');

const { getSelectedNode, getSelectedNode1, getSelectedNode2 } = utils;

const notes = [
  {
      key: '0-0',
      title: 'test11',
      topping: true,
      children: [],
      articles: [
          {
              title: '文档标题示例5',
              content:
                  'Racing car sprays burning fuel into crowd.Racing car sprays burning fuel into crowd.Racing car sprays burning fuel into crowd.',
              date: '2018-06-28',
          },
          {
              title: '文档标题示例6',
              content:
                  'Racing car sprays burning fuel into crowd.Racing car sprays burning fuel into crowd.',
              date: '2018-06-28',
              topping: true,
          },
          {
              title: '文档标题示例7',
              content: 'Racing car sprays burning fuel into crowd.',
              date: '2018-06-28',
          },
          {
              title: '文档标题示例8',
              content: 'Racing car sprays burning fuel into crowd.',
              date: '2018-06-28',
          },
      ],
  },
  { key: '0-1', title: 'test12', topping: true, children: [], articles: [] },
  {
      key: '0-2',
      title: 'test13',
      children: [
          { key: '0-2-0', title: 'test3-1' },
          {
              key: '0-2-1',
              title: 'test3-2',
              children: [
                  {
                      key: '0-2-1-0',
                      title: 'test3-3',
                  },
              ],
          },
      ],
      articles: [
          {
              title: '文档标题示例55',
              content: 'Racing car sprays burning fuel into crowd.',
              date: '2018-06-28',
          },
          {
              title: '文档标题示例47',
              content: 'Racing car sprays burning fuel into crowd.',
              date: '2018-06-28',
              topping: true,
          },
      ],
  },
  {
      key: '0-3',
      title: 'test4',
      articles: [
          {
              title: '文档标题示例4',
              content: 'Racing car sprays burning fuel into crowd.',
              date: '2018-06-28',
          },
      ],
  },
  {
      key: '0-4',
      title: 'test5',
      articles: [
          {
              title: '文档标题示例4',
              content: 'Racing car sprays burning fuel into crowd.',
              date: '2018-06-28',
          },
      ],
  },
  {
      key: '0-5',
      title: 'test6',
      articles: [
          {
              title: '文档标题示例4',
              content: 'Racing car sprays burning fuel into crowd.',
              date: '2018-06-28',
          },
      ],
  },
  {
      key: '0-6',
      title: 'trash',
      trash: true,
      articles: [
          {
              title: '文档标题示例4',
              content: 'Racing car sprays burning fuel into crowd.',
              date: '2018-06-28',
          },
      ],
  },
];


describe('getSelectedNode', function() {
  it('获取子节点 0-0', function() {
    const res = getSelectedNode(notes, '0-0');
    const node =  {
      key: '0-0',
      title: 'test11',
      topping: true,
      children: [],
      articles: [
          {
              title: '文档标题示例5',
              content:
                  'Racing car sprays burning fuel into crowd.Racing car sprays burning fuel into crowd.Racing car sprays burning fuel into crowd.',
              date: '2018-06-28',
          },
          {
              title: '文档标题示例6',
              content:
                  'Racing car sprays burning fuel into crowd.Racing car sprays burning fuel into crowd.',
              date: '2018-06-28',
              topping: true,
          },
          {
              title: '文档标题示例7',
              content: 'Racing car sprays burning fuel into crowd.',
              date: '2018-06-28',
          },
          {
              title: '文档标题示例8',
              content: 'Racing car sprays burning fuel into crowd.',
              date: '2018-06-28',
          },
      ],
    };
    assert.deepEqual(res, node);
  })

  it('获取子节点 0-1', function() {
    const res = getSelectedNode(notes, '0-1');
    const node =  { key: '0-1', title: 'test12', topping: true, children: [], articles: [] };
    assert.deepEqual(res, node);
  })

  it('获取子节点 0-2', function() {
    const res = getSelectedNode(notes, '0-2');
    const node = {
      key: '0-2',
      title: 'test13',
      children: [
          { key: '0-2-0', title: 'test3-1' },
          {
              key: '0-2-1',
              title: 'test3-2',
              children: [
                  {
                      key: '0-2-1-0',
                      title: 'test3-3',
                  },
              ],
          },
      ],
      articles: [
          {
              title: '文档标题示例55',
              content: 'Racing car sprays burning fuel into crowd.',
              date: '2018-06-28',
          },
          {
              title: '文档标题示例47',
              content: 'Racing car sprays burning fuel into crowd.',
              date: '2018-06-28',
              topping: true,
          },
      ],
    };
    assert.deepEqual(res, node);
  })


  it('获取子节点 0-2-0', function() {
    const res = getSelectedNode(notes, '0-2-0');
    const node =  { key: '0-2-0', title: 'test3-1' };
    assert.deepEqual(res, node);
  })
})

describe('getSelectedNode1', function() {
    it('获取子节点 0-0', function() {
      const res = getSelectedNode1(notes, '0-0');
      const node =  {
        key: '0-0',
        title: 'test11',
        topping: true,
        children: [],
        articles: [
            {
                title: '文档标题示例5',
                content:
                    'Racing car sprays burning fuel into crowd.Racing car sprays burning fuel into crowd.Racing car sprays burning fuel into crowd.',
                date: '2018-06-28',
            },
            {
                title: '文档标题示例6',
                content:
                    'Racing car sprays burning fuel into crowd.Racing car sprays burning fuel into crowd.',
                date: '2018-06-28',
                topping: true,
            },
            {
                title: '文档标题示例7',
                content: 'Racing car sprays burning fuel into crowd.',
                date: '2018-06-28',
            },
            {
                title: '文档标题示例8',
                content: 'Racing car sprays burning fuel into crowd.',
                date: '2018-06-28',
            },
        ],
      };
      assert.deepEqual(res, node);
    })
  
    it('获取子节点 0-1', function() {
      const res = getSelectedNode1(notes, '0-1');
      const node =  { key: '0-1', title: 'test12', topping: true, children: [], articles: [] };
      assert.deepEqual(res, node);
    })
  
    it('获取子节点 0-2', function() {
      const res = getSelectedNode1(notes, '0-2');
      const node = {
        key: '0-2',
        title: 'test13',
        children: [
            { key: '0-2-0', title: 'test3-1' },
            {
                key: '0-2-1',
                title: 'test3-2',
                children: [
                    {
                        key: '0-2-1-0',
                        title: 'test3-3',
                    },
                ],
            },
        ],
        articles: [
            {
                title: '文档标题示例55',
                content: 'Racing car sprays burning fuel into crowd.',
                date: '2018-06-28',
            },
            {
                title: '文档标题示例47',
                content: 'Racing car sprays burning fuel into crowd.',
                date: '2018-06-28',
                topping: true,
            },
        ],
      };
      assert.deepEqual(res, node);
    })
  
  
    it('获取子节点 0-2-0', function() {
      const res = getSelectedNode1(notes, '0-2-0');
      const node =  { key: '0-2-0', title: 'test3-1' };
      assert.deepEqual(res, node);
    })
  })

  describe('getSelectedNode2', function() {
    it('获取子节点 0-0', function() {
      const res = getSelectedNode2(notes, '0-0');
      const node =  {
        key: '0-0',
        title: 'test11',
        topping: true,
        children: [],
        articles: [
            {
                title: '文档标题示例5',
                content:
                    'Racing car sprays burning fuel into crowd.Racing car sprays burning fuel into crowd.Racing car sprays burning fuel into crowd.',
                date: '2018-06-28',
            },
            {
                title: '文档标题示例6',
                content:
                    'Racing car sprays burning fuel into crowd.Racing car sprays burning fuel into crowd.',
                date: '2018-06-28',
                topping: true,
            },
            {
                title: '文档标题示例7',
                content: 'Racing car sprays burning fuel into crowd.',
                date: '2018-06-28',
            },
            {
                title: '文档标题示例8',
                content: 'Racing car sprays burning fuel into crowd.',
                date: '2018-06-28',
            },
        ],
      };
      assert.deepEqual(res, node);
    })
  
    it('获取子节点 0-1', function() {
      const res = getSelectedNode2(notes, '0-1');
      const node =  { key: '0-1', title: 'test12', topping: true, children: [], articles: [] };
      assert.deepEqual(res, node);
    })
  
    it('获取子节点 0-2', function() {
      const res = getSelectedNode2(notes, '0-2');
      const node = {
        key: '0-2',
        title: 'test13',
        children: [
            { key: '0-2-0', title: 'test3-1' },
            {
                key: '0-2-1',
                title: 'test3-2',
                children: [
                    {
                        key: '0-2-1-0',
                        title: 'test3-3',
                    },
                ],
            },
        ],
        articles: [
            {
                title: '文档标题示例55',
                content: 'Racing car sprays burning fuel into crowd.',
                date: '2018-06-28',
            },
            {
                title: '文档标题示例47',
                content: 'Racing car sprays burning fuel into crowd.',
                date: '2018-06-28',
                topping: true,
            },
        ],
      };
      assert.deepEqual(res, node);
    })
  
  
    it('获取子节点 0-2-0', function() {
      const res = getSelectedNode2(notes, '0-2-0');
      const node =  { key: '0-2-0', title: 'test3-1' };
      assert.deepEqual(res, node);
    })
  })