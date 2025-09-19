import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeOrderByWithRelationInput } from "../inputs/TypeOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TypeEfficacyOrderByWithRelationInput", {})
export class TypeEfficacyOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  damage_type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  target_type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  damage_factor?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TypeOrderByWithRelationInput, {
    nullable: true
  })
  damageType?: TypeOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TypeOrderByWithRelationInput, {
    nullable: true
  })
  targetType?: TypeOrderByWithRelationInput | undefined;
}
