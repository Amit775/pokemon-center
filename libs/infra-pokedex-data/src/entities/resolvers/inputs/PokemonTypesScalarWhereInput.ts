import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("PokemonTypesScalarWhereInput", {})
export class PokemonTypesScalarWhereInput {
  @TypeGraphQL.Field(_type => [PokemonTypesScalarWhereInput], {
    nullable: true
  })
  AND?: PokemonTypesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesScalarWhereInput], {
    nullable: true
  })
  OR?: PokemonTypesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesScalarWhereInput], {
    nullable: true
  })
  NOT?: PokemonTypesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemon_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  type_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  slot?: IntFilter | undefined;
}
