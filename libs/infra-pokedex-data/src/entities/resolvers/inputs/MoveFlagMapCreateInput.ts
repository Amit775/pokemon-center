import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagsCreateNestedOneWithoutFlagMapInput } from "../inputs/MoveFlagsCreateNestedOneWithoutFlagMapInput";
import { MovesCreateNestedOneWithoutFlagMapInput } from "../inputs/MovesCreateNestedOneWithoutFlagMapInput";

@TypeGraphQL.InputType("MoveFlagMapCreateInput", {})
export class MoveFlagMapCreateInput {
  @TypeGraphQL.Field(_type => MovesCreateNestedOneWithoutFlagMapInput, {
    nullable: false
  })
  move!: MovesCreateNestedOneWithoutFlagMapInput;

  @TypeGraphQL.Field(_type => MoveFlagsCreateNestedOneWithoutFlagMapInput, {
    nullable: false
  })
  flag!: MoveFlagsCreateNestedOneWithoutFlagMapInput;
}
