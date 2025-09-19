import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateNestedOneWithoutFlagMapInput } from "../inputs/MoveCreateNestedOneWithoutFlagMapInput";

@TypeGraphQL.InputType("MoveFlagMapCreateWithoutFlagInput", {})
export class MoveFlagMapCreateWithoutFlagInput {
  @TypeGraphQL.Field(_type => MoveCreateNestedOneWithoutFlagMapInput, {
    nullable: false
  })
  move!: MoveCreateNestedOneWithoutFlagMapInput;
}
