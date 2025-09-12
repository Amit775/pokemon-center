import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Pokemon } from "../../models/Pokemon";
import { Versions } from "../../models/Versions";

@TypeGraphQL.ObjectType("CreateManyAndReturnPokemonGameIndices", {})
export class CreateManyAndReturnPokemonGameIndices {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemon_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => Pokemon, {
    nullable: false
  })
  pokemon!: Pokemon;

  @TypeGraphQL.Field(_type => Versions, {
    nullable: false
  })
  version!: Versions;
}
