var expect = require('chai').expect;
var Card = require('../src/card');
var highCardRule = require('../src/rules/isHighCard');
var pairRule = require('../src/rules/isPair');
var twoPairRule = require('../src/rules/twoPairs');
var threeOfAKind = require('../src/rules/threeOfAKind');
var straight = require('../src/rules/straight');
var flush = require('../src/rules/flush');
var fullHouse = require('../src/rules/fullHouse');
var fourOfAKind = require('../src/rules/fourOfAKind');

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

    describe('Three of a kind rule', function() {
        it('should return false when all cards has different values', function() {
            var hand = [
                new Card('2', "H"),
                new Card('8', "D"),
                new Card('5', "S"),
                new Card('9', "C"),
                new Card('K', "D")
            ];
            expect(threeOfAKind.check(hand)).to.be.false;
        });
        it('should return false when the hand contain four cart with same value', function() {
            var hand = [
                new Card('2', "H"),
                new Card('2', "D"),
                new Card('2', "S"),
                new Card('2', "C"),
                new Card('K', "D")
            ];
            expect(threeOfAKind.check(hand)).to.be.false;
        });
        it('should return true when the hand contains 3 card with the same value', function() {
            var hand = [
                new Card('2', "H"),
                new Card('K', "C"),
                new Card('2', "S"),
                new Card('2', "D"),
                new Card('K', "D")
            ];
            expect(threeOfAKind.check(hand)).to.be.true;
        });
    });

    describe('Straight rule', function() {
        it('should return false when a card is not consecutive', function () {
            var hand = [
                new Card('2', "H"),
                new Card('4', "D"),
                new Card('5', "S"),
                new Card('3', "C"),
                new Card('K', "D")
            ];
            expect(straight.check(hand)).to.be.false;
        });
        it('should return true when the hand contains 5 cards with consecutive values', function () {
            var hand = [
                new Card('2', "H"),
                new Card('4', "C"),
                new Card('6', "S"),
                new Card('3', "D"),
                new Card('5', "D")
            ];
            expect(straight.check(hand)).to.be.true;
        });
    });

    describe('Flush rule', function() {
        it('should return false when a card has a different suit', function() {
            var hand = [
                new Card('2', "H"),
                new Card('7', "H"),
                new Card('5', "D"),
                new Card('J', "H"),
                new Card('K', "H")
            ];
            expect(flush.check(hand)).to.be.false;
        });
        it('should return true when the hand contains 5 cards of the same suit', function() {
            var hand = [
                new Card('2', "H"),
                new Card('7', "H"),
                new Card('5', "H"),
                new Card('J', "H"),
                new Card('K', "H")
            ];
            expect(flush.check(hand)).to.be.true;
        });
    });

    describe('Full House rule', function() {
        it('should return true when 3 cards of the same value, with the remaining 2 cards forming a pair', function() {
            var hand = [
                new Card('2', "H"),
                new Card('2', "D"),
                new Card('2', "C"),
                new Card('K', "S"),
                new Card('K', "H")
            ];
            expect(fullHouse.check(hand)).to.be.true;
        });
    });

    describe('four of a kind rule', function() {
        it('should return true when  4 cards with the same value', function() {
            var hand = [
                new Card('2', "H"),
                new Card('K', "D"),
                new Card('K', "C"),
                new Card('K', "S"),
                new Card('K', "H")
            ];
            expect(fourOfAKind.check(hand)).to.be.true;
        });
    });

});



