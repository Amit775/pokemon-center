import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonRelationFilter } from "../inputs/PokemonRelationFilter";
import { TypeRelationFilter } from "../inputs/TypeRelationFilter";

@TypeGraphQL.InputType("PokemonTypeWhereInput", {})
export class PokemonTypeWhereInput {
  @TypeGraphQL.Field(_type => [PokemonTypeWhereInput], {
    nullable: true
  })
  AND?: PokemonTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypeWhereInput], {
    nullable: true
  })
  OR?: PokemonTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypeWhereInput], {
    nullable: true
  })
  NOT?: PokemonTypeWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => PokemonRelationFilter, {
    nullable: true
  })
  pokemon?: PokemonRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TypeRelationFilter, {
    nullable: true
  })
  type?: TypeRelationFilter | undefined;
}
