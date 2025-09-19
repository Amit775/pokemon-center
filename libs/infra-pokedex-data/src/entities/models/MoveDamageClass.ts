import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Move } from "../models/Move";
import { Type } from "../models/Type";
import { MoveDamageClassCount } from "../resolvers/outputs/MoveDamageClassCount";

@TypeGraphQL.ObjectType("MoveDamageClass", {})
export class MoveDamageClass {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  moves?: Move[];

  types?: Type[];

  @TypeGraphQL.Field(_type => MoveDamageClassCount, {
    nullable: true
  })
  _count?: MoveDamageClassCount | null;
}
