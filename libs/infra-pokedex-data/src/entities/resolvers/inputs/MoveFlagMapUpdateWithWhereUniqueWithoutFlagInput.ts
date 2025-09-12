import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagMapUpdateWithoutFlagInput } from "../inputs/MoveFlagMapUpdateWithoutFlagInput";
import { MoveFlagMapWhereUniqueInput } from "../inputs/MoveFlagMapWhereUniqueInput";

@TypeGraphQL.InputType("MoveFlagMapUpdateWithWhereUniqueWithoutFlagInput", {})
export class MoveFlagMapUpdateWithWhereUniqueWithoutFlagInput {
  @TypeGraphQL.Field(_type => MoveFlagMapWhereUniqueInput, {
    nullable: false
  })
  where!: MoveFlagMapWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveFlagMapUpdateWithoutFlagInput, {
    nullable: false
  })
  data!: MoveFlagMapUpdateWithoutFlagInput;
}
