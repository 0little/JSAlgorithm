function reverse(list){
       var p=list.head,q=null;
       while(p.next!==null){
           q=p.next;
           p.next=q.next;
           q.next=list.head.next;
           list.head.next=q;
       }
       return list;
  }
