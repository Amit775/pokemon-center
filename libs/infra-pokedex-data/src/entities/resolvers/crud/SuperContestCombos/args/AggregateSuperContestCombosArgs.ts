import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestCombosOrderByWithRelationInput } from "../../../inputs/SuperContestCombosOrderByWithRelationInput";
import { SuperContestCombosWhereInput } from "../../../inputs/SuperContestCombosWhereInput";
import { SuperContestCombosWhereUniqueInput } from "../../../inputs/SuperContestCombosWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSuperContestCombosArgs {
  @TypeGraphQL.Field(_type => SuperContestCombosWhereInput, {
    nullable: true
  })
  where?: SuperContestCombosWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SuperContestCombosOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SuperContestCombosOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SuperContestCombosWhereUniqueInput, {
    nullable: true
  })
  cursor?: SuperContestCombosWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
