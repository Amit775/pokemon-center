import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFirmnessCreateWithoutBerriesInput } from "../inputs/BerryFirmnessCreateWithoutBerriesInput";
import { BerryFirmnessWhereUniqueInput } from "../inputs/BerryFirmnessWhereUniqueInput";

@TypeGraphQL.InputType("BerryFirmnessCreateOrConnectWithoutBerriesInput", {})
export class BerryFirmnessCreateOrConnectWithoutBerriesInput {
  @TypeGraphQL.Field(_type => BerryFirmnessWhereUniqueInput, {
    nullable: false
  })
  where!: BerryFirmnessWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryFirmnessCreateWithoutBerriesInput, {
    nullable: false
  })
  create!: BerryFirmnessCreateWithoutBerriesInput;
}
