import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypeCreateNestedOneWithoutBerryFlavorsInput } from "../inputs/ContestTypeCreateNestedOneWithoutBerryFlavorsInput";
import { TypeCreateNestedOneWithoutBerryFlavorsInput } from "../inputs/TypeCreateNestedOneWithoutBerryFlavorsInput";

@TypeGraphQL.InputType("BerryFlavorCreateWithoutBerryInput", {})
export class BerryFlavorCreateWithoutBerryInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  flavor!: number;

  @TypeGraphQL.Field(_type => ContestTypeCreateNestedOneWithoutBerryFlavorsInput, {
    nullable: false
  })
  contestType!: ContestTypeCreateNestedOneWithoutBerryFlavorsInput;

  @TypeGraphQL.Field(_type => TypeCreateNestedOneWithoutBerryFlavorsInput, {
    nullable: false
  })
  type!: TypeCreateNestedOneWithoutBerryFlavorsInput;
}
