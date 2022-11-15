import { IReqAuth } from "@_types/types";
import { Response } from "express";
import Categories from "@models/categoryModel";

export const deleteCategory = async (req: IReqAuth, res: Response) => {
	try {
		//middleware auth 잘통과 했는지 확인
		if (!req.user) return res.status(400).json({ msg: "Invalid Authorization." });

		//admin 인지 확인
		if (req.user.role !== "admin") return res.status(400).json({ msg: "Invalid Authentication." });

		//category 조회 후 삭제
		const category = await Categories.findOneAndDelete({ name: req.params.slug });
		if (!category) return res.status(400).json({ msg: "Category doesn't exist." });

		res.status(200).json({ msg: "Delete Success!" });
	} catch (err: any) {
		return res.status(500).json({ msg: err.message });
	}
};
