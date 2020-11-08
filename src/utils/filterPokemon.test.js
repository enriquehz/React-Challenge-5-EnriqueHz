import filterPokemon from "./filterPokemon";
import { mockPokemonsData } from "../mock/pokeData";

describe("Filter Pokemon", () => {
  test("it should return an array", () => {
    /* Your solution comes here */

    expect(Array.isArray(filterPokemon(mockPokemonsData))).toBe(true);
  });

  test("it should return an empty array", () => {
    /* Your solution comes here */
    //filterPokemon();
    expect(filterPokemon(mockPokemonsData, "").length).toStrictEqual(0);
  });

  test("it should return an array with charizard object", () => {
    /* Your solution comes here */
    //filterPokemon(mockPokemonsData, "charizard");
    //expect(false).toBe(true);
    expect(
      filterPokemon(mockPokemonsData, "charizard")[0].name === "charizard"
    ).toBe(true);
  });

  /* BUNUS */
  test("it should validate the 'pokeList' argument", () => {
    /* Your solution comes here */
    expect(false).toBe(true);
  });

  test("it should validate the 'name' argument", () => {
    /* Your solution comes here */
    expect(false).toBe(true);
  });
});
