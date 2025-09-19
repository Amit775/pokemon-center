import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypeCountBerryFlavorsArgs } from "./args/ContestTypeCountBerryFlavorsArgs";
import { ContestTypeCountMovesArgs } from "./args/ContestTypeCountMovesArgs";

@TypeGraphQL.ObjectType("ContestTypeCount", {})
export class ContestTypeCount {
  moves!: number;
  berryFlavors!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "moves",
    nullable: false
  })
  getMoves(@TypeGraphQL.Root() root: ContestTypeCount, @TypeGraphQL.Args() args: ContestTypeCountMovesArgs): number {
    return root.moves;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "berryFlavors",
    nullable: false
  })
  getBerryFlavors(@TypeGraphQL.Root() root: ContestTypeCount, @TypeGraphQL.Args() args: ContestTypeCountBerryFlavorsArgs): number {
    return root.berryFlavors;
  }
}
