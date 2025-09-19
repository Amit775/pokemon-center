import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonForm } from "../../models/PokemonForm";
import { Type } from "../../models/Type";

@TypeGraphQL.ObjectType("CreateManyAndReturnPokemonFormType", {})
export class CreateManyAndReturnPokemonFormType {
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

  @TypeGraphQL.Field(_type => PokemonForm, {
    nullable: false
  })
  pokemonForm!: PokemonForm;

  @TypeGraphQL.Field(_type => Type, {
    nullable: false
  })
  type!: Type;
}
