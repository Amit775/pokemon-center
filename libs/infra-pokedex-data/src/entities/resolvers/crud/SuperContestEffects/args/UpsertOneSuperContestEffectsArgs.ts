import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestEffectsCreateInput } from "../../../inputs/SuperContestEffectsCreateInput";
import { SuperContestEffectsUpdateInput } from "../../../inputs/SuperContestEffectsUpdateInput";
import { SuperContestEffectsWhereUniqueInput } from "../../../inputs/SuperContestEffectsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSuperContestEffectsArgs {
  @TypeGraphQL.Field(_type => SuperContestEffectsWhereUniqueInput, {
    nullable: false
  })
  where!: SuperContestEffectsWhereUniqueInput;

  @TypeGraphQL.Field(_type => SuperContestEffectsCreateInput, {
    nullable: false
  })
  create!: SuperContestEffectsCreateInput;

  @TypeGraphQL.Field(_type => SuperContestEffectsUpdateInput, {
    nullable: false
  })
  update!: SuperContestEffectsUpdateInput;
}
