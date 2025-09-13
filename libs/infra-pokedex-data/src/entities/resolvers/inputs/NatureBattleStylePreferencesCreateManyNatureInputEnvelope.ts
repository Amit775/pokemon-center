import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferencesCreateManyNatureInput } from "../inputs/NatureBattleStylePreferencesCreateManyNatureInput";

@TypeGraphQL.InputType("NatureBattleStylePreferencesCreateManyNatureInputEnvelope", {})
export class NatureBattleStylePreferencesCreateManyNatureInputEnvelope {
  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesCreateManyNatureInput], {
    nullable: false
  })
  data!: NatureBattleStylePreferencesCreateManyNatureInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
