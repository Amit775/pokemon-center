import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexCountDexNumbersArgs } from "./args/PokedexCountDexNumbersArgs";
import { PokedexCountVersionGroupsArgs } from "./args/PokedexCountVersionGroupsArgs";

@TypeGraphQL.ObjectType("PokedexCount", {})
export class PokedexCount {
  dexNumbers!: number;
  versionGroups!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "dexNumbers",
    nullable: false
  })
  getDexNumbers(@TypeGraphQL.Root() root: PokedexCount, @TypeGraphQL.Args() args: PokedexCountDexNumbersArgs): number {
    return root.dexNumbers;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "versionGroups",
    nullable: false
  })
  getVersionGroups(@TypeGraphQL.Root() root: PokedexCount, @TypeGraphQL.Args() args: PokedexCountVersionGroupsArgs): number {
    return root.versionGroups;
  }
}
