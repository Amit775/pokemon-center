import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferenceCreateManyNatureInput } from "../inputs/NatureBattleStylePreferenceCreateManyNatureInput";

@TypeGraphQL.InputType("NatureBattleStylePreferenceCreateManyNatureInputEnvelope", {})
export class NatureBattleStylePreferenceCreateManyNatureInputEnvelope {
  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceCreateManyNatureInput], {
    nullable: false
  })
  data!: NatureBattleStylePreferenceCreateManyNatureInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
