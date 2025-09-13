import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Berries } from "../models/Berries";
import { EvolutionChains } from "../models/EvolutionChains";
import { ItemCategories } from "../models/ItemCategories";
import { ItemFlagMap } from "../models/ItemFlagMap";
import { ItemFlingEffects } from "../models/ItemFlingEffects";
import { ItemGameIndices } from "../models/ItemGameIndices";
import { Machines } from "../models/Machines";
import { PokemonEvolution } from "../models/PokemonEvolution";
import { PokemonItems } from "../models/PokemonItems";
import { ItemsCount } from "../resolvers/outputs/ItemsCount";

@TypeGraphQL.ObjectType("Items", {})
export class Items {
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

  category?: ItemCategories;

  flingEffect?: ItemFlingEffects | null;

  pokemonItems?: PokemonItems[];

  machines?: Machines[];

  berries?: Berries[];

  gameIndices?: ItemGameIndices[];

  flagMap?: ItemFlagMap[];

  babyTriggerItems?: EvolutionChains[];

  triggerItems?: PokemonEvolution[];

  heldItems?: PokemonEvolution[];

  @TypeGraphQL.Field(_type => ItemsCount, {
    nullable: true
  })
  _count?: ItemsCount | null;
}
