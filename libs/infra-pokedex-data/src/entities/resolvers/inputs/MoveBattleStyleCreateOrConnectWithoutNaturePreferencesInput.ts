import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveBattleStyleCreateWithoutNaturePreferencesInput } from "../inputs/MoveBattleStyleCreateWithoutNaturePreferencesInput";
import { MoveBattleStyleWhereUniqueInput } from "../inputs/MoveBattleStyleWhereUniqueInput";

@TypeGraphQL.InputType("MoveBattleStyleCreateOrConnectWithoutNaturePreferencesInput", {})
export class MoveBattleStyleCreateOrConnectWithoutNaturePreferencesInput {
  @TypeGraphQL.Field(_type => MoveBattleStyleWhereUniqueInput, {
    nullable: false
  })
  where!: MoveBattleStyleWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveBattleStyleCreateWithoutNaturePreferencesInput, {
    nullable: false
  })
  create!: MoveBattleStyleCreateWithoutNaturePreferencesInput;
}
