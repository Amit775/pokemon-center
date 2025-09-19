import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCountAreasArgs } from "./args/LocationCountAreasArgs";
import { LocationCountEvolutionArgs } from "./args/LocationCountEvolutionArgs";
import { LocationCountGameIndicesArgs } from "./args/LocationCountGameIndicesArgs";

@TypeGraphQL.ObjectType("LocationCount", {})
export class LocationCount {
  areas!: number;
  gameIndices!: number;
  evolution!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "areas",
    nullable: false
  })
  getAreas(@TypeGraphQL.Root() root: LocationCount, @TypeGraphQL.Args() args: LocationCountAreasArgs): number {
    return root.areas;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "gameIndices",
    nullable: false
  })
  getGameIndices(@TypeGraphQL.Root() root: LocationCount, @TypeGraphQL.Args() args: LocationCountGameIndicesArgs): number {
    return root.gameIndices;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "evolution",
    nullable: false
  })
  getEvolution(@TypeGraphQL.Root() root: LocationCount, @TypeGraphQL.Args() args: LocationCountEvolutionArgs): number {
    return root.evolution;
  }
}
