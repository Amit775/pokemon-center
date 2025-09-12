import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("CharacteristicsScalarWhereWithAggregatesInput", {})
export class CharacteristicsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CharacteristicsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CharacteristicsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CharacteristicsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CharacteristicsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  stat_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  gene_mod_5?: IntWithAggregatesFilter | undefined;
}
