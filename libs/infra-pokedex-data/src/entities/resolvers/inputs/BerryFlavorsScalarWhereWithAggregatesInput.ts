import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("BerryFlavorsScalarWhereWithAggregatesInput", {})
export class BerryFlavorsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [BerryFlavorsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: BerryFlavorsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: BerryFlavorsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: BerryFlavorsScalarWhereWithAggregatesInput[] | undefined;

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
