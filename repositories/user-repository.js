import { dbConfig } from "../common/db-config.js";
import User from "../models/user-model.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";

const userRepository = dbConfig.getRepository(User);

async function login(user) {
  try {
    user.password = crypto
      .createHash("md5")
      .update(user.raw_password)
      .digest("hex");

    const loggedUser = await userRepository.findOne({
      where: {
        email: user.email,
        password: user.password,
      },
    });

    const { role } = loggedUser;

    if (loggedUser) {
      const token = jwt.sign(
        {
          email: user.email,
          role,
        },
        "secret",
        {
          algorithm: "HS256",
          expiresIn: "1h",
        }
      );

      return { success: true, token, role };
    } else return { success: false };
  } catch (err) {
    console.error(err);
    return { success: false };
  }
}

// Auth methods
async function register(user) {
  try {
    // hash password - security measures
    user.password = crypto
      .createHash("md5")
      .update(user.raw_password)
      .digest("hex");

    const result = await userRepository.insert(user);
    const { role } = user;

    if (result.raw.affectedRows > 0) {
      const token = jwt.sign(
        {
          email: user.email,
          role,
        },
        "secret",
        {
          algorithm: "HS256",
          expiresIn: "1h",
        }
      );

      return { success: true, token };
    } else return { success: false };
  } catch (err) {
    console.error(err);
    return { success: false };
  }
}

// CRUD methods
async function getAll() {
  try {
    const result = await userRepository.find(); // SELECT * FROM users
    return result;
  } catch (err) {
    console.error(err);
  }
}

async function getOne(id) {
  try {
    const result = await userRepository.findOneBy({ id }); // SELECT * FROM users WHERE id = X
    return result;
  } catch (err) {
    console.error(err);
  }
}

async function create(user) {
  try {
    const result = await userRepository.insert(user); // INSERT INTO users...
    return {
      success: true,
      result,
    };
  } catch (err) {
    return {
      success: false,
      message: err.message,
    };
  }
}

async function update(id, user) {
  try {
    const result = await userRepository.update({ id }, user); // UPDATE users SET ... WHERE id = X
    return {
      success: true,
      result,
    };
  } catch (err) {
    return {
      success: false,
      message: err.message,
    };
  }
}

async function remove(id) {
  try {
    const result = await userRepository.delete({ id }); // DELETE FROM users WHERE id = X
    return {
      success: true,
      result,
    };
  } catch (err) {
    return {
      success: false,
      message: err.message,
    };
  }
}

export default { login, register, getAll, getOne, create, update, remove };
