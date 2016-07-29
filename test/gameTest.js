var expect = require('chai').expect;
var Card = require('../src/card');
var game = require('../src/game');

describe('Poker Game', function() {
    describe('Full house hand vs highcard hand', function() {

        it('should return the full house player as winner', function () {
            var black ={
                name: "Black",
                hand: [
                    new Card('2', "H"),
                    new Card('4', "S"),
                    new Card('4', "C"),
                    new Card('2', "D"),
                    new Card('4', "H")
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
            expect(game.play(black).versus(white)).to.be.equal("Black wins. - with fullHouse");
        });

    });
});
