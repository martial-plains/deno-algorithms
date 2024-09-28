import { assertEquals } from "@std/assert";
import { Strings } from "../../mod.ts";

Deno.test("does it capitalize test", () => {
  let actual = "123 hello world";
  let expected = "123 hello world";
  actual = Strings.capitalize(actual);
  assertEquals(expected, actual);

  actual = "hello world";
  expected = "Hello world";
  actual = Strings.capitalize(actual);
  assertEquals(expected, actual);

  actual = "a";
  expected = "A";
  actual = Strings.capitalize(actual);
  assertEquals(expected, actual);
});
