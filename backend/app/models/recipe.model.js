module.exports = mongoose => {
  let schema = mongoose.Schema(
    {	title: String,
	publisher: String,
	ingredients: Array,
	source_url: String,
	image_url: String,
	servings: Number,
	cooking_time: Number
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  const Recipe = mongoose.model("recipe", schema);
  return Recipe;
};
