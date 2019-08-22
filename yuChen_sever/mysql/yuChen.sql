SET NAMES UTF8;
DROP DATABASE IF EXISTS yuChen;
CREATE DATABASE yuChen CHARSET=UTF8;
USE yuChen;
-- 用户表
-- CREATE TABLE yuChen_index(
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     lid INT,
--     src VARCHAR(100),
--     pname VARCHAR(100),
--     paddr VARCHAR(100),
--     phone VARCHAR(30),
--     num INT
-- );
-- INSERT INTO applet_index VALUES
-- (null,'','https://caijiami.club:3000/index/shu.jpg','','','',1);

-- 图片表
CREATE TABLE yuChen_image(
    id INT PRIMARY KEY AUTO_INCREMENT,
    lid INT,
    src VARCHAR(100),
    title VARCHAR(100)
);
INSERT INTO yuChen_image VALUES
(null,1,'https://caijiami.club:4550/index/swiper1.jpg',''),
(null,1,'https://caijiami.club:4550/index/swiper2.jpg',''),
(null,1,'https://caijiami.club:4550/index/swiper3.jpg',''),
(null,2,'https://caijiami.club:4550/order/lvyou1.jpg','上海游泳馆'),
(null,2,'https://caijiami.club:4550/order/lvyou2.jpg','东京樱花季'),
(null,2,'https://caijiami.club:4550/order/lvyou3.jpg','三亚海滩浪'),
(null,3,'https://caijiami.club:4550/gou/1.jpg','非洲哈巴狗'),
(null,3,'https://caijiami.club:4550/gou/2.jpg','美国哈巴狗'),
(null,3,'https://caijiami.club:4550/gou/3.jpg','牧羊犬'),
(null,3,'https://caijiami.club:4550/gou/4.jpg','八哥'),
(null,3,'https://caijiami.club:4550/gou/5.jpg','小金毛'),
(null,3,'https://caijiami.club:4550/gou/6.jpg','小花狗'),
(null,3,'https://caijiami.club:4550/gou/7.jpg','金毛两兄弟'),
(null,3,'https://caijiami.club:4550/gou/8.jpg','布偶狗'),
(null,3,'https://caijiami.club:4550/gou/9.jpg','带花色狗'),
(null,4,'https://caijiami.club:4550/mao/1.jpg','小花猫'),
(null,4,'https://caijiami.club:4550/mao/2.jpg','小黄毛'),
(null,4,'https://caijiami.club:4550/mao/3.jpg','卖萌猫'),
(null,4,'https://caijiami.club:4550/mao/4.jpg','惊呆了猫'),
(null,4,'https://caijiami.club:4550/mao/5.jpg','猫捉老鼠'),
(null,4,'https://caijiami.club:4550/mao/6.jpg','布偶猫'),
(null,4,'https://caijiami.club:4550/mao/7.jpg','生无可恋猫'),
(null,4,'https://caijiami.club:4550/mao/8.jpg','震惊了猫'),
(null,4,'https://caijiami.club:4550/mao/9.jpg','害羞猫'),
(null,5,'https://caijiami.club:4550/ai/1.JPG',''),
(null,5,'https://caijiami.club:4550/ai/2.JPG',''),
(null,5,'https://caijiami.club:4550/ai/3.JPG',''),
(null,5,'https://caijiami.club:4550/ai/4.JPG',''),
(null,5,'https://caijiami.club:4550/ai/5.JPG',''),
(null,5,'https://caijiami.club:4550/ai/6.JPG',''),
(null,6,'https://caijiami.club:4550/car/1.jpg',''),
(null,6,'https://caijiami.club:4550/car/2.jpg',''),
(null,6,'https://caijiami.club:4550/car/3.jpg',''),
(null,6,'https://caijiami.club:4550/car/4.jpg',''),
(null,6,'https://caijiami.club:4550/car/5.jpg',''),
(null,6,'https://caijiami.club:4550/car/6.jpg',''),
(null,6,'https://caijiami.club:4550/car/7.jpg',''),
(null,6,'https://caijiami.club:4550/car/8.jpg',''),
(null,6,'https://caijiami.club:4550/car/9.jpg','');


-- 游乐园表
CREATE TABLE yuChen_amusement(
    id INT PRIMARY KEY AUTO_INCREMENT,
    lid INT,
    src VARCHAR(100),
    title VARCHAR(100),
    extra VARCHAR(100),
    content VARCHAR(500)
);
INSERT INTO yuChen_amusement VALUES
(null,1,'https://caijiami.club:4550/amusement/beijing1.jpg','北京游乐园','暂定计划','螺旋滑行车、极速酷酷熊、空中自行车、旋转陀螺、幻像水族馆、飞碟、大荡船、飞行塔、大海贼、新干线、旋转苹果、激流勇进、吃惊房屋、旋转秋千、大观览车、风暴骑士、水上漫游(限身高)、快乐杯、浪卷珍珠、空中单轨列车、旋转木马、小汽车、休闲区、小摩托车、DJ疯狂之旅、惊涛骇浪、神鸟魔盘、伯爵号皇家双层木马(新)、神剑魔轮(新)'),
(null,1,'https://caijiami.club:4550/amusement/beijing2.jpg','北京欢乐谷','暂定计划','北京欢乐谷由峡湾森林、爱琴港、失落玛雅、香格里拉、甜品王国、亚特兰蒂斯、欢乐时光、七大文化主题区（另外还有位于爱琴港的奇幻海洋馆、欢乐世界主题漂流三期项目）组成，通过主题文化包装及故事演绎，以建筑、雕塑、园林、壁画、表演、游乐等多种形式向游客展示了地球的生态环境与地域文化，园区内精选世界经典文明和创意智慧，设置了50余项主题景观、10余项主题表演、30多项主题游乐设施、20余项主题游戏及商业辅助设施。'),
(null,2,'https://caijiami.club:4550/amusement/shanghai1.jpg','上海欢乐谷','暂定计划','上海欢乐谷全园占地面积65万平方米，拥有100多项体验项目，上海欢乐谷全园共有七大主题区：阳光港、欢乐时光、上海滩、香格里拉、欢乐海洋、金矿镇、飓风湾。'),
(null,2,'https://caijiami.club:4550/amusement/shanghai2.jpg','锦江乐园','暂定计划','国内一流的“摩托过山车”、（2009年建成）“欢乐世界”、“峡谷漂流”、“探空飞梭”（2013年已拆）、“上海大转盘”、“双层木马”、“溶洞飞车”（2005年建成）、“摩托迪士高”（2008年建成）、“4D环幕影院”等许多大型游乐项目；先后营建了“喀斯特溶洞”、“古董相机楼”、“火山影剧院”、“上海老站”等特色景观。'),
(null,3,'https://caijiami.club:4550/amusement/xianggang1.jpg','香港海洋公园','暂定计划','香港海洋公园分为3部分，分别为位于北面的山下花园，和南面的南朗山南麓及大树湾，占地共17公顷，有40多个游乐设施。山下花园与南朗山以登山缆车和海洋列车连接。而南朗山与大树湾之间，则以登山电梯连接，是全世界第2长的户外电动扶梯。'),
(null,4,'https://caijiami.club:4550/amusement/hangzhou1.jpg','杭州乐园','暂定计划','园区拥有悬挂过山车、雨神之锤、风神之手、双海盗船、穿越云霄、丛林迷旋、高空飞翔、时髦飞人等数十项惊险刺激的大型游乐项目，音乐船、碰碰车等数十项生动有趣的儿童游乐项目，更有《民间绝技》、《王员外家三小姐抛绣球招亲》、沉浸式演出《恐怖马戏船》等数十项互动表演，全家一起嗨！'),
(null,5,'https://caijiami.club:4550/amusement/suzhou1.jpg','苏州乐园','暂定计划','共分为欧美城镇、儿童世界、未来世界、苏格兰庄园、威尼斯水乡、百狮园、皇座广场等九大景区，并引进诸如飞碟探险、时空飞船、宇宙大战、太空历险、三角滑翔翼、空中飞人、高空弹射等一大批高科技游乐设备，现有游乐项目及景点八十几处（项）'),
(null,6,'https://caijiami.club:4550/amusement/meiguo1.jpg','奥兰多迪士尼乐园','暂定计划','奥兰多迪士尼乐园拥有4座超大型主题乐园，分别是迪士尼-未来世界、迪士尼-动物王国、迪士尼-好莱坞影城、迪士尼-魔法王国，还有3座水上乐园(暴风雪海滩、台风湖、冲浪世界）、32家度假饭店(其中有22家由迪斯尼世界经营)以及784个露营地。'),
(null,7,'https://caijiami.club:4550/amusement/riben.jpg','东京迪士尼乐园','暂定计划','东京迪士尼乐园主要分为世界市集、探险乐园、西部乐园、动物天地、梦幻乐园、卡通城及明日乐园等7个区，园内的舞台以及广场上定时会有各种各样的游行活动。'),
(null,8,'https://caijiami.club:4550/amusement/faguo.jpg','巴黎迪士尼乐园','暂定计划','乐园内的加勒比海海盗屋，炮火连天的战争场面、海盗的豪夺强抢，造型栩栩如生，令人赞叹；在迪士尼卡通天地的小小世界乐园，一首首悦耳歌曲，穿上各国民族服饰之小木偶载歌载舞，令每个人都不约而同流露出欢乐。太空过山车、潜水艇，都是新颖有趣的玩意，令人乐而忘返。');

