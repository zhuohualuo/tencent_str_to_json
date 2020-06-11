let input = `tag1id | tag1name | tag2id | tag2name
1000 | 购物 | 104 | 淘宝
1000 | 购物 | 102 | 拼多多
1000 | 购物 | 103 | 京东
3000 | 工作 | 106 | 企业微信
3000 | 工作 | 107 | 腾讯会议
2000 | 旅游 | 104  | 携程
2000 | 旅游 | 105 | 去哪儿`;

let a = getJson(input)
console.log(a);
function getJson(input) {
    let data = input.split('\n')
    let firstArr = data.shift()
    let map = []
    let temp = {}
    let obj = {}
    data.forEach(item => {
        let bodyArr = item.split('|')
        let value = bodyArr[0].trim()
        let label = bodyArr[1]

        let value2 = bodyArr[2]
        let label2 = bodyArr[3]
        debugger
        if (!temp[value]) {
            obj = {
                label,
                value,
                children: []
            }
            temp[value] = obj.children
            obj.children.push(JSON.stringify({ label: label2, value: value2 })) //JSON.stringify() 方法将一个 JavaScript 值（对象或者数组）转换为一个 JSON 字符串 obj.children是一个引用数据类型，随着temp[value]改变而改变，每次加进去的是object，也是一个引用数据类型，读不出来，所以用字符串表示git a
            map.push(obj)
        } else {
            temp[value].push(JSON.stringify({ label: label2, value: value2 }))
        }
    })
    return map
}