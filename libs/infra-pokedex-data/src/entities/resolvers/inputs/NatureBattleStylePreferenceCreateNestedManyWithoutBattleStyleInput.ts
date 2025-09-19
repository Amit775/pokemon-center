import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferenceCreateManyBattleStyleInputEnvelope } from "../inputs/NatureBattleStylePreferenceCreateManyBattleStyleInputEnvelope";
import { NatureBattleStylePreferenceCreateOrConnectWithoutBattleStyleInput } from "../inputs/NatureBattleStylePreferenceCreateOrConnectWithoutBattleStyleInput";
import { NatureBattleStylePreferenceCreateWithoutBattleStyleInput } from "../inputs/NatureBattleStylePreferenceCreateWithoutBattleStyleInput";
import { NatureBattleStylePreferenceWhereUniqueInput } from "../inputs/NatureBattleStylePreferenceWhereUniqueInput";

@TypeGraphQL.InputType("NatureBattleStylePreferenceCreateNestedManyWithoutBattleStyleInput", {})
export class NatureBattleStylePreferenceCreateNestedManyWithoutBattleStyleInput {
  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceCreateWithoutBattleStyleInput], {
    nullable: true
  })
  create?: NatureBattleStylePreferenceCreateWithoutBattleStyleInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceCreateOrConnectWithoutBattleStyleInput], {
    nullable: true
  })
  connectOrCreate?: NatureBattleStylePreferenceCreateOrConnectWithoutBattleStyleInput[] | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceCreateManyBattleStyleInputEnvelope, {
    nullable: true
  })
  createMany?: NatureBattleStylePreferenceCreateManyBattleStyleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceWhereUniqueInput], {
    nullable: true
  })
  connect?: NatureBattleStylePreferenceWhereUniqueInput[] | undefined;
}
