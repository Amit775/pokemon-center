import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonForms } from "../../models/PokemonForms";
import { Types } from "../../models/Types";

@TypeGraphQL.ObjectType("CreateManyAndReturnPokemonFormTypes", {})
export class CreateManyAndReturnPokemonFormTypes {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemon_form_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  type_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  slot!: number;

  @TypeGraphQL.Field(_type => PokemonForms, {
    nullable: false
  })
  pokemonForm!: PokemonForms;

  @TypeGraphQL.Field(_type => Types, {
    nullable: false
  })
  type!: Types;
}
