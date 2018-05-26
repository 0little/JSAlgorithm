var reverseList = function(head) {
	if(head == null) return null;
	let headNode = null;
	function headList(cur, parent) {
		if(cur.next != null) {
			const next = cur.next;
			cur.next = parent;
			headList(next, cur);
		} else {
			headNode = cur;
			cur.next = parent;
		}
	}

	headList(head, null);
	return headNode;
}
