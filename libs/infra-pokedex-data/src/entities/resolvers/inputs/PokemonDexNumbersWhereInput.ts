import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PokedexesRelationFilter } from "../inputs/PokedexesRelationFilter";
import { PokemonSpeciesRelationFilter } from "../inputs/PokemonSpeciesRelationFilter";

@TypeGraphQL.InputType("PokemonDexNumbersWhereInput", {})
export class PokemonDexNumbersWhereInput {
  @TypeGraphQL.Field(_type => [PokemonDexNumbersWhereInput], {
    nullable: true
  })
  AND?: PokemonDexNumbersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumbersWhereInput], {
    nullable: true
  })
  OR?: PokemonDexNumbersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumbersWhereInput], {
    nullable: true
  })
  NOT?: PokemonDexNumbersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  species_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokedex_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokedex_number?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesRelationFilter, {
    nullable: true
  })
  species?: PokemonSpeciesRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokedexesRelationFilter, {
    nullable: true
  })
  pokedex?: PokedexesRelationFilter | undefined;
}
