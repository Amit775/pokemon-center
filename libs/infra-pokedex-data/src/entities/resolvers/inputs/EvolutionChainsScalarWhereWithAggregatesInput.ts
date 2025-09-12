import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("EvolutionChainsScalarWhereWithAggregatesInput", {})
export class EvolutionChainsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EvolutionChainsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EvolutionChainsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EvolutionChainsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EvolutionChainsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  baby_trigger_item_id?: IntNullableWithAggregatesFilter | undefined;
}
