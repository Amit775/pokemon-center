import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PokedexRelationFilter } from "../inputs/PokedexRelationFilter";
import { PokemonDexNumberWhereInput } from "../inputs/PokemonDexNumberWhereInput";
import { PokemonDexNumbersSpecies_idPokedex_idCompoundUniqueInput } from "../inputs/PokemonDexNumbersSpecies_idPokedex_idCompoundUniqueInput";
import { PokemonSpeciesRelationFilter } from "../inputs/PokemonSpeciesRelationFilter";

@TypeGraphQL.InputType("PokemonDexNumberWhereUniqueInput", {})
export class PokemonDexNumberWhereUniqueInput {
  @TypeGraphQL.Field(_type => PokemonDexNumbersSpecies_idPokedex_idCompoundUniqueInput, {
    nullable: true
  })
  species_id_pokedex_id?: PokemonDexNumbersSpecies_idPokedex_idCompoundUniqueInput | undefined;

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
