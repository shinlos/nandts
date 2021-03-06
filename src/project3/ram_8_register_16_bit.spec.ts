import { Ram8Register16Bit } from "./ram_8_register_16_bit"
import { expect } from "chai"
import "mocha"

const circuit = new Ram8Register16Bit()

// | time |   in   |load |address|  out   |
// | 0+   |      0 |  0  |   0   |      0 |
describe("1 Ram8Register16Bit test for: set clock true", () => {
  it("should return: 0", () => {
    circuit.setClock(true)
    expect(circuit.getDecOutput()).to.equal(0)
  })
})
// | 1    |      0 |  0  |   0   |      0 |
describe("2 Ram8Register16Bit test for: set clock false", () => {
  it("should return: 0", () => {
    circuit.setClock(false)
    expect(circuit.getDecOutput()).to.equal(0)
  })
})
// | 1+   |      0 |  1  |   0   |      0 |
describe("3 Ram8Register16Bit test for: set clock true, load true", () => {
  it("should return: 0", () => {
    circuit.setClock(true)
    circuit.setLoad(true)
    expect(circuit.getDecOutput()).to.equal(0)
  })
})
// | 2    |      0 |  1  |   0   |      0 |
describe("4 Ram8Register16Bit test for: set clock false", () => {
  it("should return: 0", () => {
    circuit.setClock(false)
    expect(circuit.getDecOutput()).to.equal(0)
  })
})
// | 2+   |  11111 |  0  |   0   |      0 |
describe("5 Ram8Register16Bit test for: set clock true, load false, in 11111", () => {
  it("should return: 0", () => {
    circuit.setClock(true)
    circuit.setLoad(false)
    circuit.setInput(11111)
    expect(circuit.getDecOutput()).to.equal(0)
  })
})
// | 3    |  11111 |  0  |   0   |      0 |
describe("6 Ram8Register16Bit test for: set clock false", () => {
  it("should return: 0", () => {
    circuit.setClock(false)
    expect(circuit.getDecOutput()).to.equal(0)
  })
})
// | 3+   |  11111 |  1  |   1   |      0 |
describe("7 Ram8Register16Bit test for: set clock true, load true, address 1", () => {
  it("should return: 0", () => {
    circuit.setClock(true)
    circuit.setLoad(true)
    circuit.setDecAddress(1)
    expect(circuit.getDecOutput()).to.equal(0)
  })
})
// | 4    |  11111 |  1  |   1   |  11111 |
describe("8 Ram8Register16Bit test for: set clock false", () => {
  it("should return: 11111", () => {
    circuit.setClock(false)
    expect(circuit.getDecOutput()).to.equal(11111)
  })
})
// | 4+   |  11111 |  0  |   0   |      0 |
describe("9 Ram8Register16Bit test for: set clock true, load false, address 0", () => {
  it("should return: 0", () => {
    circuit.setClock(true)
    circuit.setLoad(false)
    circuit.setDecAddress(0)
    expect(circuit.getDecOutput()).to.equal(0)
  })
})
// | 5    |  11111 |  0  |   0   |      0 |
describe("10 Ram8Register16Bit test for: set clock false", () => {
  it("should return: 0", () => {
    circuit.setClock(false)
    expect(circuit.getDecOutput()).to.equal(0)
  })
})
// | 5+   |   3333 |  0  |   3   |      0 |
describe("11 Ram8Register16Bit test for: set clock true, set input 3333, address 3", () => {
  it("should return: 0", () => {
    circuit.setClock(true)
    circuit.setInput(3333)
    circuit.setDecAddress(3)
    expect(circuit.getDecOutput()).to.equal(0)
  })
})
// | 6    |   3333 |  0  |   3   |      0 |
describe("12 Ram8Register16Bit test for: set clock false", () => {
  it("should return: 0", () => {
    circuit.setClock(false)
    expect(circuit.getDecOutput()).to.equal(0)
  })
})
// | 6+   |   3333 |  1  |   3   |      0 |
describe("13 Ram8Register16Bit test for: set clock true, set load true", () => {
  it("should return: 0", () => {
    circuit.setClock(true)
    circuit.setLoad(true)
    expect(circuit.getDecOutput()).to.equal(0)
  })
})
// | 7    |   3333 |  1  |   3   |   3333 |
describe("14 Ram8Register16Bit test for: set clock false", () => {
  it("should return: 3333", () => {
    circuit.setClock(false)
    expect(circuit.getDecOutput()).to.equal(3333)
  })
})
// | 7+   |   3333 |  0  |   3   |   3333 |
describe("15 Ram8Register16Bit test for: set clock true, set load false", () => {
  it("should return: 3333", () => {
    circuit.setClock(true)
    circuit.setLoad(false)
    expect(circuit.getDecOutput()).to.equal(3333)
  })
})
// | 8    |   3333 |  0  |   3   |   3333 |
describe("16 Ram8Register16Bit test for: set clock false", () => {
  it("should return: 3333", () => {
    circuit.setClock(false)
    expect(circuit.getDecOutput()).to.equal(3333)
  })
})
// | 8    |   3333 |  0  |   1   |  11111 |
describe("17 Ram8Register16Bit test for: set address 1", () => {
  it("should return: 11111", () => {
    circuit.setDecAddress(1)
    expect(circuit.getDecOutput()).to.equal(11111)
  })
})
// | 8+   |   7777 |  0  |   1   |  11111 |
describe("18 Ram8Register16Bit test for: set clock true, set input 7777", () => {
  it("should return: 11111", () => {
    circuit.setClock(true)
    circuit.setInput(7777)
    expect(circuit.getDecOutput()).to.equal(11111)
  })
})
// | 9    |   7777 |  0  |   1   |  11111 |
describe("19 Ram8Register16Bit test for: set clock false", () => {
  it("should return: 11111", () => {
    circuit.setClock(false)
    expect(circuit.getDecOutput()).to.equal(11111)
  })
})
// | 9+   |   7777 |  1  |   7   |      0 |
describe("20 Ram8Register16Bit test for: set clock true, set load true, set address 7", () => {
  it("should return: 0", () => {
    circuit.setClock(true)
    circuit.setLoad(true)
    circuit.setDecAddress(7)
    expect(circuit.getDecOutput()).to.equal(0)
  })
})
// | 10   |   7777 |  1  |   7   |   7777 |
describe("21 Ram8Register16Bit test for: set clock false", () => {
  it("should return: 7777", () => {
    circuit.setClock(false)
    expect(circuit.getDecOutput()).to.equal(7777)
  })
})
// | 10+  |   7777 |  0  |   7   |   7777 |
describe("22 Ram8Register16Bit test for: set clock true, set load false", () => {
  it("should return: 7777", () => {
    circuit.setClock(true)
    circuit.setLoad(false)
    expect(circuit.getDecOutput()).to.equal(7777)
  })
})
// | 11   |   7777 |  0  |   7   |   7777 |
describe("23 Ram8Register16Bit test for: set clock false", () => {
  it("should return: 7777", () => {
    circuit.setClock(false)
    expect(circuit.getDecOutput()).to.equal(7777)
  })
})
// | 11   |   7777 |  0  |   3   |   3333 |
describe("24 Ram8Register16Bit test for: set address 3", () => {
  it("should return: 3333", () => {
    circuit.setDecAddress(3)
    expect(circuit.getDecOutput()).to.equal(3333)
  })
})
// | 11   |   7777 |  0  |   7   |   7777 |
describe("25 Ram8Register16Bit test for: set address 3", () => {
  it("should return: 7777", () => {
    circuit.setDecAddress(7)
    expect(circuit.getDecOutput()).to.equal(7777)
  })
})
// | 11+  |   7777 |  0  |   0   |      0 |
describe("26 Ram8Register16Bit test for: set clock true, set address 0", () => {
  it("should return: 0", () => {
    circuit.setClock(true)
    circuit.setDecAddress(0)
    expect(circuit.getDecOutput()).to.equal(0)
  })
})
// | 12   |   7777 |  0  |   0   |      0 |
describe("27 Ram8Register16Bit test for: set clock false", () => {
  it("should return: 0", () => {
    circuit.setClock(false)
    expect(circuit.getDecOutput()).to.equal(0)
  })
})
// | 12   |   7777 |  0  |   1   |  11111 |
describe("28 Ram8Register16Bit test for: set address 1", () => {
  it("should return: 11111", () => {
    circuit.setDecAddress(1)
    expect(circuit.getDecOutput()).to.equal(11111)
  })
})
// | 12   |   7777 |  0  |   2   |      0 |
describe("29 Ram8Register16Bit test for: set address 2", () => {
  it("should return: 0", () => {
    circuit.setDecAddress(2)
    expect(circuit.getDecOutput()).to.equal(0)
  })
})
// | 12   |   7777 |  0  |   3   |   3333 |
describe("30 Ram8Register16Bit test for: set address 3", () => {
  it("should return: 3333", () => {
    circuit.setDecAddress(3)
    expect(circuit.getDecOutput()).to.equal(3333)
  })
})
// | 12   |   7777 |  0  |   4   |      0 |
describe("31 Ram8Register16Bit test for: set address 4", () => {
  it("should return: 0", () => {
    circuit.setDecAddress(4)
    expect(circuit.getDecOutput()).to.equal(0)
  })
})
// | 12   |   7777 |  0  |   5   |      0 |
describe("32 Ram8Register16Bit test for: set address 5", () => {
  it("should return: 0", () => {
    circuit.setDecAddress(5)
    expect(circuit.getDecOutput()).to.equal(0)
  })
})
// | 12   |   7777 |  0  |   6   |      0 |
describe("33 Ram8Register16Bit test for: set address 6", () => {
  it("should return: 0", () => {
    circuit.setDecAddress(6)
    expect(circuit.getDecOutput()).to.equal(0)
  })
})
// | 12   |   7777 |  0  |   7   |   7777 |
describe("34 Ram8Register16Bit test for: set address 7", () => {
  it("should return: 7777", () => {
    circuit.setDecAddress(7)
    expect(circuit.getDecOutput()).to.equal(7777)
  })
})
// | 12+  |  21845 |  1  |   0   |      0 |
describe("35 Ram8Register16Bit test for: set clock true, set input 21845, set load true, set address 0", () => {
  it("should return: 0", () => {
    circuit.setClock(true)
    circuit.setInput(21845)
    circuit.setLoad(true)
    circuit.setDecAddress(0)
    expect(circuit.getDecOutput()).to.equal(0)
  })
})
// | 13   |  21845 |  1  |   0   |  21845 |
describe("36 Ram8Register16Bit test for: set clock false", () => {
  it("should return: 21845", () => {
    circuit.setClock(false)
    expect(circuit.getDecOutput()).to.equal(21845)
  })
})
// | 13+  |  21845 |  1  |   1   |  11111 |
describe("37 Ram8Register16Bit test for: set clock true, set address 1", () => {
  it("should return: 11111", () => {
    circuit.setClock(true)
    circuit.setDecAddress(1)
    expect(circuit.getDecOutput()).to.equal(11111)
  })
})
// | 14   |  21845 |  1  |   1   |  21845 |
describe("38 Ram8Register16Bit test for: set clock false", () => {
  it("should return: 21845", () => {
    circuit.setClock(false)
    expect(circuit.getDecOutput()).to.equal(21845)
  })
})
// | 14+  |  21845 |  1  |   2   |      0 |
describe("39 Ram8Register16Bit test for: set clock true, set address 2", () => {
  it("should return: 0", () => {
    circuit.setClock(true)
    circuit.setDecAddress(2)
    expect(circuit.getDecOutput()).to.equal(0)
  })
})
// | 15   |  21845 |  1  |   2   |  21845 |
describe("40 Ram8Register16Bit test for: set clock false", () => {
  it("should return: 21845", () => {
    circuit.setClock(false)
    expect(circuit.getDecOutput()).to.equal(21845)
  })
})
// | 15+  |  21845 |  1  |   3   |   3333 |
describe("41 Ram8Register16Bit test for: set clock true, set address 3", () => {
  it("should return: 3333", () => {
    circuit.setClock(true)
    circuit.setDecAddress(3)
    expect(circuit.getDecOutput()).to.equal(3333)
  })
})
// | 16   |  21845 |  1  |   3   |  21845 |
describe("42 Ram8Register16Bit test for: set clock false", () => {
  it("should return: 21845", () => {
    circuit.setClock(false)
    expect(circuit.getDecOutput()).to.equal(21845)
  })
})
// | 16+  |  21845 |  1  |   4   |      0 |
describe("43 Ram8Register16Bit test for: set clock true, set address 4", () => {
  it("should return: 0", () => {
    circuit.setClock(true)
    circuit.setDecAddress(4)
    expect(circuit.getDecOutput()).to.equal(0)
  })
})
// | 17   |  21845 |  1  |   4   |  21845 |
describe("44 Ram8Register16Bit test for: set clock false", () => {
  it("should return: 21845", () => {
    circuit.setClock(false)
    expect(circuit.getDecOutput()).to.equal(21845)
  })
})
// | 17+  |  21845 |  1  |   5   |      0 |
describe("45 Ram8Register16Bit test for: set clock true, set address 5", () => {
  it("should return: 0", () => {
    circuit.setClock(true)
    circuit.setDecAddress(5)
    expect(circuit.getDecOutput()).to.equal(0)
  })
})
// | 18   |  21845 |  1  |   5   |  21845 |
describe("46 Ram8Register16Bit test for: set clock false", () => {
  it("should return: 21845", () => {
    circuit.setClock(false)
    expect(circuit.getDecOutput()).to.equal(21845)
  })
})
// | 18+  |  21845 |  1  |   6   |      0 |
describe("47 Ram8Register16Bit test for: set clock true, set address 6", () => {
  it("should return: 0", () => {
    circuit.setClock(true)
    circuit.setDecAddress(6)
    expect(circuit.getDecOutput()).to.equal(0)
  })
})
// | 19   |  21845 |  1  |   6   |  21845 |
describe("48 Ram8Register16Bit test for: set clock false", () => {
  it("should return: 21845", () => {
    circuit.setClock(false)
    expect(circuit.getDecOutput()).to.equal(21845)
  })
})
// | 19+  |  21845 |  1  |   7   |   7777 |
describe("49 Ram8Register16Bit test for: set clock true, set address 7", () => {
  it("should return: 7777", () => {
    circuit.setClock(true)
    circuit.setDecAddress(7)
    expect(circuit.getDecOutput()).to.equal(7777)
  })
})
// | 20   |  21845 |  1  |   7   |  21845 |
describe("50 Ram8Register16Bit test for: set clock false", () => {
  it("should return: 21845", () => {
    circuit.setClock(false)
    expect(circuit.getDecOutput()).to.equal(21845)
  })
})
// | 20+  |  21845 |  0  |   0   |  21845 |
describe("51 Ram8Register16Bit test for: set clock true, set load false, set address 0", () => {
  it("should return: 21845", () => {
    circuit.setClock(true)
    circuit.setLoad(false)
    circuit.setDecAddress(0)
    expect(circuit.getDecOutput()).to.equal(21845)
  })
})
// | 21   |  21845 |  0  |   0   |  21845 |
describe("52 Ram8Register16Bit test for: set clock false", () => {
  it("should return: 21845", () => {
    circuit.setClock(false)
    expect(circuit.getDecOutput()).to.equal(21845)
  })
})
// | 21   |  21845 |  0  |   1   |  21845 |
describe("53 Ram8Register16Bit test for: set address 1", () => {
  it("should return: 21845", () => {
    circuit.setDecAddress(1)
    expect(circuit.getDecOutput()).to.equal(21845)
  })
})
// | 21   |  21845 |  0  |   2   |  21845 |
describe("54 Ram8Register16Bit test for: set address 2", () => {
  it("should return: 21845", () => {
    circuit.setDecAddress(2)
    expect(circuit.getDecOutput()).to.equal(21845)
  })
})
// | 21   |  21845 |  0  |   3   |  21845 |
describe("55 Ram8Register16Bit test for: set address 3", () => {
  it("should return: 21845", () => {
    circuit.setDecAddress(3)
    expect(circuit.getDecOutput()).to.equal(21845)
  })
})
// | 21   |  21845 |  0  |   4   |  21845 |
describe("56 Ram8Register16Bit test for: set address 4", () => {
  it("should return: 21845", () => {
    circuit.setDecAddress(4)
    expect(circuit.getDecOutput()).to.equal(21845)
  })
})
// | 21   |  21845 |  0  |   5   |  21845 |
describe("57 Ram8Register16Bit test for: set address 5", () => {
  it("should return: 21845", () => {
    circuit.setDecAddress(5)
    expect(circuit.getDecOutput()).to.equal(21845)
  })
})
// | 21   |  21845 |  0  |   6   |  21845 |
describe("58 Ram8Register16Bit test for: set address 6", () => {
  it("should return: 21845", () => {
    circuit.setDecAddress(6)
    expect(circuit.getDecOutput()).to.equal(21845)
  })
})
// | 21   |  21845 |  0  |   7   |  21845 |
describe("59 Ram8Register16Bit test for: set address 7", () => {
  it("should return: 21845", () => {
    circuit.setDecAddress(7)
    expect(circuit.getDecOutput()).to.equal(21845)
  })
})
// | 21+  | -21846 |  1  |   0   |  21845 |
describe("60 Ram8Register16Bit test for: set clock true, set input -21846, set load true, set address 0", () => {
  it("should return: 21845", () => {
    circuit.setClock(true)
    circuit.setLoad(true)
    circuit.setDecAddress(0)
    circuit.setInput(-21846)
    expect(circuit.getDecOutput()).to.equal(21845)
  })
})
// | 22   | -21846 |  1  |   0   | -21846 |
describe("61 Ram8Register16Bit test for: set clock false", () => {
  it("should return: -21846", () => {
    circuit.setClock(false)
    expect(circuit.getDecOutput()).to.equal(-21846)
  })
})
// | 22+  | -21846 |  0  |   0   | -21846 |
// | 23   | -21846 |  0  |   0   | -21846 |
// | 23   | -21846 |  0  |   1   |  21845 |
// | 23   | -21846 |  0  |   2   |  21845 |
// | 23   | -21846 |  0  |   3   |  21845 |
// | 23   | -21846 |  0  |   4   |  21845 |
// | 23   | -21846 |  0  |   5   |  21845 |
// | 23   | -21846 |  0  |   6   |  21845 |
// | 23   | -21846 |  0  |   7   |  21845 |
// | 23+  |  21845 |  1  |   0   | -21846 |
// | 24   |  21845 |  1  |   0   |  21845 |
// | 24+  | -21846 |  1  |   1   |  21845 |
// | 25   | -21846 |  1  |   1   | -21846 |
// | 25+  | -21846 |  0  |   0   |  21845 |
// | 26   | -21846 |  0  |   0   |  21845 |
// | 26   | -21846 |  0  |   1   | -21846 |
// | 26   | -21846 |  0  |   2   |  21845 |
// | 26   | -21846 |  0  |   3   |  21845 |
// | 26   | -21846 |  0  |   4   |  21845 |
// | 26   | -21846 |  0  |   5   |  21845 |
// | 26   | -21846 |  0  |   6   |  21845 |
// | 26   | -21846 |  0  |   7   |  21845 |
// | 26+  |  21845 |  1  |   1   | -21846 |
// | 27   |  21845 |  1  |   1   |  21845 |
// | 27+  | -21846 |  1  |   2   |  21845 |
// | 28   | -21846 |  1  |   2   | -21846 |
// | 28+  | -21846 |  0  |   0   |  21845 |
// | 29   | -21846 |  0  |   0   |  21845 |
// | 29   | -21846 |  0  |   1   |  21845 |
// | 29   | -21846 |  0  |   2   | -21846 |
// | 29   | -21846 |  0  |   3   |  21845 |
// | 29   | -21846 |  0  |   4   |  21845 |
// | 29   | -21846 |  0  |   5   |  21845 |
// | 29   | -21846 |  0  |   6   |  21845 |
// | 29   | -21846 |  0  |   7   |  21845 |
// | 29+  |  21845 |  1  |   2   | -21846 |
// | 30   |  21845 |  1  |   2   |  21845 |
// | 30+  | -21846 |  1  |   3   |  21845 |
// | 31   | -21846 |  1  |   3   | -21846 |
// | 31+  | -21846 |  0  |   0   |  21845 |
// | 32   | -21846 |  0  |   0   |  21845 |
// | 32   | -21846 |  0  |   1   |  21845 |
// | 32   | -21846 |  0  |   2   |  21845 |
// | 32   | -21846 |  0  |   3   | -21846 |
// | 32   | -21846 |  0  |   4   |  21845 |
// | 32   | -21846 |  0  |   5   |  21845 |
// | 32   | -21846 |  0  |   6   |  21845 |
// | 32   | -21846 |  0  |   7   |  21845 |
// | 32+  |  21845 |  1  |   3   | -21846 |
// | 33   |  21845 |  1  |   3   |  21845 |
// | 33+  | -21846 |  1  |   4   |  21845 |
// | 34   | -21846 |  1  |   4   | -21846 |
// | 34+  | -21846 |  0  |   0   |  21845 |
// | 35   | -21846 |  0  |   0   |  21845 |
// | 35   | -21846 |  0  |   1   |  21845 |
// | 35   | -21846 |  0  |   2   |  21845 |
// | 35   | -21846 |  0  |   3   |  21845 |
// | 35   | -21846 |  0  |   4   | -21846 |
// | 35   | -21846 |  0  |   5   |  21845 |
// | 35   | -21846 |  0  |   6   |  21845 |
// | 35   | -21846 |  0  |   7   |  21845 |
// | 35+  |  21845 |  1  |   4   | -21846 |
// | 36   |  21845 |  1  |   4   |  21845 |
// | 36+  | -21846 |  1  |   5   |  21845 |
// | 37   | -21846 |  1  |   5   | -21846 |
// | 37+  | -21846 |  0  |   0   |  21845 |
// | 38   | -21846 |  0  |   0   |  21845 |
// | 38   | -21846 |  0  |   1   |  21845 |
// | 38   | -21846 |  0  |   2   |  21845 |
// | 38   | -21846 |  0  |   3   |  21845 |
// | 38   | -21846 |  0  |   4   |  21845 |
// | 38   | -21846 |  0  |   5   | -21846 |
// | 38   | -21846 |  0  |   6   |  21845 |
// | 38   | -21846 |  0  |   7   |  21845 |
// | 38+  |  21845 |  1  |   5   | -21846 |
// | 39   |  21845 |  1  |   5   |  21845 |
// | 39+  | -21846 |  1  |   6   |  21845 |
// | 40   | -21846 |  1  |   6   | -21846 |
// | 40+  | -21846 |  0  |   0   |  21845 |
// | 41   | -21846 |  0  |   0   |  21845 |
// | 41   | -21846 |  0  |   1   |  21845 |
// | 41   | -21846 |  0  |   2   |  21845 |
// | 41   | -21846 |  0  |   3   |  21845 |
// | 41   | -21846 |  0  |   4   |  21845 |
// | 41   | -21846 |  0  |   5   |  21845 |
// | 41   | -21846 |  0  |   6   | -21846 |
// | 41   | -21846 |  0  |   7   |  21845 |
// | 41+  |  21845 |  1  |   6   | -21846 |
// | 42   |  21845 |  1  |   6   |  21845 |
// | 42+  | -21846 |  1  |   7   |  21845 |
// | 43   | -21846 |  1  |   7   | -21846 |
// | 43+  | -21846 |  0  |   0   |  21845 |
// | 44   | -21846 |  0  |   0   |  21845 |
// | 44   | -21846 |  0  |   1   |  21845 |
// | 44   | -21846 |  0  |   2   |  21845 |
// | 44   | -21846 |  0  |   3   |  21845 |
// | 44   | -21846 |  0  |   4   |  21845 |
// | 44   | -21846 |  0  |   5   |  21845 |
// | 44   | -21846 |  0  |   6   |  21845 |
// | 44   | -21846 |  0  |   7   | -21846 |
// | 44+  |  21845 |  1  |   7   | -21846 |
// | 45   |  21845 |  1  |   7   |  21845 |
// | 45+  |  21845 |  0  |   0   |  21845 |
// | 46   |  21845 |  0  |   0   |  21845 |
// | 46   |  21845 |  0  |   1   |  21845 |
// | 46   |  21845 |  0  |   2   |  21845 |
// | 46   |  21845 |  0  |   3   |  21845 |
// | 46   |  21845 |  0  |   4   |  21845 |
// | 46   |  21845 |  0  |   5   |  21845 |
// | 46   |  21845 |  0  |   6   |  21845 |
// | 46   |  21845 |  0  |   7   |  21845 |
