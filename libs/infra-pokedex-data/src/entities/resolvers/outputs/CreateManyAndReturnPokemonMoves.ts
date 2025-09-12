import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Moves } from "../../models/Moves";
import { Pokemon } from "../../models/Pokemon";
import { PokemonMoveMethods } from "../../models/PokemonMoveMethods";
import { VersionGroups } from "../../models/VersionGroups";

@TypeGraphQL.ObjectType("CreateManyAndReturnPokemonMoves", {})
export class CreateManyAndReturnPokemonMoves {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemon_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version_group_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  move_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemon_move_method_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  level!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  order!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  mastery!: number | null;

  @TypeGraphQL.Field(_type => Pokemon, {
    nullable: false
  })
  pokemon!: Pokemon;

  @TypeGraphQL.Field(_type => VersionGroups, {
    nullable: false
  })
  versionGroup!: VersionGroups;

  @TypeGraphQL.Field(_type => Moves, {
    nullable: false
  })
  move!: Moves;

  @TypeGraphQL.Field(_type => PokemonMoveMethods, {
    nullable: false
  })
  moveMethod!: PokemonMoveMethods;
}
