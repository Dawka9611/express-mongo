import fs from 'fs'

export function getSongs(req, res) {
   const songsRaw = fs.readFileSync('jsons/songs.json')
   const songs = JSON.parse(songsRaw)

   res.send(songs)
}

export function postSongs(req, res) {
   const song = req.body

   const songsRaw = fs.readFileSync('jsons/songs.json')
   const songs = JSON.parse(songsRaw)

   const songsAdded = [...songs, song]
   fs.writeFileSync('jsons/songs.json', JSON.stringify(songsAdded))

   res.send({
      success: true,
      songs: songsAdded
   })
}
