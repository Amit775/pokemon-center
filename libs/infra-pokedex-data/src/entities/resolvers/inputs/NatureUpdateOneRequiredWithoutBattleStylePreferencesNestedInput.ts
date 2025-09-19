import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureCreateOrConnectWithoutBattleStylePreferencesInput } from "../inputs/NatureCreateOrConnectWithoutBattleStylePreferencesInput";
import { NatureCreateWithoutBattleStylePreferencesInput } from "../inputs/NatureCreateWithoutBattleStylePreferencesInput";
import { NatureUpdateToOneWithWhereWithoutBattleStylePreferencesInput } from "../inputs/NatureUpdateToOneWithWhereWithoutBattleStylePreferencesInput";
import { NatureUpsertWithoutBattleStylePreferencesInput } from "../inputs/NatureUpsertWithoutBattleStylePreferencesInput";
import { NatureWhereUniqueInput } from "../inputs/NatureWhereUniqueInput";

@TypeGraphQL.InputType("NatureUpdateOneRequiredWithoutBattleStylePreferencesNestedInput", {})
export class NatureUpdateOneRequiredWithoutBattleStylePreferencesNestedInput {
  @TypeGraphQL.Field(_type => NatureCreateWithoutBattleStylePreferencesInput, {
    nullable: true
  })
  create?: NatureCreateWithoutBattleStylePreferencesInput | undefined;

  @TypeGraphQL.Field(_type => NatureCreateOrConnectWithoutBattleStylePreferencesInput, {
    nullable: true
  })
  connectOrCreate?: NatureCreateOrConnectWithoutBattleStylePreferencesInput | undefined;

  @TypeGraphQL.Field(_type => NatureUpsertWithoutBattleStylePreferencesInput, {
    nullable: true
  })
  upsert?: NatureUpsertWithoutBattleStylePreferencesInput | undefined;

  @TypeGraphQL.Field(_type => NatureWhereUniqueInput, {
    nullable: true
  })
  connect?: NatureWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => NatureUpdateToOneWithWhereWithoutBattleStylePreferencesInput, {
    nullable: true
  })
  update?: NatureUpdateToOneWithWhereWithoutBattleStylePreferencesInput | undefined;
}
