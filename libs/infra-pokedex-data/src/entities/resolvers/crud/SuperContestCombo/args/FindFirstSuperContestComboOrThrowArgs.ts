import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestComboOrderByWithRelationInput } from "../../../inputs/SuperContestComboOrderByWithRelationInput";
import { SuperContestComboWhereInput } from "../../../inputs/SuperContestComboWhereInput";
import { SuperContestComboWhereUniqueInput } from "../../../inputs/SuperContestComboWhereUniqueInput";
import { SuperContestComboScalarFieldEnum } from "../../../../enums/SuperContestComboScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSuperContestComboOrThrowArgs {
  @TypeGraphQL.Field(_type => SuperContestComboWhereInput, {
    nullable: true
  })
  where?: SuperContestComboWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SuperContestComboOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SuperContestComboOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SuperContestComboWhereUniqueInput, {
    nullable: true
  })
  cursor?: SuperContestComboWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SuperContestComboScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"first_move_id" | "second_move_id"> | undefined;
}
