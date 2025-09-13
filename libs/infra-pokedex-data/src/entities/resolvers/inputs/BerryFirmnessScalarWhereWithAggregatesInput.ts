import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("BerryFirmnessScalarWhereWithAggregatesInput", {})
export class BerryFirmnessScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [BerryFirmnessScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: BerryFirmnessScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFirmnessScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: BerryFirmnessScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFirmnessScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: BerryFirmnessScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
