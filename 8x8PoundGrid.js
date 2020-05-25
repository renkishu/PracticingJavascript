/*
 * Create a program that generates an 8x8 grid where: for odd rows, display a pound sign on
 * even columns, and for even rows, display a pound sign on odd columns. 
 * Example:
 *      12345678
 * 1     # # # #
 * 2    # # # # 
 * 3     # # # #
 * 4    # # # # 
 * 5     # # # # 
 * 6    # # # # 
 * 7     # # # # 
 * 8    # # # # 
 */

const row = 8;
const col = 8;
let charPrint1 = ''; // line where the start is empty
let charPrint2 = ''; // line where the start is #
const charAdd1 = '# '; // for charPrint1
const charAdd2 = ' #'; // for charPrint2

for (let j = 0; j <  col; j++)
    {
        if (j % 2 === 0) charPrint1 += charAdd1;
        else charPrint2 += charAdd2;
    }

for (let i = 0; i < row; i++)
{
    if (i % 2 !== 0) console.log(charPrint1);
    else console.log(charPrint2);
}
