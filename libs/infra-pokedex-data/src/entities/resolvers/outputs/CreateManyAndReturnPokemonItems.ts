import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Items } from "../../models/Items";
import { Pokemon } from "../../models/Pokemon";
import { Versions } from "../../models/Versions";

@TypeGraphQL.ObjectType("CreateManyAndReturnPokemonItems", {})
export class CreateManyAndReturnPokemonItems {
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
  item_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rarity!: number;

  @TypeGraphQL.Field(_type => Pokemon, {
    nullable: false
  })
  pokemon!: Pokemon;

  @TypeGraphQL.Field(_type => Versions, {
    nullable: false
  })
  version!: Versions;

  @TypeGraphQL.Field(_type => Items, {
    nullable: false
  })
  item!: Items;
}
