import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagMapUpdateWithoutMoveInput } from "../inputs/MoveFlagMapUpdateWithoutMoveInput";
import { MoveFlagMapWhereUniqueInput } from "../inputs/MoveFlagMapWhereUniqueInput";

@TypeGraphQL.InputType("MoveFlagMapUpdateWithWhereUniqueWithoutMoveInput", {})
export class MoveFlagMapUpdateWithWhereUniqueWithoutMoveInput {
  @TypeGraphQL.Field(_type => MoveFlagMapWhereUniqueInput, {
    nullable: false
  })
  where!: MoveFlagMapWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveFlagMapUpdateWithoutMoveInput, {
    nullable: false
  })
  data!: MoveFlagMapUpdateWithoutMoveInput;
}
