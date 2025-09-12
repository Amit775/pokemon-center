import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCountAbilitiesArgs } from "./args/PokemonCountAbilitiesArgs";
import { PokemonCountEncountersArgs } from "./args/PokemonCountEncountersArgs";
import { PokemonCountFormsArgs } from "./args/PokemonCountFormsArgs";
import { PokemonCountGameIndicesArgs } from "./args/PokemonCountGameIndicesArgs";
import { PokemonCountItemsArgs } from "./args/PokemonCountItemsArgs";
import { PokemonCountMovesArgs } from "./args/PokemonCountMovesArgs";
import { PokemonCountStatsArgs } from "./args/PokemonCountStatsArgs";
import { PokemonCountTypesArgs } from "./args/PokemonCountTypesArgs";

@TypeGraphQL.ObjectType("PokemonCount", {})
export class PokemonCount {
  forms!: number;
  abilities!: number;
  moves!: number;
  stats!: number;
  types!: number;
  items!: number;
  gameIndices!: number;
  encounters!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "forms",
    nullable: false
  })
  getForms(@TypeGraphQL.Root() root: PokemonCount, @TypeGraphQL.Args() args: PokemonCountFormsArgs): number {
    return root.forms;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "abilities",
    nullable: false
  })
  getAbilities(@TypeGraphQL.Root() root: PokemonCount, @TypeGraphQL.Args() args: PokemonCountAbilitiesArgs): number {
    return root.abilities;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "moves",
    nullable: false
  })
  getMoves(@TypeGraphQL.Root() root: PokemonCount, @TypeGraphQL.Args() args: PokemonCountMovesArgs): number {
    return root.moves;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "stats",
    nullable: false
  })
  getStats(@TypeGraphQL.Root() root: PokemonCount, @TypeGraphQL.Args() args: PokemonCountStatsArgs): number {
    return root.stats;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "types",
    nullable: false
  })
  getTypes(@TypeGraphQL.Root() root: PokemonCount, @TypeGraphQL.Args() args: PokemonCountTypesArgs): number {
    return root.types;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "items",
    nullable: false
  })
  getItems(@TypeGraphQL.Root() root: PokemonCount, @TypeGraphQL.Args() args: PokemonCountItemsArgs): number {
    return root.items;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "gameIndices",
    nullable: false
  })
  getGameIndices(@TypeGraphQL.Root() root: PokemonCount, @TypeGraphQL.Args() args: PokemonCountGameIndicesArgs): number {
    return root.gameIndices;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "encounters",
    nullable: false
  })
  getEncounters(@TypeGraphQL.Root() root: PokemonCount, @TypeGraphQL.Args() args: PokemonCountEncountersArgs): number {
    return root.encounters;
  }
}
