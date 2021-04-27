const generic = (model) => ({
  async getAll(req, res) {
    try {
      const items = await model.find()
      return res.status(200).send(items)
    } catch (error) {}
  },

  async getOne({ params: { id } }, res) {
    try {
      const item = await model.findById(id)
      return res.status(200).send(item)
    } catch (error) {}
  },

  async create({ body }, res) {
    try {
      const item = new model(body)
      const newItem = await item.save()
      const items = await model.find()
      return res.status(200).send(items)
    } catch (error) {}
  },

  async update({ params: { id }, body }, res) {
    try {
      await model.findByIdAndUpdate(id, body, { new: true })
      const items = await model.find()
      return res.status(200).send(items)
    } catch (error) {}
  },

  async delete({ params: { id } }, res) {
    try {
      await model.findByIdAndDelete(id)
      const items = await model.find()
      return res.status(200).send(items)
    } catch (error) {}
  },
})

module.exports = generic
