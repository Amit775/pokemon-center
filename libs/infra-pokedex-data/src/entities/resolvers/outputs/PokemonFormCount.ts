import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormCountGenerationsArgs } from "./args/PokemonFormCountGenerationsArgs";
import { PokemonFormCountTypesArgs } from "./args/PokemonFormCountTypesArgs";

@TypeGraphQL.ObjectType("PokemonFormCount", {})
export class PokemonFormCount {
  generations!: number;
  types!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "generations",
    nullable: false
  })
  getGenerations(@TypeGraphQL.Root() root: PokemonFormCount, @TypeGraphQL.Args() args: PokemonFormCountGenerationsArgs): number {
    return root.generations;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "types",
    nullable: false
  })
  getTypes(@TypeGraphQL.Root() root: PokemonFormCount, @TypeGraphQL.Args() args: PokemonFormCountTypesArgs): number {
    return root.types;
  }
}
