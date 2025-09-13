import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveBattleStylesCreateWithoutNaturePreferencesInput } from "../inputs/MoveBattleStylesCreateWithoutNaturePreferencesInput";
import { MoveBattleStylesWhereUniqueInput } from "../inputs/MoveBattleStylesWhereUniqueInput";

@TypeGraphQL.InputType("MoveBattleStylesCreateOrConnectWithoutNaturePreferencesInput", {})
export class MoveBattleStylesCreateOrConnectWithoutNaturePreferencesInput {
  @TypeGraphQL.Field(_type => MoveBattleStylesWhereUniqueInput, {
    nullable: false
  })
  where!: MoveBattleStylesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveBattleStylesCreateWithoutNaturePreferencesInput, {
    nullable: false
  })
  create!: MoveBattleStylesCreateWithoutNaturePreferencesInput;
}
