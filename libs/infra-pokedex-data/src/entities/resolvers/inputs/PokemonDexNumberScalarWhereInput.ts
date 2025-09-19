import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("PokemonDexNumberScalarWhereInput", {})
export class PokemonDexNumberScalarWhereInput {
  @TypeGraphQL.Field(_type => [PokemonDexNumberScalarWhereInput], {
    nullable: true
  })
  AND?: PokemonDexNumberScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumberScalarWhereInput], {
    nullable: true
  })
  OR?: PokemonDexNumberScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumberScalarWhereInput], {
    nullable: true
  })
  NOT?: PokemonDexNumberScalarWhereInput[] | undefined;

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
