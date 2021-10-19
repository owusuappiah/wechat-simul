import { AreaCodes } from '../models/AreaCodes'
import Currencies from '../models/Currencies'

export const isNull = (value) => value == null || typeof value == "undefined"


export const ChatTime = (date) => {
    var dayjs = require('dayjs')
    //import dayjs from 'dayjs' // ES 2015
    var relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)

    return dayjs(date).format("HH:mm")
}

export const ChatDateHistory = (date) => {
    var dayjs = require('dayjs')
    //import dayjs from 'dayjs' // ES 2015
    var relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)

    return dayjs(date).format("ddd, MMM DD")
}


export const dateTimeFancy = (date) => {
    var dayjs = require('dayjs')
    //import dayjs from 'dayjs' // ES 2015
    var relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)

    return dayjs(date).format("ddd, MMM DD YYYY - HH:mm")
}

export const parseAreaCode = (value) => {
    const index = AreaCodes.map(a=> a.uniCode).indexOf(value)

    let areaCode = ''
    if(index !== -1){
        areaCode = AreaCodes[index].code
    }
    return areaCode
}




export const parseCurrency = (value) => {
    const index = Currencies.map(a=> a.uniCode).indexOf(value)

    let areaCode = Currencies[0]
    if(index !== -1){
        areaCode = Currencies[index]
    }

    return areaCode
}
