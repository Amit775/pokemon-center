import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PokedexRelationFilter } from "../inputs/PokedexRelationFilter";
import { PokemonSpeciesRelationFilter } from "../inputs/PokemonSpeciesRelationFilter";

@TypeGraphQL.InputType("PokemonDexNumberWhereInput", {})
export class PokemonDexNumberWhereInput {
  @TypeGraphQL.Field(_type => [PokemonDexNumberWhereInput], {
    nullable: true
  })
  AND?: PokemonDexNumberWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumberWhereInput], {
    nullable: true
  })
  OR?: PokemonDexNumberWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumberWhereInput], {
    nullable: true
  })
  NOT?: PokemonDexNumberWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => PokedexRelationFilter, {
    nullable: true
  })
  pokedex?: PokedexRelationFilter | undefined;
}
