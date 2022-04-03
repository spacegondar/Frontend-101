const arguments = process.argv.slice(2)

function circle(yarıcap)
{
    let alan = 3.14 * yarıcap
    console.log("Yarıçapı " + yarıcap + " olan dairenin alanı: " + alan)
}

circle(arguments[0] * 1)