import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestComboCreateInput } from "../../../inputs/SuperContestComboCreateInput";
import { SuperContestComboUpdateInput } from "../../../inputs/SuperContestComboUpdateInput";
import { SuperContestComboWhereUniqueInput } from "../../../inputs/SuperContestComboWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSuperContestComboArgs {
  @TypeGraphQL.Field(_type => SuperContestComboWhereUniqueInput, {
    nullable: false
  })
  where!: SuperContestComboWhereUniqueInput;

  @TypeGraphQL.Field(_type => SuperContestComboCreateInput, {
    nullable: false
  })
  create!: SuperContestComboCreateInput;

  @TypeGraphQL.Field(_type => SuperContestComboUpdateInput, {
    nullable: false
  })
  update!: SuperContestComboUpdateInput;
}
