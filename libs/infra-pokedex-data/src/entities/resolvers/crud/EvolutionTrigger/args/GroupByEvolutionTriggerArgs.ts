import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionTriggerOrderByWithAggregationInput } from "../../../inputs/EvolutionTriggerOrderByWithAggregationInput";
import { EvolutionTriggerScalarWhereWithAggregatesInput } from "../../../inputs/EvolutionTriggerScalarWhereWithAggregatesInput";
import { EvolutionTriggerWhereInput } from "../../../inputs/EvolutionTriggerWhereInput";
import { EvolutionTriggerScalarFieldEnum } from "../../../../enums/EvolutionTriggerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEvolutionTriggerArgs {
  @TypeGraphQL.Field(_type => EvolutionTriggerWhereInput, {
    nullable: true
  })
  where?: EvolutionTriggerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EvolutionTriggerOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EvolutionTriggerOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionTriggerScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => EvolutionTriggerScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EvolutionTriggerScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
