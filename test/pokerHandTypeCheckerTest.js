var expect = require('chai').expect;
var Card = require('../src/card');
var highCardRule = require('../src/rules/isHighCard');
var pairRule = require('../src/rules/isPair');
var twoPairRule = require('../src/rules/twoPairs');

describe('PokerHandTypeCheckerRules', function() {
    describe('isHighCardRule', function() {
        it('always should return true', function() {
            var hand = [
                new Card('2', "H"),
                new Card('3', "D"),
                new Card('5', "S"),
                new Card('9', "C"),
                new Card('K', "D")
            ];
            expect(highCardRule.check(hand)).to.be.true;
        });
    });
    describe('isPairRule', function() {
        it('should return false when all cards has different values', function() {
            var hand = [
                new Card('2', "H"),
                new Card('8', "D"),
                new Card('5', "S"),
                new Card('9', "C"),
                new Card('K', "D")
            ];
            expect(pairRule.check(hand)).to.be.false;
        });
        it('should return true when 2 of the 5 cards in the hand have the same value', function() {
            var hand = [
                new Card('5', "S"),
                new Card('2', "H"),
                new Card('9', "C"),
                new Card('2', "D"),
                new Card('K', "D")
            ];
            expect(pairRule.check(hand)).to.be.true;
        });
    });
    describe('twoPairsRule', function() {
        it('should return false when all cards has different values', function() {
            var hand = [
                new Card('2', "H"),
                new Card('8', "D"),
                new Card('5', "S"),
                new Card('9', "C"),
                new Card('K', "D")
            ];
            expect(twoPairRule.check(hand)).to.be.false;
        });
        it('should return false when the hand just contain one pair', function() {
            var hand = [
                new Card('2', "H"),
                new Card('2', "D"),
                new Card('5', "S"),
                new Card('9', "C"),
                new Card('K', "D")
            ];
            expect(twoPairRule.check(hand)).to.be.false;
        });
        it('should return true when the hand contains 2 different pairs', function() {
            var hand = [
                new Card('2', "H"),
                new Card('K', "C"),
                new Card('5', "S"),
                new Card('2', "D"),
                new Card('K', "D")
            ];
            expect(twoPairRule.check(hand)).to.be.true;
        });
    });
});



