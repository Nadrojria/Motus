import { expect, test } from 'vitest'
import { wordLength } from './logic.js'

test('Cas de démarrage #1 : le joueur rentre le bon nombre de lettres', () => {
  expect(wordLength("zozo", "toto")).toBe(true);
});

test('Cas de démarrage #2 : le joueur ne rentre pas le bon nombre de lettres', () => {
    expect(wordLength("totoro", "toto")).toBe(false);
});

