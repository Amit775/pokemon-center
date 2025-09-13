import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorsUpdateWithoutTypeInput } from "../inputs/BerryFlavorsUpdateWithoutTypeInput";
import { BerryFlavorsWhereUniqueInput } from "../inputs/BerryFlavorsWhereUniqueInput";

@TypeGraphQL.InputType("BerryFlavorsUpdateWithWhereUniqueWithoutTypeInput", {})
export class BerryFlavorsUpdateWithWhereUniqueWithoutTypeInput {
  @TypeGraphQL.Field(_type => BerryFlavorsWhereUniqueInput, {
    nullable: false
  })
  where!: BerryFlavorsWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryFlavorsUpdateWithoutTypeInput, {
    nullable: false
  })
  data!: BerryFlavorsUpdateWithoutTypeInput;
}
