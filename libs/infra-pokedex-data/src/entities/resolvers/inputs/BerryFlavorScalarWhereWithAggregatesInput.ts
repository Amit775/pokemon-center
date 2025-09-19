import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("BerryFlavorScalarWhereWithAggregatesInput", {})
export class BerryFlavorScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [BerryFlavorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: BerryFlavorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: BerryFlavorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: BerryFlavorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  berry_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  contest_type_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  flavor?: IntWithAggregatesFilter | undefined;
}
