import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveDamageClassCountMovesArgs } from "./args/MoveDamageClassCountMovesArgs";
import { MoveDamageClassCountTypesArgs } from "./args/MoveDamageClassCountTypesArgs";

@TypeGraphQL.ObjectType("MoveDamageClassCount", {})
export class MoveDamageClassCount {
  moves!: number;
  types!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "moves",
    nullable: false
  })
  getMoves(@TypeGraphQL.Root() root: MoveDamageClassCount, @TypeGraphQL.Args() args: MoveDamageClassCountMovesArgs): number {
    return root.moves;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "types",
    nullable: false
  })
  getTypes(@TypeGraphQL.Root() root: MoveDamageClassCount, @TypeGraphQL.Args() args: MoveDamageClassCountTypesArgs): number {
    return root.types;
  }
}
