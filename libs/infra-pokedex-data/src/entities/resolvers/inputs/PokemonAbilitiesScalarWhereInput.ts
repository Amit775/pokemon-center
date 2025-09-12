import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("PokemonAbilitiesScalarWhereInput", {})
export class PokemonAbilitiesScalarWhereInput {
  @TypeGraphQL.Field(_type => [PokemonAbilitiesScalarWhereInput], {
    nullable: true
  })
  AND?: PokemonAbilitiesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilitiesScalarWhereInput], {
    nullable: true
  })
  OR?: PokemonAbilitiesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilitiesScalarWhereInput], {
    nullable: true
  })
  NOT?: PokemonAbilitiesScalarWhereInput[] | undefined;

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
