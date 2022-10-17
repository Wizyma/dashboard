import { render } from "@testing-library/react";
import React from "react";

import { Layout } from "..";

describe(Layout.name, () => {
  it("should render without toolbar", () => {
    const { getByText } = render(
      <Layout menu={[{ label: "jest" }]}>
        <p>No Toolbar</p>
      </Layout>
    );

    expect(getByText("No Toolbar")).toBeDefined();
  });

  it("should render with toolbar", () => {
    const { getByText } = render(
      <Layout menu={[{ label: "jest" }]} headerContent={<p>Toolbar</p>}>
        <p>Jest</p>
      </Layout>
    );

    expect(getByText("Toolbar")).toBeDefined();
  });
});
