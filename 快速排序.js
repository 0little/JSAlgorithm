function quicksort(array, start, end) {
        while(start >= end) {
            return;
        }
        var head = start;
        var tail = end;
        var base = array[start];
        var tmp = 0;

        while(head < tail) {
            //尾部标兵往前走直到遇到比基准数小的数或者是遇到头部的标兵才停下来
            while(head < tail && array[tail] >= base) {
                tail--;
            }
            //两个标兵相遇，即可跳出循环
            if(head >= tail) {
                break;
            }
            //头部标兵往后走直到遇到比基准数大的数或者是遇到尾部标兵才停下来
            while(head < tail && array[head] <= base) {
                head++;
            }
            //两个标兵相遇，即可跳出循环
            if(head >= tail) {
                break;
            }
            //两者没有相遇，交换他们两个的值，开始下一轮循环
            tmp = array[tail];
            array[tail] = array[head];
            array[head] = tmp;
        }

        //将相遇点的数与基准数互换
        tmp = array[start];
        array[start] = array[head];
        array[head] = tmp;

        //现在以基准数为界，比基准数小的数都在基准数左边，比基准数大的数都在基准数右边
        //我们将这两组数按这个方法排序
        quicksort(array, start, head-1);
        quicksort(array, head+1, end);
    }
