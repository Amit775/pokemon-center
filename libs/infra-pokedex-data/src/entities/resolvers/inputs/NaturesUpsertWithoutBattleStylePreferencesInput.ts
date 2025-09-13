import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesCreateWithoutBattleStylePreferencesInput } from "../inputs/NaturesCreateWithoutBattleStylePreferencesInput";
import { NaturesUpdateWithoutBattleStylePreferencesInput } from "../inputs/NaturesUpdateWithoutBattleStylePreferencesInput";
import { NaturesWhereInput } from "../inputs/NaturesWhereInput";

@TypeGraphQL.InputType("NaturesUpsertWithoutBattleStylePreferencesInput", {})
export class NaturesUpsertWithoutBattleStylePreferencesInput {
  @TypeGraphQL.Field(_type => NaturesUpdateWithoutBattleStylePreferencesInput, {
    nullable: false
  })
  update!: NaturesUpdateWithoutBattleStylePreferencesInput;

  @TypeGraphQL.Field(_type => NaturesCreateWithoutBattleStylePreferencesInput, {
    nullable: false
  })
  create!: NaturesCreateWithoutBattleStylePreferencesInput;

  @TypeGraphQL.Field(_type => NaturesWhereInput, {
    nullable: true
  })
  where?: NaturesWhereInput | undefined;
}
