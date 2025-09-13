import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionChainsOrderByWithAggregationInput } from "../../../inputs/EvolutionChainsOrderByWithAggregationInput";
import { EvolutionChainsScalarWhereWithAggregatesInput } from "../../../inputs/EvolutionChainsScalarWhereWithAggregatesInput";
import { EvolutionChainsWhereInput } from "../../../inputs/EvolutionChainsWhereInput";
import { EvolutionChainsScalarFieldEnum } from "../../../../enums/EvolutionChainsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEvolutionChainsArgs {
  @TypeGraphQL.Field(_type => EvolutionChainsWhereInput, {
    nullable: true
  })
  where?: EvolutionChainsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EvolutionChainsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "baby_trigger_item_id">;

  @TypeGraphQL.Field(_type => EvolutionChainsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EvolutionChainsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
