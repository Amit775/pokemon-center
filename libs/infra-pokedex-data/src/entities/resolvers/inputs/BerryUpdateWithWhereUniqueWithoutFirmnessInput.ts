import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryUpdateWithoutFirmnessInput } from "../inputs/BerryUpdateWithoutFirmnessInput";
import { BerryWhereUniqueInput } from "../inputs/BerryWhereUniqueInput";

@TypeGraphQL.InputType("BerryUpdateWithWhereUniqueWithoutFirmnessInput", {})
export class BerryUpdateWithWhereUniqueWithoutFirmnessInput {
  @TypeGraphQL.Field(_type => BerryWhereUniqueInput, {
    nullable: false
  })
  where!: BerryWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryUpdateWithoutFirmnessInput, {
    nullable: false
  })
  data!: BerryUpdateWithoutFirmnessInput;
}
