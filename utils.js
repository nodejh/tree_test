var parseTreeJson = function(treeNodes){
  if (!treeNodes || !treeNodes.length) return;

   for (var i = 0, len = treeNodes.length; i < len; i++) {

        var childs = treeNodes[i].children;

        console.log(treeNodes[i].key);

        if(childs && childs.length > 0){
             parseTreeJson(childs);
        }
   }
};
const getSelectedNode = (key, tree) => {
  if (!tree || !tree.length) return;
  for (var i = 0, len = tree.length; i < len; i++) {
       if (key === tree[i].key) {
         return tree[i]
       } else if(tree[i].children && tree[i].children.length > 0){
         return getSelectedNode(key, tree[i].children);
       }
  }
};

module.exports = {
  parseTreeJson,
  getSelectedNode,
}