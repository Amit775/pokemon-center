import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("PokemonTypeScalarWhereInput", {})
export class PokemonTypeScalarWhereInput {
  @TypeGraphQL.Field(_type => [PokemonTypeScalarWhereInput], {
    nullable: true
  })
  AND?: PokemonTypeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypeScalarWhereInput], {
    nullable: true
  })
  OR?: PokemonTypeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypeScalarWhereInput], {
    nullable: true
  })
  NOT?: PokemonTypeScalarWhereInput[] | undefined;

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
