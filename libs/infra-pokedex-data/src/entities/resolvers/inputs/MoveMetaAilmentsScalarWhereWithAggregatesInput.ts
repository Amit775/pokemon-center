import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MoveMetaAilmentsScalarWhereWithAggregatesInput", {})
export class MoveMetaAilmentsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MoveMetaAilmentsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MoveMetaAilmentsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaAilmentsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MoveMetaAilmentsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaAilmentsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MoveMetaAilmentsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
