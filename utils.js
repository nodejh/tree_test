// 递归
const getSelectedNode2 = (tree, key) => {
  if (!tree || !tree.length) return;
  for (var i = 0, len = tree.length; i < len; i++) {
       if (key === tree[i].key) {
         return tree[i]
       } else if(tree[i].children && tree[i].children.length > 0){
         return getSelectedNode(tree[i].children, key);
       }
  }
};

//非递归深度优先实现
var getSelectedNode1 = function (treeNodes, key) {
  if (!treeNodes || !treeNodes.length) return;

  var stack = [];

  //先将第一层节点放入栈
  for (var i = 0, len = treeNodes.length; i < len; i++) {
      stack.push(treeNodes[i]);
  }

  var item;

  while (stack.length) {
      item = stack.shift();

        // 如果找到了对应的节点，则返回
        if (item.key === key) {
            return item;
        }

      //如果该节点有子节点，继续添加进入栈顶
      if (item.children && item.children.length) {
          stack = item.children.concat(stack);
      }
  }
};


 //非递归广度优先实现
const getSelectedNode = (treeNodes, key) => {
    if (!treeNodes || !treeNodes.length) return;

    var stack = [];

    //先将第一层节点放入栈
    for (var i = 0, len = treeNodes.length; i < len; i++) {
        stack.push(treeNodes[i]);
    }

    var item;

    while (stack.length) {
        item = stack.shift();

        // 如果找到了对应的节点，则返回
        if (item.key === key) {
          return item;
        }
        
        //如果该节点有子节点，继续添加进入栈底
        if (item.children && item.children.length) {
            stack = stack.concat(item.children);
        }
    }
};


module.exports = {
  getSelectedNode,
  getSelectedNode1,
  getSelectedNode2,
}