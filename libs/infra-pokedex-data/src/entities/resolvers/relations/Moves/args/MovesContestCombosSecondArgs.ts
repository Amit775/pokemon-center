import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestCombosOrderByWithRelationInput } from "../../../inputs/ContestCombosOrderByWithRelationInput";
import { ContestCombosWhereInput } from "../../../inputs/ContestCombosWhereInput";
import { ContestCombosWhereUniqueInput } from "../../../inputs/ContestCombosWhereUniqueInput";
import { ContestCombosScalarFieldEnum } from "../../../../enums/ContestCombosScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class MovesContestCombosSecondArgs {
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

  @TypeGraphQL.Field(_type => [ContestCombosScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"first_move_id" | "second_move_id"> | undefined;
}
