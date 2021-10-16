import { ApiResponse } from "./../../../shared/types.d";
import { supabase } from "../main";
import { Injectable } from "@nestjs/common";
import { Tech } from "./tech";
// import { Tech } from "./tech";

@Injectable()
export class TechService {
  async getAllTech(): Promise<ApiResponse<Tech[]>> {
    const { data, error } = await supabase
      .from("tech")
      .select(`*`)
      .order("stack_order", { ascending: true });

    if (error) {
      return {
        success: false,
        message: "getAllTech failed",
      };
    }

    return {
      success: true,
      message: `Retrieved ${data.length} items from tech`,
      data,
    };
  }
}
