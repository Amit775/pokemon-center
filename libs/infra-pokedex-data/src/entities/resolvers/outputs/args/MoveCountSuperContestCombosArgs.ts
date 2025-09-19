import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestComboWhereInput } from "../../inputs/SuperContestComboWhereInput";

@TypeGraphQL.ArgsType()
export class MoveCountSuperContestCombosArgs {
  @TypeGraphQL.Field(_type => SuperContestComboWhereInput, {
    nullable: true
  })
  where?: SuperContestComboWhereInput | undefined;
}
