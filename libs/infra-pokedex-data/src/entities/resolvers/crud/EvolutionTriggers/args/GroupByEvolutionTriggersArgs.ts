import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionTriggersOrderByWithAggregationInput } from "../../../inputs/EvolutionTriggersOrderByWithAggregationInput";
import { EvolutionTriggersScalarWhereWithAggregatesInput } from "../../../inputs/EvolutionTriggersScalarWhereWithAggregatesInput";
import { EvolutionTriggersWhereInput } from "../../../inputs/EvolutionTriggersWhereInput";
import { EvolutionTriggersScalarFieldEnum } from "../../../../enums/EvolutionTriggersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEvolutionTriggersArgs {
  @TypeGraphQL.Field(_type => EvolutionTriggersWhereInput, {
    nullable: true
  })
  where?: EvolutionTriggersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EvolutionTriggersOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EvolutionTriggersOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionTriggersScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => EvolutionTriggersScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EvolutionTriggersScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
