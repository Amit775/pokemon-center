import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestCombosUpdateInput } from "../../../inputs/SuperContestCombosUpdateInput";
import { SuperContestCombosWhereUniqueInput } from "../../../inputs/SuperContestCombosWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSuperContestCombosArgs {
  @TypeGraphQL.Field(_type => SuperContestCombosUpdateInput, {
    nullable: false
  })
  data!: SuperContestCombosUpdateInput;

  @TypeGraphQL.Field(_type => SuperContestCombosWhereUniqueInput, {
    nullable: false
  })
  where!: SuperContestCombosWhereUniqueInput;
}
