import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestComboOrderByWithRelationInput } from "../../../inputs/ContestComboOrderByWithRelationInput";
import { ContestComboWhereInput } from "../../../inputs/ContestComboWhereInput";
import { ContestComboWhereUniqueInput } from "../../../inputs/ContestComboWhereUniqueInput";
import { ContestComboScalarFieldEnum } from "../../../../enums/ContestComboScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class MoveContestCombosArgs {
  @TypeGraphQL.Field(_type => ContestComboWhereInput, {
    nullable: true
  })
  where?: ContestComboWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ContestComboOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ContestComboOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ContestComboWhereUniqueInput, {
    nullable: true
  })
  cursor?: ContestComboWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ContestComboScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"first_move_id" | "second_move_id"> | undefined;
}
