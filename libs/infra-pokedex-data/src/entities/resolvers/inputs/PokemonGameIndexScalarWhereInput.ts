import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("PokemonGameIndexScalarWhereInput", {})
export class PokemonGameIndexScalarWhereInput {
  @TypeGraphQL.Field(_type => [PokemonGameIndexScalarWhereInput], {
    nullable: true
  })
  AND?: PokemonGameIndexScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexScalarWhereInput], {
    nullable: true
  })
  OR?: PokemonGameIndexScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexScalarWhereInput], {
    nullable: true
  })
  NOT?: PokemonGameIndexScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemon_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  version_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  game_index?: IntFilter | undefined;
}
