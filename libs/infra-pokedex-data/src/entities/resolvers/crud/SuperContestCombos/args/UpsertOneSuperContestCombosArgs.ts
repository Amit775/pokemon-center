import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestCombosCreateInput } from "../../../inputs/SuperContestCombosCreateInput";
import { SuperContestCombosUpdateInput } from "../../../inputs/SuperContestCombosUpdateInput";
import { SuperContestCombosWhereUniqueInput } from "../../../inputs/SuperContestCombosWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSuperContestCombosArgs {
  @TypeGraphQL.Field(_type => SuperContestCombosWhereUniqueInput, {
    nullable: false
  })
  where!: SuperContestCombosWhereUniqueInput;

  @TypeGraphQL.Field(_type => SuperContestCombosCreateInput, {
    nullable: false
  })
  create!: SuperContestCombosCreateInput;

  @TypeGraphQL.Field(_type => SuperContestCombosUpdateInput, {
    nullable: false
  })
  update!: SuperContestCombosUpdateInput;
}
