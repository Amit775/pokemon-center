import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("EvolutionChainScalarWhereWithAggregatesInput", {})
export class EvolutionChainScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EvolutionChainScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EvolutionChainScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EvolutionChainScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EvolutionChainScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  baby_trigger_item_id?: IntNullableWithAggregatesFilter | undefined;
}
