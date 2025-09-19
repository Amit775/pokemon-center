import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestComboUpdateInput } from "../../../inputs/SuperContestComboUpdateInput";
import { SuperContestComboWhereUniqueInput } from "../../../inputs/SuperContestComboWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSuperContestComboArgs {
  @TypeGraphQL.Field(_type => SuperContestComboUpdateInput, {
    nullable: false
  })
  data!: SuperContestComboUpdateInput;

  @TypeGraphQL.Field(_type => SuperContestComboWhereUniqueInput, {
    nullable: false
  })
  where!: SuperContestComboWhereUniqueInput;
}
