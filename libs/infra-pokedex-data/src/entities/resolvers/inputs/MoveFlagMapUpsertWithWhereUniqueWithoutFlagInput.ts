import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagMapCreateWithoutFlagInput } from "../inputs/MoveFlagMapCreateWithoutFlagInput";
import { MoveFlagMapUpdateWithoutFlagInput } from "../inputs/MoveFlagMapUpdateWithoutFlagInput";
import { MoveFlagMapWhereUniqueInput } from "../inputs/MoveFlagMapWhereUniqueInput";

@TypeGraphQL.InputType("MoveFlagMapUpsertWithWhereUniqueWithoutFlagInput", {})
export class MoveFlagMapUpsertWithWhereUniqueWithoutFlagInput {
  @TypeGraphQL.Field(_type => MoveFlagMapWhereUniqueInput, {
    nullable: false
  })
  where!: MoveFlagMapWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveFlagMapUpdateWithoutFlagInput, {
    nullable: false
  })
  update!: MoveFlagMapUpdateWithoutFlagInput;

  @TypeGraphQL.Field(_type => MoveFlagMapCreateWithoutFlagInput, {
    nullable: false
  })
  create!: MoveFlagMapCreateWithoutFlagInput;
}
