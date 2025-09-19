import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateNestedOneWithoutFlagMapInput } from "../inputs/MoveCreateNestedOneWithoutFlagMapInput";
import { MoveFlagCreateNestedOneWithoutFlagMapInput } from "../inputs/MoveFlagCreateNestedOneWithoutFlagMapInput";

@TypeGraphQL.InputType("MoveFlagMapCreateInput", {})
export class MoveFlagMapCreateInput {
  @TypeGraphQL.Field(_type => MoveCreateNestedOneWithoutFlagMapInput, {
    nullable: false
  })
  move!: MoveCreateNestedOneWithoutFlagMapInput;

  @TypeGraphQL.Field(_type => MoveFlagCreateNestedOneWithoutFlagMapInput, {
    nullable: false
  })
  flag!: MoveFlagCreateNestedOneWithoutFlagMapInput;
}
