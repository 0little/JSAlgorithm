var hasCycle = function(head) {

	if(head === null) {
		return false;
	}

	var p1 = head;
	var p2 = head;

	while(p1.next && p2.next) {
		p1 = p1.next;
		if(p2.next.next === null) {
			return false;
		} else {
			p2 = p2.next.next;
		}

		if(p1 == p2) {
			return true;
		}
	}

	return false;
}
