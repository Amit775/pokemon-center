import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveBattleStyleCreateOrConnectWithoutNaturePreferencesInput } from "../inputs/MoveBattleStyleCreateOrConnectWithoutNaturePreferencesInput";
import { MoveBattleStyleCreateWithoutNaturePreferencesInput } from "../inputs/MoveBattleStyleCreateWithoutNaturePreferencesInput";
import { MoveBattleStyleWhereUniqueInput } from "../inputs/MoveBattleStyleWhereUniqueInput";

@TypeGraphQL.InputType("MoveBattleStyleCreateNestedOneWithoutNaturePreferencesInput", {})
export class MoveBattleStyleCreateNestedOneWithoutNaturePreferencesInput {
  @TypeGraphQL.Field(_type => MoveBattleStyleCreateWithoutNaturePreferencesInput, {
    nullable: true
  })
  create?: MoveBattleStyleCreateWithoutNaturePreferencesInput | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStyleCreateOrConnectWithoutNaturePreferencesInput, {
    nullable: true
  })
  connectOrCreate?: MoveBattleStyleCreateOrConnectWithoutNaturePreferencesInput | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStyleWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveBattleStyleWhereUniqueInput | undefined;
}
