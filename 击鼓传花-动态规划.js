(function() {
    var line;
    while (line = read_line()) {
        line = line.split(' ');

        print(solve(parseInt(line[0]), parseInt(line[1])));
    }
})();

//n表示人数，m表示传递次数
function solve(n, m) {
    //用一个对象将序号和传递次数存起来，可避免重复运算
    var hash = {};
    //x表示开始传递的那个人的序号
    function go(x, m) {
        if (!(x + '-' + m in hash)) {
            if (m === 0) {
                return x === 0 ? 1 : 0;
            }
            hash[x + '-' + m] = (x - 1) % n === (x + 1) % n ? go((x - 1) % n, m - 1) : go((x - 1) % n, m - 1) + go((x + 1) % n, m - 1);
        }
        return hash[x + '-' + m];
    }

    return go(0, m);
}
