import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorsCreateWithoutTypeInput } from "../inputs/BerryFlavorsCreateWithoutTypeInput";
import { BerryFlavorsUpdateWithoutTypeInput } from "../inputs/BerryFlavorsUpdateWithoutTypeInput";
import { BerryFlavorsWhereUniqueInput } from "../inputs/BerryFlavorsWhereUniqueInput";

@TypeGraphQL.InputType("BerryFlavorsUpsertWithWhereUniqueWithoutTypeInput", {})
export class BerryFlavorsUpsertWithWhereUniqueWithoutTypeInput {
  @TypeGraphQL.Field(_type => BerryFlavorsWhereUniqueInput, {
    nullable: false
  })
  where!: BerryFlavorsWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryFlavorsUpdateWithoutTypeInput, {
    nullable: false
  })
  update!: BerryFlavorsUpdateWithoutTypeInput;

  @TypeGraphQL.Field(_type => BerryFlavorsCreateWithoutTypeInput, {
    nullable: false
  })
  create!: BerryFlavorsCreateWithoutTypeInput;
}
