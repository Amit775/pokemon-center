import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Generation } from "../../models/Generation";
import { PokemonForm } from "../../models/PokemonForm";

@TypeGraphQL.ObjectType("CreateManyAndReturnPokemonFormGeneration", {})
export class CreateManyAndReturnPokemonFormGeneration {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemon_form_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  generation_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => PokemonForm, {
    nullable: false
  })
  pokemonForm!: PokemonForm;

  @TypeGraphQL.Field(_type => Generation, {
    nullable: false
  })
  generation!: Generation;
}
