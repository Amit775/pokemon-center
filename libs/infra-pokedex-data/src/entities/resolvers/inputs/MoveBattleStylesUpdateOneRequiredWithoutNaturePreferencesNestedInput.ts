import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveBattleStylesCreateOrConnectWithoutNaturePreferencesInput } from "../inputs/MoveBattleStylesCreateOrConnectWithoutNaturePreferencesInput";
import { MoveBattleStylesCreateWithoutNaturePreferencesInput } from "../inputs/MoveBattleStylesCreateWithoutNaturePreferencesInput";
import { MoveBattleStylesUpdateToOneWithWhereWithoutNaturePreferencesInput } from "../inputs/MoveBattleStylesUpdateToOneWithWhereWithoutNaturePreferencesInput";
import { MoveBattleStylesUpsertWithoutNaturePreferencesInput } from "../inputs/MoveBattleStylesUpsertWithoutNaturePreferencesInput";
import { MoveBattleStylesWhereUniqueInput } from "../inputs/MoveBattleStylesWhereUniqueInput";

@TypeGraphQL.InputType("MoveBattleStylesUpdateOneRequiredWithoutNaturePreferencesNestedInput", {})
export class MoveBattleStylesUpdateOneRequiredWithoutNaturePreferencesNestedInput {
  @TypeGraphQL.Field(_type => MoveBattleStylesCreateWithoutNaturePreferencesInput, {
    nullable: true
  })
  create?: MoveBattleStylesCreateWithoutNaturePreferencesInput | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStylesCreateOrConnectWithoutNaturePreferencesInput, {
    nullable: true
  })
  connectOrCreate?: MoveBattleStylesCreateOrConnectWithoutNaturePreferencesInput | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStylesUpsertWithoutNaturePreferencesInput, {
    nullable: true
  })
  upsert?: MoveBattleStylesUpsertWithoutNaturePreferencesInput | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStylesWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveBattleStylesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStylesUpdateToOneWithWhereWithoutNaturePreferencesInput, {
    nullable: true
  })
  update?: MoveBattleStylesUpdateToOneWithWhereWithoutNaturePreferencesInput | undefined;
}
