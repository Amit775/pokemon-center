import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("CharacteristicScalarWhereWithAggregatesInput", {})
export class CharacteristicScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CharacteristicScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CharacteristicScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CharacteristicScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CharacteristicScalarWhereWithAggregatesInput[] | undefined;

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
