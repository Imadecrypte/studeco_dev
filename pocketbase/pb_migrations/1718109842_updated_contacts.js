/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cgfb7uogj8v0loz")

  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cgfb7uogj8v0loz")

  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
})
