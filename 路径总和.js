var hasPathSum = function(root, sum) {
    let a =(root, xsum)=> {
        if(root == null) return false;
        xsum += root.val;
        if(root.left == null && root.right==null){
            return xsum==sum;
        }
        return a(root.left, xsum) || a(root.right,xsum);
    }
    return a(root,0);
};
