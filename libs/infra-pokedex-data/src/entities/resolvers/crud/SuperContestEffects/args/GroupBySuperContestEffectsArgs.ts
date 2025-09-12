import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestEffectsOrderByWithAggregationInput } from "../../../inputs/SuperContestEffectsOrderByWithAggregationInput";
import { SuperContestEffectsScalarWhereWithAggregatesInput } from "../../../inputs/SuperContestEffectsScalarWhereWithAggregatesInput";
import { SuperContestEffectsWhereInput } from "../../../inputs/SuperContestEffectsWhereInput";
import { SuperContestEffectsScalarFieldEnum } from "../../../../enums/SuperContestEffectsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySuperContestEffectsArgs {
  @TypeGraphQL.Field(_type => SuperContestEffectsWhereInput, {
    nullable: true
  })
  where?: SuperContestEffectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SuperContestEffectsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SuperContestEffectsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestEffectsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "appeal">;

  @TypeGraphQL.Field(_type => SuperContestEffectsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SuperContestEffectsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
