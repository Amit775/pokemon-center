import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationOrderByWithRelationInput } from "../inputs/GenerationOrderByWithRelationInput";
import { LocationOrderByWithRelationInput } from "../inputs/LocationOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LocationGameIndexOrderByWithRelationInput", {})
export class LocationGameIndexOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  location_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  generation_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  game_index?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => LocationOrderByWithRelationInput, {
    nullable: true
  })
  location?: LocationOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => GenerationOrderByWithRelationInput, {
    nullable: true
  })
  generation?: GenerationOrderByWithRelationInput | undefined;
}
