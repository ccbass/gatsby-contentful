/* 
  Migration script that adds blank 'Minutes to Read' field to all 'Blog Post' content types.
  Integer input must be 1-120 inclusive.  Longer articles could be added by increasing over 120.
  Error handling and help text is included.
*/
module.exports = function (migration) {
  const blogPostMigration = migration.editContentType("blogPost")

  blogPostMigration
    .createField("minutesToRead")
    .name("Minutes to Read")
    .type("Integer")
    .validations([
      { range: { min: 1, max: 120 }, 
        message: "Number must be within 1 - 120" 
      },
    ])

  blogPostMigration.changeFieldControl("minutesToRead", "builtin", "numberEditor", {
    helpText: "Estimated time to read the article in minutes.",
  })
}
