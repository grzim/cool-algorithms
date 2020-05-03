/*
  Algorithm to return the root node of a binary search tree that matches the given preorder traversal.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const createBST = (number, node) => {
    if(number < node.val) {
        if(node.left === null) {
            node.left = new TreeNode(number)
        }
        else {
            createBST(number, node.left)
        }
    }
    else {
        if(node.right === null) {
            node.right = new TreeNode(number)
        }
        else {
            createBST(number, node.right)
        }
    }
};

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
const bstFromPreorder = function(preorder) {
    const head = new TreeNode(preorder[0]);
    for(let i=1;i<preorder.length;i++) {
        createBST(preorder[i], head)
    }
    return head
};
