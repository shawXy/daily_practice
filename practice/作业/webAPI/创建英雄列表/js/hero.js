var datas = [
  { name: '司马懿', imgSrc: '01.jpg' },
  { name: '女娲', imgSrc: '02.jpg' },
  { name: '百里守约', imgSrc: '03.jpg' },
  { name: '亚瑟', imgSrc: '04.jpg' },
  { name: '虞姬', imgSrc: '05.jpg' },
  { name: '张良', imgSrc: '06.jpg' },
  { name: '安其拉', imgSrc: '07.jpg' },
  { name: '李白', imgSrc: '08.jpg' },
  { name: '阿珂', imgSrc: '09.jpg' },
  { name: '墨子', imgSrc: '10.jpg' },
  { name: '鲁班七号', imgSrc: '11.jpg' },
  { name: '嬴政', imgSrc: '12.jpg' },
  { name: '孙膑', imgSrc: '13.jpg' },
  { name: '周瑜', imgSrc: '14.jpg' },
  { name: '老夫子', imgSrc: '15.jpg' },
  { name: '狄仁杰', imgSrc: '16.jpg' },
  { name: '扁鹊', imgSrc: '17.jpg' },
  { name: '马可波罗', imgSrc: '18.jpg' },
  { name: '露娜', imgSrc: '19.jpg' },
  { name: '孙悟空', imgSrc: '20.jpg' }
];


var aclick = document.querySelector('a');
var ul = document.querySelector('.hero ul');
aclick.onclick = function() {
  for (var i = 0; i < datas.length; i++) {
    newli = document.createElement('li');
    ul.appendChild(newli);
    img = document.createElement('img');
    newli.appendChild(img);
    img.src = './uploads/heros/' + datas[i].imgSrc;
    img.title = datas[i].name;
  }
}