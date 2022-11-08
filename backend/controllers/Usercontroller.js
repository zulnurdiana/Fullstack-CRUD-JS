import User from "../model/Usermodel.js";

export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    if (!response) res.status(404).json({ msg: "Data belum ada" });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUsersById = async (req, res) => {
  try {
    let response = await User.findOne({ where: { id: req.params.id } });
    if (!response) res.status(404).json({ msg: "Data tidak ada" });
    res.status(202).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(202).json({ msg: "data berhasil ditambahkan" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    let check = await User.destroy({ where: { id: req.params.id } });
    if (!check) {
      res.status(404).json({ msg: "data tidak ada" });
    } else {
      res.status(200).json({ msg: "data berhasil didelete" });
    }
  } catch (error) {}
};

export const updateUser = async (req, res) => {
  try {
    let check = JSON.parse(
      await User.update(req.body, { where: { id: req.params.id } })
    );

    if (!check) {
      res.status(404).json({ msg: "data tidak ada" });
    } else {
      res.status(201).json({ msg: "data berhasil diubah" });
    }
  } catch (error) {
    console.log(error.message);
  }
};
