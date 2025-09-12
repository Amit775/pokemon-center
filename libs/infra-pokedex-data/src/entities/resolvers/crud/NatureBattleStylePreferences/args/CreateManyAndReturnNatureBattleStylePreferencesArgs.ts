import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NatureBattleStylePreferencesCreateManyInput } from "../../../inputs/NatureBattleStylePreferencesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnNatureBattleStylePreferencesArgs {
  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesCreateManyInput], {
    nullable: false
  })
  data!: NatureBattleStylePreferencesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
