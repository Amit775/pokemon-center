import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestComboOrderByWithRelationInput } from "../../../inputs/SuperContestComboOrderByWithRelationInput";
import { SuperContestComboWhereInput } from "../../../inputs/SuperContestComboWhereInput";
import { SuperContestComboWhereUniqueInput } from "../../../inputs/SuperContestComboWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSuperContestComboArgs {
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
}
