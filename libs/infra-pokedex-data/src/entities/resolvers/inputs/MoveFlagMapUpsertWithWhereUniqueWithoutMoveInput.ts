import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagMapCreateWithoutMoveInput } from "../inputs/MoveFlagMapCreateWithoutMoveInput";
import { MoveFlagMapUpdateWithoutMoveInput } from "../inputs/MoveFlagMapUpdateWithoutMoveInput";
import { MoveFlagMapWhereUniqueInput } from "../inputs/MoveFlagMapWhereUniqueInput";

@TypeGraphQL.InputType("MoveFlagMapUpsertWithWhereUniqueWithoutMoveInput", {})
export class MoveFlagMapUpsertWithWhereUniqueWithoutMoveInput {
  @TypeGraphQL.Field(_type => MoveFlagMapWhereUniqueInput, {
    nullable: false
  })
  where!: MoveFlagMapWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveFlagMapUpdateWithoutMoveInput, {
    nullable: false
  })
  update!: MoveFlagMapUpdateWithoutMoveInput;

  @TypeGraphQL.Field(_type => MoveFlagMapCreateWithoutMoveInput, {
    nullable: false
  })
  create!: MoveFlagMapCreateWithoutMoveInput;
}
