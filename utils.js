const getSelectedNode = (key, tree) => {
  // for(let i = 0; i < tree.length; i+=1) {
  //     if (tree[i].children && tree[i].children.length > 0) {
  //         getSelectedNode(key, tree[i].children);
  //     }
  //     if (tree[i].key === key) return tree[i];
  // }
  const selectedNode = tree.find(element => {
      if (element.children && element.children.length > 0) {
          return getSelectedNode(key, element.children);
      }
      // if (element.key === key) return element;
      return element.key === key;
  });
  return selectedNode;
};

module.exports = {
  getSelectedNode,
}