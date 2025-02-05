huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    basic.pause(100)
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeName(1, "Yaya")
        huskylens.writeOSD("Yaya Geciyor", 150, 30)
        radio.sendString("YAYA")
    } else if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeOSD("Dikkatli", 150, 30)
        radio.sendString("Yaya harici nesne")
    } else {
        huskylens.writeOSD("Arac Gecebilir", 150, 30)
        radio.sendString("araba")
    }
})
