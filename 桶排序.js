//桶排序
    function tong(str, range) {
        //假定待排序数字范围是0~range-1
        var array = str.split(" ");
        var bucket = [];
        var result = [];
        var len = array.length;

        for(var i = 0; i < len; i++) {
            if(bucket[array[i]] == undefined) {
                bucket[array[i]] = 1;
            } else {
                bucket[array[i]]++;
            }
        }

        for(i = 0; i < range; i++) {
            while(bucket[i] > 0) {
                result.push(i);
                bucket[i]--;
            }
        }

        return result;
    }
