import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypesCountBerryFlavorsArgs } from "./args/ContestTypesCountBerryFlavorsArgs";
import { ContestTypesCountMovesArgs } from "./args/ContestTypesCountMovesArgs";

@TypeGraphQL.ObjectType("ContestTypesCount", {})
export class ContestTypesCount {
  moves!: number;
  berryFlavors!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "moves",
    nullable: false
  })
  getMoves(@TypeGraphQL.Root() root: ContestTypesCount, @TypeGraphQL.Args() args: ContestTypesCountMovesArgs): number {
    return root.moves;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "berryFlavors",
    nullable: false
  })
  getBerryFlavors(@TypeGraphQL.Root() root: ContestTypesCount, @TypeGraphQL.Args() args: ContestTypesCountBerryFlavorsArgs): number {
    return root.berryFlavors;
  }
}
