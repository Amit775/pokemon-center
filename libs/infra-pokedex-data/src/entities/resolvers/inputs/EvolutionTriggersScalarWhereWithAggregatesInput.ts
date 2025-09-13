import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("EvolutionTriggersScalarWhereWithAggregatesInput", {})
export class EvolutionTriggersScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EvolutionTriggersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EvolutionTriggersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionTriggersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EvolutionTriggersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionTriggersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EvolutionTriggersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
