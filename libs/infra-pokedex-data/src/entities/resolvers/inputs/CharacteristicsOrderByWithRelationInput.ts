import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsOrderByWithRelationInput } from "../inputs/StatsOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CharacteristicsOrderByWithRelationInput", {})
export class CharacteristicsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  stat_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  gene_mod_5?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => StatsOrderByWithRelationInput, {
    nullable: true
  })
  stat?: StatsOrderByWithRelationInput | undefined;
}
