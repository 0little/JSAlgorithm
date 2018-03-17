//冒泡排序（从小到大排）
//注意：如果传入的参数是字符串，可利用split方法转化为数组，可是数组里的元素依旧是字符串，应在排序之前或者之后用parseInt方法将其转化为数值
    function maopao(array) {
        var len = array.length;
        var flag = 0; //标志在一轮遍历中有没有元素进行交换
        var tmp;

        for(var j = 1; j < len; j++) { //理论上要进行len-1次遍历
            flag = 0; //表示没有元素进行交换
            for(var i = 0; i < len-j; i++) {
                if(array[i] > array[i+1]) {
                    //交换位置
                    flag = 1;
                    tmp = array[i];
                    array[i] = array[i+1];
                    array[i+1] = tmp;
                }
            }

            if(flag == 0) {
                //说明没有交换过
                break;
            }
        }

        return array;
    }
