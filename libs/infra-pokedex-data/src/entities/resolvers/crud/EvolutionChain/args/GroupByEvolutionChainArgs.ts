import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionChainOrderByWithAggregationInput } from "../../../inputs/EvolutionChainOrderByWithAggregationInput";
import { EvolutionChainScalarWhereWithAggregatesInput } from "../../../inputs/EvolutionChainScalarWhereWithAggregatesInput";
import { EvolutionChainWhereInput } from "../../../inputs/EvolutionChainWhereInput";
import { EvolutionChainScalarFieldEnum } from "../../../../enums/EvolutionChainScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEvolutionChainArgs {
  @TypeGraphQL.Field(_type => EvolutionChainWhereInput, {
    nullable: true
  })
  where?: EvolutionChainWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EvolutionChainOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "baby_trigger_item_id">;

  @TypeGraphQL.Field(_type => EvolutionChainScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EvolutionChainScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
