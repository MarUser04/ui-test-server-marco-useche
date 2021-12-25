import Controversial from "../models/Controversial";

export const getData = async (req, res) => {
  try {
    const controversial = await Controversial.find();
    res.status(200).json(controversial);
  } catch (e) {
    throw new Error(e.message);
  }
};

export const vote = async (req, res) => {
  try {
    const { id } = req.params;
    const { voteStatus } = req.body;
    if (!id) {
      throw new Error("Missing ID value to do vote action.");
    }
    if (!voteStatus) {
      throw new Error("Missing vote status value to do vote action.");
    }

    const controversial = await Controversial.findById(id);

    if (!controversial) {
      throw new Error(`Èrror fetching controversila celebrity with id: ${id}`);
    }

    if (voteStatus === "positive") {
      controversial.votes.positive += 1;
    } else if (voteStatus === "negative") {
      controversial.votes.negative += 1;
    }
    controversial.lastUpdated = new Date();
    controversial.save();
    res.status(200).json({ message: `Controversial with id ${id} voted` });
  } catch (e) {
    throw new Error(e.message);
  }
};
