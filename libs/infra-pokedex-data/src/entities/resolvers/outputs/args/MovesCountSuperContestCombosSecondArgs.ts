import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestCombosWhereInput } from "../../inputs/SuperContestCombosWhereInput";

@TypeGraphQL.ArgsType()
export class MovesCountSuperContestCombosSecondArgs {
  @TypeGraphQL.Field(_type => SuperContestCombosWhereInput, {
    nullable: true
  })
  where?: SuperContestCombosWhereInput | undefined;
}
