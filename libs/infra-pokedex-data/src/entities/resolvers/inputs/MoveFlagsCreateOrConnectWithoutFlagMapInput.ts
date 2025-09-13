import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagsCreateWithoutFlagMapInput } from "../inputs/MoveFlagsCreateWithoutFlagMapInput";
import { MoveFlagsWhereUniqueInput } from "../inputs/MoveFlagsWhereUniqueInput";

@TypeGraphQL.InputType("MoveFlagsCreateOrConnectWithoutFlagMapInput", {})
export class MoveFlagsCreateOrConnectWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => MoveFlagsWhereUniqueInput, {
    nullable: false
  })
  where!: MoveFlagsWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveFlagsCreateWithoutFlagMapInput, {
    nullable: false
  })
  create!: MoveFlagsCreateWithoutFlagMapInput;
}
