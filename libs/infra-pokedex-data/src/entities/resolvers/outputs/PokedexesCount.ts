import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexesCountDexNumbersArgs } from "./args/PokedexesCountDexNumbersArgs";
import { PokedexesCountVersionGroupsArgs } from "./args/PokedexesCountVersionGroupsArgs";

@TypeGraphQL.ObjectType("PokedexesCount", {})
export class PokedexesCount {
  dexNumbers!: number;
  versionGroups!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "dexNumbers",
    nullable: false
  })
  getDexNumbers(@TypeGraphQL.Root() root: PokedexesCount, @TypeGraphQL.Args() args: PokedexesCountDexNumbersArgs): number {
    return root.dexNumbers;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "versionGroups",
    nullable: false
  })
  getVersionGroups(@TypeGraphQL.Root() root: PokedexesCount, @TypeGraphQL.Args() args: PokedexesCountVersionGroupsArgs): number {
    return root.versionGroups;
  }
}
