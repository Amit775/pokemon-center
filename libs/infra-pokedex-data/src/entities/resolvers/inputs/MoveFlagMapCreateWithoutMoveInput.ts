import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagCreateNestedOneWithoutFlagMapInput } from "../inputs/MoveFlagCreateNestedOneWithoutFlagMapInput";

@TypeGraphQL.InputType("MoveFlagMapCreateWithoutMoveInput", {})
export class MoveFlagMapCreateWithoutMoveInput {
  @TypeGraphQL.Field(_type => MoveFlagCreateNestedOneWithoutFlagMapInput, {
    nullable: false
  })
  flag!: MoveFlagCreateNestedOneWithoutFlagMapInput;
}
