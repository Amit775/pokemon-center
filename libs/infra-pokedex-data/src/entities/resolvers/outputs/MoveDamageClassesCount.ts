import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveDamageClassesCountMovesArgs } from "./args/MoveDamageClassesCountMovesArgs";
import { MoveDamageClassesCountTypesArgs } from "./args/MoveDamageClassesCountTypesArgs";

@TypeGraphQL.ObjectType("MoveDamageClassesCount", {})
export class MoveDamageClassesCount {
  moves!: number;
  types!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "moves",
    nullable: false
  })
  getMoves(@TypeGraphQL.Root() root: MoveDamageClassesCount, @TypeGraphQL.Args() args: MoveDamageClassesCountMovesArgs): number {
    return root.moves;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "types",
    nullable: false
  })
  getTypes(@TypeGraphQL.Root() root: MoveDamageClassesCount, @TypeGraphQL.Args() args: MoveDamageClassesCountTypesArgs): number {
    return root.types;
  }
}
