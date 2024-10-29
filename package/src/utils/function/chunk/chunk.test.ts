mport { act } from "@testing-library/react-hooks";
import ErrorHandler from "../../../services/error-handler.service";
import { chunk } from "./chunk";

describe("chunk", () => {


  test("split an array into smaller subarrays ", () => {
    const result = chunk([1, 2, 3, 4, 5, 6, 7], 2);
    expect(result).toBe([[1, 2], [3, 4], [5, 6], [7]]);
  });
});