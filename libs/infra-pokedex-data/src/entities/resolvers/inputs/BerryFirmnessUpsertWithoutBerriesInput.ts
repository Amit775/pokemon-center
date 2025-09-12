import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFirmnessCreateWithoutBerriesInput } from "../inputs/BerryFirmnessCreateWithoutBerriesInput";
import { BerryFirmnessUpdateWithoutBerriesInput } from "../inputs/BerryFirmnessUpdateWithoutBerriesInput";
import { BerryFirmnessWhereInput } from "../inputs/BerryFirmnessWhereInput";

@TypeGraphQL.InputType("BerryFirmnessUpsertWithoutBerriesInput", {})
export class BerryFirmnessUpsertWithoutBerriesInput {
  @TypeGraphQL.Field(_type => BerryFirmnessUpdateWithoutBerriesInput, {
    nullable: false
  })
  update!: BerryFirmnessUpdateWithoutBerriesInput;

  @TypeGraphQL.Field(_type => BerryFirmnessCreateWithoutBerriesInput, {
    nullable: false
  })
  create!: BerryFirmnessCreateWithoutBerriesInput;

  @TypeGraphQL.Field(_type => BerryFirmnessWhereInput, {
    nullable: true
  })
  where?: BerryFirmnessWhereInput | undefined;
}
