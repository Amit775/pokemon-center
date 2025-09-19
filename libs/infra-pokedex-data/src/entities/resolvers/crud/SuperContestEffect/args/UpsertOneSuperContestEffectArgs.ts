import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestEffectCreateInput } from "../../../inputs/SuperContestEffectCreateInput";
import { SuperContestEffectUpdateInput } from "../../../inputs/SuperContestEffectUpdateInput";
import { SuperContestEffectWhereUniqueInput } from "../../../inputs/SuperContestEffectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSuperContestEffectArgs {
  @TypeGraphQL.Field(_type => SuperContestEffectWhereUniqueInput, {
    nullable: false
  })
  where!: SuperContestEffectWhereUniqueInput;

  @TypeGraphQL.Field(_type => SuperContestEffectCreateInput, {
    nullable: false
  })
  create!: SuperContestEffectCreateInput;

  @TypeGraphQL.Field(_type => SuperContestEffectUpdateInput, {
    nullable: false
  })
  update!: SuperContestEffectUpdateInput;
}
