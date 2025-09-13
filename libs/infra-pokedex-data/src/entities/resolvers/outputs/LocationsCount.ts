import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationsCountAreasArgs } from "./args/LocationsCountAreasArgs";
import { LocationsCountEvolutionArgs } from "./args/LocationsCountEvolutionArgs";
import { LocationsCountGameIndicesArgs } from "./args/LocationsCountGameIndicesArgs";

@TypeGraphQL.ObjectType("LocationsCount", {})
export class LocationsCount {
  areas!: number;
  gameIndices!: number;
  evolution!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "areas",
    nullable: false
  })
  getAreas(@TypeGraphQL.Root() root: LocationsCount, @TypeGraphQL.Args() args: LocationsCountAreasArgs): number {
    return root.areas;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "gameIndices",
    nullable: false
  })
  getGameIndices(@TypeGraphQL.Root() root: LocationsCount, @TypeGraphQL.Args() args: LocationsCountGameIndicesArgs): number {
    return root.gameIndices;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "evolution",
    nullable: false
  })
  getEvolution(@TypeGraphQL.Root() root: LocationsCount, @TypeGraphQL.Args() args: LocationsCountEvolutionArgs): number {
    return root.evolution;
  }
}
