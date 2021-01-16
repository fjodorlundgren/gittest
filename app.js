var Knoten = /** @class */ (function () {
    function Knoten(data, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.data = data;
        this.left = left;
        this.right = right;
    }
    return Knoten;
}());
var BST = /** @class */ (function () {
    function BST() {
        this.root = null;
    }
    BST.prototype.add = function (data) {
        var node = this.root;
        if (node === null) {
            this.root = new Knoten(data);
            return;
        }
        else {
            var searchTree_1 = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Knoten(data);
                        return;
                    }
                    else if (node.left !== null) {
                        return searchTree_1(node.left);
                    }
                }
                else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Knoten(data);
                        return;
                    }
                    else if (node.right !== null) {
                        return searchTree_1(node.right);
                    }
                }
                else {
                    return null;
                }
            };
            return searchTree_1(node);
        }
    };
    BST.prototype.findMin = function () {
        var current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    };
    BST.prototype.findMax = function () {
        var current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    };
    BST.prototype.find = function (data) {
        var current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            }
            else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    };
    BST.prototype.isPresent = function (data) {
        var current = this.root;
        while (current) {
            if (data === current.data) {
                return true;
            }
            if (data < current.data) {
                current = current.left;
            }
            else {
                current = current.right;
            }
        }
        return false;
    };
    BST.prototype.remove = function (data) {
        var removeNode = function (node, data) {
            if (node == null) {
                return null;
            }
            if (data == node.data) {
                if (node.left == null && node.right == null) {
                    return null;
                }
                if (node.left == null) {
                    return node.right;
                }
                if (node.right == null) {
                    return node.left;
                }
                var tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            }
            else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            }
            else {
                node.right = removeNode(node.right, data);
                return node;
            }
        };
        this.root = removeNode(this.root, data);
    };
    return BST;
}());
var bst = new BST();
bst.add(9);
bst.add(4);
