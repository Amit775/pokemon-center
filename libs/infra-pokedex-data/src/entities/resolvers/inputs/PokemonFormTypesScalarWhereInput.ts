import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("PokemonFormTypesScalarWhereInput", {})
export class PokemonFormTypesScalarWhereInput {
  @TypeGraphQL.Field(_type => [PokemonFormTypesScalarWhereInput], {
    nullable: true
  })
  AND?: PokemonFormTypesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesScalarWhereInput], {
    nullable: true
  })
  OR?: PokemonFormTypesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesScalarWhereInput], {
    nullable: true
  })
  NOT?: PokemonFormTypesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemon_form_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  type_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  slot?: IntFilter | undefined;
}
