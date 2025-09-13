import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateNestedOneWithoutFlagMapInput } from "../inputs/MovesCreateNestedOneWithoutFlagMapInput";

@TypeGraphQL.InputType("MoveFlagMapCreateWithoutFlagInput", {})
export class MoveFlagMapCreateWithoutFlagInput {
  @TypeGraphQL.Field(_type => MovesCreateNestedOneWithoutFlagMapInput, {
    nullable: false
  })
  move!: MovesCreateNestedOneWithoutFlagMapInput;
}
