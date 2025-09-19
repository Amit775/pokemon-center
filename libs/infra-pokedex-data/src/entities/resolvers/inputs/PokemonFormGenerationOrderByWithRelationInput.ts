import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationOrderByWithRelationInput } from "../inputs/GenerationOrderByWithRelationInput";
import { PokemonFormOrderByWithRelationInput } from "../inputs/PokemonFormOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonFormGenerationOrderByWithRelationInput", {})
export class PokemonFormGenerationOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokemon_form_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  generation_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  game_index?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonFormOrderByWithRelationInput, {
    nullable: true
  })
  pokemonForm?: PokemonFormOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => GenerationOrderByWithRelationInput, {
    nullable: true
  })
  generation?: GenerationOrderByWithRelationInput | undefined;
}
