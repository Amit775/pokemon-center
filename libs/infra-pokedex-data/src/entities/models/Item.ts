import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Berry } from "../models/Berry";
import { EvolutionChain } from "../models/EvolutionChain";
import { ItemCategory } from "../models/ItemCategory";
import { ItemFlagMap } from "../models/ItemFlagMap";
import { ItemFlingEffect } from "../models/ItemFlingEffect";
import { ItemGameIndex } from "../models/ItemGameIndex";
import { Machine } from "../models/Machine";
import { PokemonEvolution } from "../models/PokemonEvolution";
import { PokemonItem } from "../models/PokemonItem";
import { ItemCount } from "../resolvers/outputs/ItemCount";

@TypeGraphQL.ObjectType("Item", {})
export class Item {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  category_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cost!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  fling_power?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  fling_effect_id?: number | null;

  category?: ItemCategory;

  flingEffect?: ItemFlingEffect | null;

  pokemonItems?: PokemonItem[];

  machines?: Machine[];

  berries?: Berry[];

  gameIndices?: ItemGameIndex[];

  flagMap?: ItemFlagMap[];

  babyTriggerItems?: EvolutionChain[];

  triggerItems?: PokemonEvolution[];

  heldItems?: PokemonEvolution[];

  @TypeGraphQL.Field(_type => ItemCount, {
    nullable: true
  })
  _count?: ItemCount | null;
}
