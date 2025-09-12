import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroups } from "../../models/EggGroups";
import { PokemonSpecies } from "../../models/PokemonSpecies";

@TypeGraphQL.ObjectType("CreateManyAndReturnPokemonEggGroups", {})
export class CreateManyAndReturnPokemonEggGroups {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  species_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  egg_group_id!: number;

  @TypeGraphQL.Field(_type => PokemonSpecies, {
    nullable: false
  })
  species!: PokemonSpecies;

  @TypeGraphQL.Field(_type => EggGroups, {
    nullable: false
  })
  eggGroup!: EggGroups;
}
