import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferenceCreateManyBattleStyleInput } from "../inputs/NatureBattleStylePreferenceCreateManyBattleStyleInput";

@TypeGraphQL.InputType("NatureBattleStylePreferenceCreateManyBattleStyleInputEnvelope", {})
export class NatureBattleStylePreferenceCreateManyBattleStyleInputEnvelope {
  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceCreateManyBattleStyleInput], {
    nullable: false
  })
  data!: NatureBattleStylePreferenceCreateManyBattleStyleInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
