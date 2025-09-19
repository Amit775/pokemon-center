import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Ability } from "../../models/Ability";
import { Pokemon } from "../../models/Pokemon";

@TypeGraphQL.ObjectType("CreateManyAndReturnPokemonAbility", {})
export class CreateManyAndReturnPokemonAbility {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemon_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ability_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_hidden!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  slot!: number;

  @TypeGraphQL.Field(_type => Pokemon, {
    nullable: false
  })
  pokemon!: Pokemon;

  @TypeGraphQL.Field(_type => Ability, {
    nullable: false
  })
  ability!: Ability;
}
