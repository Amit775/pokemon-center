import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesOrderByWithRelationInput } from "../inputs/BerriesOrderByWithRelationInput";
import { ContestTypesOrderByWithRelationInput } from "../inputs/ContestTypesOrderByWithRelationInput";
import { TypesOrderByWithRelationInput } from "../inputs/TypesOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BerryFlavorsOrderByWithRelationInput", {})
export class BerryFlavorsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  berry_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  contest_type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  flavor?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BerriesOrderByWithRelationInput, {
    nullable: true
  })
  berry?: BerriesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypesOrderByWithRelationInput, {
    nullable: true
  })
  contestType?: ContestTypesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TypesOrderByWithRelationInput, {
    nullable: true
  })
  type?: TypesOrderByWithRelationInput | undefined;
}
