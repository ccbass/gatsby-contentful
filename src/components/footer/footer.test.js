import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"
import Footer from "./footer"


beforeEach(() => {
  jest.clearAllMocks();

  useStaticQuery.mockImplementationOnce(() => ({
      site: {
        siteMetadata: {
          author: `CCB`,
        },
      },
  }))
})

describe("Footer Tests", () => {
  it("Renders as expected vs snapshot.", () => {
    const footer = renderer.create(<Footer />).toJSON()
    expect(footer).toMatchSnapshot()

  })

})
