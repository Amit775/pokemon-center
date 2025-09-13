import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestCombosOrderByWithRelationInput } from "../../../inputs/ContestCombosOrderByWithRelationInput";
import { ContestCombosWhereInput } from "../../../inputs/ContestCombosWhereInput";
import { ContestCombosWhereUniqueInput } from "../../../inputs/ContestCombosWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateContestCombosArgs {
  @TypeGraphQL.Field(_type => ContestCombosWhereInput, {
    nullable: true
  })
  where?: ContestCombosWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ContestCombosOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ContestCombosOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ContestCombosWhereUniqueInput, {
    nullable: true
  })
  cursor?: ContestCombosWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
