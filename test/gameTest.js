var expect = require('chai').expect;
var Card = require('../src/card');
var game = require('../src/game');

describe('Poker Game', function() {
    describe('Highcard hand vs highcard hand', function() {

        it('should return the highest card hand as winner', function () {
            var black ={
                name: "Black",
                hand: [
                    new Card('2', "H"),
                    new Card('3', "D"),
                    new Card('5', "S"),
                    new Card('9', "C"),
                    new Card('K', "D")
                ]
            };
            var white ={
                name: "White",
                hand: [
                    new Card('2', "C"),
                    new Card('3', "H"),
                    new Card('4', "S"),
                    new Card('8', "C"),
                    new Card('A', "H")
                ]
            };
            expect(game.play(black).versus(white)).to.be.equal("White wins. - with high card: Ace");
        });

    });
});
