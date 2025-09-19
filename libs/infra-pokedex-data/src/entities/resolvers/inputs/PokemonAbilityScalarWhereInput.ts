import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("PokemonAbilityScalarWhereInput", {})
export class PokemonAbilityScalarWhereInput {
  @TypeGraphQL.Field(_type => [PokemonAbilityScalarWhereInput], {
    nullable: true
  })
  AND?: PokemonAbilityScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilityScalarWhereInput], {
    nullable: true
  })
  OR?: PokemonAbilityScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilityScalarWhereInput], {
    nullable: true
  })
  NOT?: PokemonAbilityScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemon_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  ability_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  is_hidden?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  slot?: IntFilter | undefined;
}
