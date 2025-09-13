import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferencesCreateManyBattleStyleInput } from "../inputs/NatureBattleStylePreferencesCreateManyBattleStyleInput";

@TypeGraphQL.InputType("NatureBattleStylePreferencesCreateManyBattleStyleInputEnvelope", {})
export class NatureBattleStylePreferencesCreateManyBattleStyleInputEnvelope {
  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesCreateManyBattleStyleInput], {
    nullable: false
  })
  data!: NatureBattleStylePreferencesCreateManyBattleStyleInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
