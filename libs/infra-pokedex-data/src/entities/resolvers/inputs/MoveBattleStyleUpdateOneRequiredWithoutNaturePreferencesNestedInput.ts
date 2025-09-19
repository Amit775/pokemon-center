import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveBattleStyleCreateOrConnectWithoutNaturePreferencesInput } from "../inputs/MoveBattleStyleCreateOrConnectWithoutNaturePreferencesInput";
import { MoveBattleStyleCreateWithoutNaturePreferencesInput } from "../inputs/MoveBattleStyleCreateWithoutNaturePreferencesInput";
import { MoveBattleStyleUpdateToOneWithWhereWithoutNaturePreferencesInput } from "../inputs/MoveBattleStyleUpdateToOneWithWhereWithoutNaturePreferencesInput";
import { MoveBattleStyleUpsertWithoutNaturePreferencesInput } from "../inputs/MoveBattleStyleUpsertWithoutNaturePreferencesInput";
import { MoveBattleStyleWhereUniqueInput } from "../inputs/MoveBattleStyleWhereUniqueInput";

@TypeGraphQL.InputType("MoveBattleStyleUpdateOneRequiredWithoutNaturePreferencesNestedInput", {})
export class MoveBattleStyleUpdateOneRequiredWithoutNaturePreferencesNestedInput {
  @TypeGraphQL.Field(_type => MoveBattleStyleCreateWithoutNaturePreferencesInput, {
    nullable: true
  })
  create?: MoveBattleStyleCreateWithoutNaturePreferencesInput | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStyleCreateOrConnectWithoutNaturePreferencesInput, {
    nullable: true
  })
  connectOrCreate?: MoveBattleStyleCreateOrConnectWithoutNaturePreferencesInput | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStyleUpsertWithoutNaturePreferencesInput, {
    nullable: true
  })
  upsert?: MoveBattleStyleUpsertWithoutNaturePreferencesInput | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStyleWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveBattleStyleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStyleUpdateToOneWithWhereWithoutNaturePreferencesInput, {
    nullable: true
  })
  update?: MoveBattleStyleUpdateToOneWithWhereWithoutNaturePreferencesInput | undefined;
}
