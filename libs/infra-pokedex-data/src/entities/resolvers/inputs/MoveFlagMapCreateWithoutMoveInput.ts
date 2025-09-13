import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagsCreateNestedOneWithoutFlagMapInput } from "../inputs/MoveFlagsCreateNestedOneWithoutFlagMapInput";

@TypeGraphQL.InputType("MoveFlagMapCreateWithoutMoveInput", {})
export class MoveFlagMapCreateWithoutMoveInput {
  @TypeGraphQL.Field(_type => MoveFlagsCreateNestedOneWithoutFlagMapInput, {
    nullable: false
  })
  flag!: MoveFlagsCreateNestedOneWithoutFlagMapInput;
}
