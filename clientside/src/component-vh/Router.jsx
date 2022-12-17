import { Route, Routes } from "react-router-dom";
import { Data } from "./Data";
import { Delete } from "./Delete";
import { Edit } from "./Editpage";
import { Premium } from "./Premium";
import { Role } from "./Role";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/data" element={<Data />}>
          Insert Data
        </Route>
        <Route path="/role" element={<Role />}>
          Role
        </Route>
        <Route path="/plan" element={<Premium />}>
          User Data
        </Route>
        <Route path="/delete" element={<Delete />}>
          Remove
        </Route>
        <Route path="/edit" element={<Edit />}>
          Edit
        </Route>
      </Routes>
    </>
  );
};
