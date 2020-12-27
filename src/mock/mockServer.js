import Mock from 'mockjs'
import recommends from './recommends.json'
import floors from './floors.json'
import rank from './rank.json'
import likes from './like.json'
// floor数据
Mock.mock('/mock/floors',{code:200,data:floors})
// recommends 数据
Mock.mock('/mock/recommends',{code:200,data:recommends})
// rank数据
Mock.mock('/mock/rank',{code:200,data:rank})
// like 数据
Mock.mock('/mock/like',{code:200,data:likes})
