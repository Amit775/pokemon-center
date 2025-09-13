import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesCreateNestedOneWithoutFlavorsInput } from "../inputs/BerriesCreateNestedOneWithoutFlavorsInput";
import { TypesCreateNestedOneWithoutBerryFlavorsInput } from "../inputs/TypesCreateNestedOneWithoutBerryFlavorsInput";

@TypeGraphQL.InputType("BerryFlavorsCreateWithoutContestTypeInput", {})
export class BerryFlavorsCreateWithoutContestTypeInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  flavor!: number;

  @TypeGraphQL.Field(_type => BerriesCreateNestedOneWithoutFlavorsInput, {
    nullable: false
  })
  berry!: BerriesCreateNestedOneWithoutFlavorsInput;

  @TypeGraphQL.Field(_type => TypesCreateNestedOneWithoutBerryFlavorsInput, {
    nullable: false
  })
  type!: TypesCreateNestedOneWithoutBerryFlavorsInput;
}
