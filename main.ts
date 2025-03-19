radio.setGroup(58)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_RECOGNITION)
huskylens.initMode(protocolAlgorithm.ALGORITHM_COLOR_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeName(1, "Yaya")
        huskylens.writeOSD("Yaya Geciyor", 150, 30)
        radio.sendString("YAYA")
        radio.sendNumber(3)
        basic.pause(2000)
    } else {
        huskylens.writeOSD("Arac Gecebilir", 150, 30)
        radio.sendString("araba")
        radio.sendNumber(4)
    }
})
