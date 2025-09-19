import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryOrderByWithRelationInput } from "../inputs/BerryOrderByWithRelationInput";
import { ContestTypeOrderByWithRelationInput } from "../inputs/ContestTypeOrderByWithRelationInput";
import { TypeOrderByWithRelationInput } from "../inputs/TypeOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BerryFlavorOrderByWithRelationInput", {})
export class BerryFlavorOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => BerryOrderByWithRelationInput, {
    nullable: true
  })
  berry?: BerryOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypeOrderByWithRelationInput, {
    nullable: true
  })
  contestType?: ContestTypeOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TypeOrderByWithRelationInput, {
    nullable: true
  })
  type?: TypeOrderByWithRelationInput | undefined;
}
