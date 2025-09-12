import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormsCountGenerationsArgs } from "./args/PokemonFormsCountGenerationsArgs";
import { PokemonFormsCountTypesArgs } from "./args/PokemonFormsCountTypesArgs";

@TypeGraphQL.ObjectType("PokemonFormsCount", {})
export class PokemonFormsCount {
  generations!: number;
  types!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "generations",
    nullable: false
  })
  getGenerations(@TypeGraphQL.Root() root: PokemonFormsCount, @TypeGraphQL.Args() args: PokemonFormsCountGenerationsArgs): number {
    return root.generations;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "types",
    nullable: false
  })
  getTypes(@TypeGraphQL.Root() root: PokemonFormsCount, @TypeGraphQL.Args() args: PokemonFormsCountTypesArgs): number {
    return root.types;
  }
}
