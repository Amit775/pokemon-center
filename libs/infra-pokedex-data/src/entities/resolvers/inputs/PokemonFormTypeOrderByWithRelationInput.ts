import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormOrderByWithRelationInput } from "../inputs/PokemonFormOrderByWithRelationInput";
import { TypeOrderByWithRelationInput } from "../inputs/TypeOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonFormTypeOrderByWithRelationInput", {})
export class PokemonFormTypeOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokemon_form_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  slot?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonFormOrderByWithRelationInput, {
    nullable: true
  })
  pokemonForm?: PokemonFormOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TypeOrderByWithRelationInput, {
    nullable: true
  })
  type?: TypeOrderByWithRelationInput | undefined;
}
