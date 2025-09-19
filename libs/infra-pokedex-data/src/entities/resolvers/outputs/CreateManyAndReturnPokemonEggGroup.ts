import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroup } from "../../models/EggGroup";
import { PokemonSpecies } from "../../models/PokemonSpecies";

@TypeGraphQL.ObjectType("CreateManyAndReturnPokemonEggGroup", {})
export class CreateManyAndReturnPokemonEggGroup {
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

  @TypeGraphQL.Field(_type => EggGroup, {
    nullable: false
  })
  eggGroup!: EggGroup;
}
