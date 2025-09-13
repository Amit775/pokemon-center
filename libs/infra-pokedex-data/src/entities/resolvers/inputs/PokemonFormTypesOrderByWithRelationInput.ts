import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormsOrderByWithRelationInput } from "../inputs/PokemonFormsOrderByWithRelationInput";
import { TypesOrderByWithRelationInput } from "../inputs/TypesOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonFormTypesOrderByWithRelationInput", {})
export class PokemonFormTypesOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => PokemonFormsOrderByWithRelationInput, {
    nullable: true
  })
  pokemonForm?: PokemonFormsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TypesOrderByWithRelationInput, {
    nullable: true
  })
  type?: TypesOrderByWithRelationInput | undefined;
}
