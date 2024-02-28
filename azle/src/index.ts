import { Canister, nat32, update, text } from "azle";

export default Canister({
  randomNumber: update([], text, () => {
    return "Hello World";
    // return parseInt(String(Math.random() * 10 ** 8));
  }),
});
