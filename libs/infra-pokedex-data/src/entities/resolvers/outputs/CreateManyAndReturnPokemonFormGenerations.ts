import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Generations } from "../../models/Generations";
import { PokemonForms } from "../../models/PokemonForms";

@TypeGraphQL.ObjectType("CreateManyAndReturnPokemonFormGenerations", {})
export class CreateManyAndReturnPokemonFormGenerations {
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

  @TypeGraphQL.Field(_type => PokemonForms, {
    nullable: false
  })
  pokemonForm!: PokemonForms;

  @TypeGraphQL.Field(_type => Generations, {
    nullable: false
  })
  generation!: Generations;
}
