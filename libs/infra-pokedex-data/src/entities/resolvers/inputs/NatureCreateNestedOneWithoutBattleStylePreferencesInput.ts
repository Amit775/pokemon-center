import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureCreateOrConnectWithoutBattleStylePreferencesInput } from "../inputs/NatureCreateOrConnectWithoutBattleStylePreferencesInput";
import { NatureCreateWithoutBattleStylePreferencesInput } from "../inputs/NatureCreateWithoutBattleStylePreferencesInput";
import { NatureWhereUniqueInput } from "../inputs/NatureWhereUniqueInput";

@TypeGraphQL.InputType("NatureCreateNestedOneWithoutBattleStylePreferencesInput", {})
export class NatureCreateNestedOneWithoutBattleStylePreferencesInput {
  @TypeGraphQL.Field(_type => NatureCreateWithoutBattleStylePreferencesInput, {
    nullable: true
  })
  create?: NatureCreateWithoutBattleStylePreferencesInput | undefined;

  @TypeGraphQL.Field(_type => NatureCreateOrConnectWithoutBattleStylePreferencesInput, {
    nullable: true
  })
  connectOrCreate?: NatureCreateOrConnectWithoutBattleStylePreferencesInput | undefined;

  @TypeGraphQL.Field(_type => NatureWhereUniqueInput, {
    nullable: true
  })
  connect?: NatureWhereUniqueInput | undefined;
}
