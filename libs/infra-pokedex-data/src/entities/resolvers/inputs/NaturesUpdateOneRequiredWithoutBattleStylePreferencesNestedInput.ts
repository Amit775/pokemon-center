import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesCreateOrConnectWithoutBattleStylePreferencesInput } from "../inputs/NaturesCreateOrConnectWithoutBattleStylePreferencesInput";
import { NaturesCreateWithoutBattleStylePreferencesInput } from "../inputs/NaturesCreateWithoutBattleStylePreferencesInput";
import { NaturesUpdateToOneWithWhereWithoutBattleStylePreferencesInput } from "../inputs/NaturesUpdateToOneWithWhereWithoutBattleStylePreferencesInput";
import { NaturesUpsertWithoutBattleStylePreferencesInput } from "../inputs/NaturesUpsertWithoutBattleStylePreferencesInput";
import { NaturesWhereUniqueInput } from "../inputs/NaturesWhereUniqueInput";

@TypeGraphQL.InputType("NaturesUpdateOneRequiredWithoutBattleStylePreferencesNestedInput", {})
export class NaturesUpdateOneRequiredWithoutBattleStylePreferencesNestedInput {
  @TypeGraphQL.Field(_type => NaturesCreateWithoutBattleStylePreferencesInput, {
    nullable: true
  })
  create?: NaturesCreateWithoutBattleStylePreferencesInput | undefined;

  @TypeGraphQL.Field(_type => NaturesCreateOrConnectWithoutBattleStylePreferencesInput, {
    nullable: true
  })
  connectOrCreate?: NaturesCreateOrConnectWithoutBattleStylePreferencesInput | undefined;

  @TypeGraphQL.Field(_type => NaturesUpsertWithoutBattleStylePreferencesInput, {
    nullable: true
  })
  upsert?: NaturesUpsertWithoutBattleStylePreferencesInput | undefined;

  @TypeGraphQL.Field(_type => NaturesWhereUniqueInput, {
    nullable: true
  })
  connect?: NaturesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => NaturesUpdateToOneWithWhereWithoutBattleStylePreferencesInput, {
    nullable: true
  })
  update?: NaturesUpdateToOneWithWhereWithoutBattleStylePreferencesInput | undefined;
}
