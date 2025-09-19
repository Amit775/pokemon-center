import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferenceScalarWhereInput } from "../inputs/NatureBattleStylePreferenceScalarWhereInput";
import { NatureBattleStylePreferenceUpdateManyMutationInput } from "../inputs/NatureBattleStylePreferenceUpdateManyMutationInput";

@TypeGraphQL.InputType("NatureBattleStylePreferenceUpdateManyWithWhereWithoutNatureInput", {})
export class NatureBattleStylePreferenceUpdateManyWithWhereWithoutNatureInput {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceScalarWhereInput, {
    nullable: false
  })
  where!: NatureBattleStylePreferenceScalarWhereInput;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceUpdateManyMutationInput, {
    nullable: false
  })
  data!: NatureBattleStylePreferenceUpdateManyMutationInput;
}
