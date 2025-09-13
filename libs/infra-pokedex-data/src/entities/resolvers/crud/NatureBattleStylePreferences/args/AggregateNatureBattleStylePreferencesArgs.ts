import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NatureBattleStylePreferencesOrderByWithRelationInput } from "../../../inputs/NatureBattleStylePreferencesOrderByWithRelationInput";
import { NatureBattleStylePreferencesWhereInput } from "../../../inputs/NatureBattleStylePreferencesWhereInput";
import { NatureBattleStylePreferencesWhereUniqueInput } from "../../../inputs/NatureBattleStylePreferencesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateNatureBattleStylePreferencesArgs {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesWhereInput, {
    nullable: true
  })
  where?: NatureBattleStylePreferencesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: NatureBattleStylePreferencesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesWhereUniqueInput, {
    nullable: true
  })
  cursor?: NatureBattleStylePreferencesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
