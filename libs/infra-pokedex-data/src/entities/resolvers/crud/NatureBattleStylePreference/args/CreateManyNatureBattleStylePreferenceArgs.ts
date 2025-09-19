import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NatureBattleStylePreferenceCreateManyInput } from "../../../inputs/NatureBattleStylePreferenceCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyNatureBattleStylePreferenceArgs {
  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceCreateManyInput], {
    nullable: false
  })
  data!: NatureBattleStylePreferenceCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
