        function judge(stringX, stringY) {
            var arrayX = stringX.split(' ');
            var arrayY = stringY.split(' ');

            var side1 = (arrayX[0] - arrayX[1]) ** 2 + (arrayY[0] - arrayY[1]) ** 2;
            var side2 = (arrayX[0] - arrayX[2]) ** 2 + (arrayY[0] - arrayY[2]) ** 2;
            var side3 = (arrayX[0] - arrayX[3]) ** 2 + (arrayY[0] - arrayY[3]) ** 2;
            var anotherSide1;
            var anotherSide2;

            if(side1 === side2) {
                //如果两点重合，直接返回false
                if(arrayX[1] === arrayX[2] && arrayY[1] === arrayY[2]) {
                    return false;
                }
                //0和1、2相邻，和3相对
                anotherSide1 = (arrayX[2] - arrayX[3]) ** 2 + (arrayY[2] - arrayY[3]) ** 2;
                anotherSide2 = (arrayX[1] - arrayX[3]) ** 2 + (arrayY[1] - arrayY[3]) ** 2;
                if(anotherSide1 === side1 && anotherSide2 == side1) {
                    return judgeVertical(arrayX[0], arrayY[0], arrayX[1], arrayY[1], arrayX[2], arrayY[2]);
                } else {
                    return false; //不是正方形
                }
            } else if(side1 === side3) {
                //如果两点重合，直接返回false
                if(arrayX[1] === arrayX[3] && arrayY[1] === arrayY[3]) {
                    return false;
                }
                //0和1、3相邻，和2相对
                anotherSide1 = (arrayX[2] - arrayX[3]) ** 2 + (arrayY[2] - arrayY[3]) ** 2;
                anotherSide2 = (arrayX[1] - arrayX[2]) ** 2 + (arrayY[1] - arrayY[2]) ** 2;
                if(anotherSide1 === side1 && anotherSide2 == side1) {
                    return judgeVertical(arrayX[0], arrayY[0], arrayX[1], arrayY[1], arrayX[3], arrayY[3]);
                } else {
                    return false; //不是正方形
                }
            } else if(side2 === side3) {
                //如果两点重合，直接返回false
                if(arrayX[2] === arrayX[3] && arrayY[2] === arrayY[3]) {
                    return false;
                }
                //0和2、3相邻，和1相对
                anotherSide1 = (arrayX[1] - arrayX[3]) ** 2 + (arrayY[1] - arrayY[3]) ** 2;
                anotherSide2 = (arrayX[1] - arrayX[2]) ** 2 + (arrayY[1] - arrayY[2]) ** 2;
                if(anotherSide1 === side1 && anotherSide2 == side1) {
                    return judgeVertical(arrayX[0], arrayY[0], arrayX[2], arrayY[2], arrayX[3], arrayY[3]);
                } else {
                    return false; //不是正方形
                }
            } else {
                return false;
            }
        }

        function judgeVertical(x1, y1, x2, y2, x3, y3) {
            var k1;https://github.com/0little/IQ
            var k2;
            //第一个点是两条边的交点
            if(x1 === x2) {
                if(y3 === y1) {
                    return true; //垂直
                } else {
                    return false;
                }
            } else if(x1 === x3) {
                if(y1 === y2) {
                    return true;
                } else {
                    return false;
                }
            } else {
                k1 = (y2-y1) / (x2-x1);
                k2 = (y3-y1) / (x3-x1);
                if(k2*k1 === -1) {
                    return true;
                } else {
                    return false;
                }
            }
        }
