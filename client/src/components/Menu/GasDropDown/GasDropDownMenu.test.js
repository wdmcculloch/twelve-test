import React from "react";
import { render, prettyDOM, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import axios from "axios";
import GasDropDownMenu from "./GasDropDownMenu.jsx";

describe("rendering", () => {
  describe("initial state", () => {
    beforeEach(() => {
      axios.get.mockResolvedValueOnce({
        data: ["CH4", "All GHG", "CO2", "NO2", "F-Gas"],
      });
    });

    it("has header for gas menu", async () => {
      await act(async () => {
        const renderer = await render(
          <GasDropDownMenu gas={"All GHG"} handleChange={() => {}} />
        );
        expect(renderer.getByText("Gas")).toBeTruthy();
      });
    });

    it("has a select menu", async () => {
      await act(async () => {
        const renderer = await render(
          <GasDropDownMenu gas={"All GHG"} handleChange={() => {}} />
        );

        const list = await waitFor(() => {
          return renderer.getByRole("list");
        });

        expect(list.type).toBe("select-one");
      });
    });

    it("has correct options for select menu", async () => {
      await act(async () => {
        const renderer = await render(
          <GasDropDownMenu gas={"All GHG"} handleChange={() => {}} />
        );

        const listItems = await waitFor(() => {
          return renderer.getAllByRole("listitem");
        });
      });
    });
  });
});
