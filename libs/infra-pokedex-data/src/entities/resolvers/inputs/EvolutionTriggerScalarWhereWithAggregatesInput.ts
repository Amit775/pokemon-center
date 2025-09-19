import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("EvolutionTriggerScalarWhereWithAggregatesInput", {})
export class EvolutionTriggerScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EvolutionTriggerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EvolutionTriggerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionTriggerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EvolutionTriggerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionTriggerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EvolutionTriggerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
