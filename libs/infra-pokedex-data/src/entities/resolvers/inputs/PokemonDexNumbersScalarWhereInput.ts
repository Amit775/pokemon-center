import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("PokemonDexNumbersScalarWhereInput", {})
export class PokemonDexNumbersScalarWhereInput {
  @TypeGraphQL.Field(_type => [PokemonDexNumbersScalarWhereInput], {
    nullable: true
  })
  AND?: PokemonDexNumbersScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumbersScalarWhereInput], {
    nullable: true
  })
  OR?: PokemonDexNumbersScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumbersScalarWhereInput], {
    nullable: true
  })
  NOT?: PokemonDexNumbersScalarWhereInput[] | undefined;

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
}
