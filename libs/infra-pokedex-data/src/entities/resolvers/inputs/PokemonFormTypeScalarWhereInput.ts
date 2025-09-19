import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("PokemonFormTypeScalarWhereInput", {})
export class PokemonFormTypeScalarWhereInput {
  @TypeGraphQL.Field(_type => [PokemonFormTypeScalarWhereInput], {
    nullable: true
  })
  AND?: PokemonFormTypeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypeScalarWhereInput], {
    nullable: true
  })
  OR?: PokemonFormTypeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypeScalarWhereInput], {
    nullable: true
  })
  NOT?: PokemonFormTypeScalarWhereInput[] | undefined;

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
