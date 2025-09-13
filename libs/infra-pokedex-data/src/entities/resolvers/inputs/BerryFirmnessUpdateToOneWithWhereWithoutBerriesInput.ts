import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFirmnessUpdateWithoutBerriesInput } from "../inputs/BerryFirmnessUpdateWithoutBerriesInput";
import { BerryFirmnessWhereInput } from "../inputs/BerryFirmnessWhereInput";

@TypeGraphQL.InputType("BerryFirmnessUpdateToOneWithWhereWithoutBerriesInput", {})
export class BerryFirmnessUpdateToOneWithWhereWithoutBerriesInput {
  @TypeGraphQL.Field(_type => BerryFirmnessWhereInput, {
    nullable: true
  })
  where?: BerryFirmnessWhereInput | undefined;

  @TypeGraphQL.Field(_type => BerryFirmnessUpdateWithoutBerriesInput, {
    nullable: false
  })
  data!: BerryFirmnessUpdateWithoutBerriesInput;
}
