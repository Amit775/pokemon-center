import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryCreateNestedOneWithoutFlavorsInput } from "../inputs/BerryCreateNestedOneWithoutFlavorsInput";
import { ContestTypeCreateNestedOneWithoutBerryFlavorsInput } from "../inputs/ContestTypeCreateNestedOneWithoutBerryFlavorsInput";

@TypeGraphQL.InputType("BerryFlavorCreateWithoutTypeInput", {})
export class BerryFlavorCreateWithoutTypeInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  flavor!: number;

  @TypeGraphQL.Field(_type => BerryCreateNestedOneWithoutFlavorsInput, {
    nullable: false
  })
  berry!: BerryCreateNestedOneWithoutFlavorsInput;

  @TypeGraphQL.Field(_type => ContestTypeCreateNestedOneWithoutBerryFlavorsInput, {
    nullable: false
  })
  contestType!: ContestTypeCreateNestedOneWithoutBerryFlavorsInput;
}
