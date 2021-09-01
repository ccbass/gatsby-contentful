import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"
import Header from "./header"


beforeEach(() => {
  jest.clearAllMocks();

  useStaticQuery.mockImplementationOnce(() => ({
      site: {
        siteMetadata: {
          title: `Full-Stack Engineering Blog`,
        },
      },
  }))
})

describe("Header Tests", () =>
  it("Renders as expected vs snapshot.", () => {
    const header = renderer.create(<Header />).toJSON()
    expect(header).toMatchSnapshot()

  }))
