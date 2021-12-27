import Controversial from "../models/Controversial";

// Return all elements in the controversials collection
export const getData = async (req, res) => {
  try {
    const controversial = await Controversial.find();
    res.status(200).json(controversial);
  } catch (e) {
    throw new Error(e.message);
  }
};

// Send a vote to a celebrity
export const vote = async (req, res) => {
  try {
    const { id } = req.params; // Celebrity id
    const { voteStatus } = req.body; // Vote Status. Two possible values: positive or negative

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

    // Update votes counter based on voteStatus value
    if (voteStatus === "positive") {
      controversial.votes.positive += 1;
    } else if (voteStatus === "negative") {
      controversial.votes.negative += 1;
    }

    controversial.save();
    res.status(200).json({ message: `Controversial with id ${id} voted`, data: controversial });
  } catch (e) {
    throw new Error(e.message);
  }
};
