import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesCreateNestedOneWithoutFlavorsInput } from "../inputs/BerriesCreateNestedOneWithoutFlavorsInput";
import { ContestTypesCreateNestedOneWithoutBerryFlavorsInput } from "../inputs/ContestTypesCreateNestedOneWithoutBerryFlavorsInput";

@TypeGraphQL.InputType("BerryFlavorsCreateWithoutTypeInput", {})
export class BerryFlavorsCreateWithoutTypeInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  flavor!: number;

  @TypeGraphQL.Field(_type => BerriesCreateNestedOneWithoutFlavorsInput, {
    nullable: false
  })
  berry!: BerriesCreateNestedOneWithoutFlavorsInput;

  @TypeGraphQL.Field(_type => ContestTypesCreateNestedOneWithoutBerryFlavorsInput, {
    nullable: false
  })
  contestType!: ContestTypesCreateNestedOneWithoutBerryFlavorsInput;
}
