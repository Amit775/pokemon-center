import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemOrderByWithRelationInput } from "../inputs/ItemOrderByWithRelationInput";
import { PokemonOrderByWithRelationInput } from "../inputs/PokemonOrderByWithRelationInput";
import { VersionOrderByWithRelationInput } from "../inputs/VersionOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonItemOrderByWithRelationInput", {})
export class PokemonItemOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokemon_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  item_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rarity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonOrderByWithRelationInput, {
    nullable: true
  })
  pokemon?: PokemonOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => VersionOrderByWithRelationInput, {
    nullable: true
  })
  version?: VersionOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ItemOrderByWithRelationInput, {
    nullable: true
  })
  item?: ItemOrderByWithRelationInput | undefined;
}
