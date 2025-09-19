import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateWithoutGenerationsInput } from "../inputs/RegionCreateWithoutGenerationsInput";
import { RegionUpdateWithoutGenerationsInput } from "../inputs/RegionUpdateWithoutGenerationsInput";
import { RegionWhereInput } from "../inputs/RegionWhereInput";

@TypeGraphQL.InputType("RegionUpsertWithoutGenerationsInput", {})
export class RegionUpsertWithoutGenerationsInput {
  @TypeGraphQL.Field(_type => RegionUpdateWithoutGenerationsInput, {
    nullable: false
  })
  update!: RegionUpdateWithoutGenerationsInput;

  @TypeGraphQL.Field(_type => RegionCreateWithoutGenerationsInput, {
    nullable: false
  })
  create!: RegionCreateWithoutGenerationsInput;

  @TypeGraphQL.Field(_type => RegionWhereInput, {
    nullable: true
  })
  where?: RegionWhereInput | undefined;
}
