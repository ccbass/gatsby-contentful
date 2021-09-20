const fs = require('fs')
const { exec } = require('child_process')

function blogSlugTransformer () {

  // Process args passed to `npm run` script
  const scriptArgsArr = process.argv.slice(2)
  const splitArgs = scriptArgsArr.map(arg => arg.split('='))
  const tempDir = splitArgs.find(arg => arg[0] === 'dir')[1]
  const spaceId = splitArgs.find(arg => arg[0] === 'spaceid')[1]


  // Execute mkdir and create a new directory for the exported json.
  exec(`mkdir ${tempDir}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);

    // Execute the Contentful space export process using required options and flags.
    exec(`contentful space export --space-id ${spaceId} --export-dir ./${tempDir} --content-file shortslugs.json`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);

      /* 
        Open and read JSON file created from export.
        Parse JSON, dates, slugs and modify nested slug objects for each entry.
        Stringify result to export into new file.
      */
      fs.readFile(`./${tempDir}/shortslugs.json`, 'utf8', (err, json) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }

        const parsedJson = JSON.parse(json)
      
        parsedJson.entries.forEach(post => {
          const date = post.fields.publishedDate['en-US']
          const currentSlug = post.fields.slug['en-US']
      
          const currentDateObj = new Date(date)
          const [month, day, year] = [currentDateObj.getMonth(), currentDateObj.getDate(), currentDateObj.getFullYear()]; 
      
          // Months are 0-index, offset corrected by adding 1.
          const trueMonth = month + 1
      
          post.fields.slug['en-US'] = `${day}/${trueMonth}/${year}/${currentSlug}`
        }) 
      
        const updatedSlugJson = JSON.stringify(parsedJson)

        // Execute and create new export file for JSON data to be saved to.
        exec(`touch ${tempDir}/datelongslugs.json`, (error, stdout, stderr) => {
          if (error) {
            console.error(`exec error: ${error}`);
            return;
          }
          console.log(`stdout: ${stdout}`);
          console.error(`stderr: ${stderr}`);

          // Write stringified JSON to file created.
          fs.writeFile(`./${tempDir}/datelongslugs.json`, updatedSlugJson, err => {
            if (err) {
              console.log('Error writing file', err)
            }

            // Import modified export back into the 
            exec(`contentful space import --space-id ${spaceId} --content-file ./${tempDir}/datelongslugs.json`, (error, stdout, stderr) => {
              if (error) {
                console.error(`exec error: ${error}`);
                return;
              }
              console.log(`stdout: ${stdout}`);
              console.error(`stderr: ${stderr}`);
            })
          })
        })
      })
    });
  });
}





blogSlugTransformer()


