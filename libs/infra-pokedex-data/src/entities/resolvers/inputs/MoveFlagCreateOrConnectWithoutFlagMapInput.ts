import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagCreateWithoutFlagMapInput } from "../inputs/MoveFlagCreateWithoutFlagMapInput";
import { MoveFlagWhereUniqueInput } from "../inputs/MoveFlagWhereUniqueInput";

@TypeGraphQL.InputType("MoveFlagCreateOrConnectWithoutFlagMapInput", {})
export class MoveFlagCreateOrConnectWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => MoveFlagWhereUniqueInput, {
    nullable: false
  })
  where!: MoveFlagWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveFlagCreateWithoutFlagMapInput, {
    nullable: false
  })
  create!: MoveFlagCreateWithoutFlagMapInput;
}
