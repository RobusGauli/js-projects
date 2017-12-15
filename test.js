//here is the function that creates the linked list and traverse

const Node = (val, nextNode=null) => ({
  val,
  nextNode,
  inspect: () => console.log(`Node(${val})`)
});

const fromList = alist => {
  return alist.length === 1 ? Node(alist[0]):
    Node(alist[0], fromList(alist.slice(1, alist.length)))
}


const traverse = function*(node) {
  if (!node) {
    return;
  }
  yield node;
  yield *traverse(node.nextNode);
}






