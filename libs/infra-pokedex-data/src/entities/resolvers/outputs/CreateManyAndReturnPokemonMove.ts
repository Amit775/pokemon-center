import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Move } from "../../models/Move";
import { Pokemon } from "../../models/Pokemon";
import { PokemonMoveMethod } from "../../models/PokemonMoveMethod";
import { VersionGroup } from "../../models/VersionGroup";

@TypeGraphQL.ObjectType("CreateManyAndReturnPokemonMove", {})
export class CreateManyAndReturnPokemonMove {
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

  @TypeGraphQL.Field(_type => VersionGroup, {
    nullable: false
  })
  versionGroup!: VersionGroup;

  @TypeGraphQL.Field(_type => Move, {
    nullable: false
  })
  move!: Move;

  @TypeGraphQL.Field(_type => PokemonMoveMethod, {
    nullable: false
  })
  moveMethod!: PokemonMoveMethod;
}
