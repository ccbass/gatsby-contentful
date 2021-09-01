import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"
import IndexPage from "../index"
import Head from '../../components/head'


beforeEach(() => {
  jest.clearAllMocks();

  useStaticQuery.mockImplementation(() => ({
      site: {
        siteMetadata: {
          author: `CCB`,
          title: 'Full-Stack Engineering Blog'
        },
      },
  }))
})

describe("Index Page Tests", () => {
  it("Renders as expected vs snapshot.", () => {
    const index = renderer.create(<IndexPage />).toJSON()
    expect(index).toMatchSnapshot()

  })

  it("Helmet has correct props.", () => {
    const index = renderer.create(<IndexPage />)
    const indexInstance = index.root

    expect(indexInstance.findByType(Head).props.title).toBe('Home');

  })

})
