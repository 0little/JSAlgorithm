/*输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中
都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重
建二叉树并返回。*/

/* function TreeNode(x) {
 this.val = x;
 this.left = null;
 this.right = null;javascript:void(0);
 } */
function reConstructBinaryTree(pre, vin) {
    if(pre.length == 0 || vin.length == 0) {
        return null;
    }

    var tree = new TreeNode(pre[0]);
    var tmpIndex = vin.indexOf(pre[0]); //获取父节点在中序遍历中的位置
    var preLeft = pre.slice(1, tmpIndex+1); //获取左子树的先序遍历
    var preRight = pre.slice(tmpIndex+1); //获取右子树的先序遍历
    var vinLeft = vin.slice(0, tmpIndex); //获取左子树的中序遍历
    var vinRight = vin.slice(tmpIndex+1); //获取右子树的中序遍历

    tree.left = reConstructBinaryTree(preLeft, vinLeft);
    tree.right = reConstructBinaryTree(preRight, vinRight);

    return tree;
}