import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryCreateWithoutFirmnessInput } from "../inputs/BerryCreateWithoutFirmnessInput";
import { BerryUpdateWithoutFirmnessInput } from "../inputs/BerryUpdateWithoutFirmnessInput";
import { BerryWhereUniqueInput } from "../inputs/BerryWhereUniqueInput";

@TypeGraphQL.InputType("BerryUpsertWithWhereUniqueWithoutFirmnessInput", {})
export class BerryUpsertWithWhereUniqueWithoutFirmnessInput {
  @TypeGraphQL.Field(_type => BerryWhereUniqueInput, {
    nullable: false
  })
  where!: BerryWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryUpdateWithoutFirmnessInput, {
    nullable: false
  })
  update!: BerryUpdateWithoutFirmnessInput;

  @TypeGraphQL.Field(_type => BerryCreateWithoutFirmnessInput, {
    nullable: false
  })
  create!: BerryCreateWithoutFirmnessInput;
}
