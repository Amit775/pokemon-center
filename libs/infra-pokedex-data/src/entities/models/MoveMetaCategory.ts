import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { MoveMeta } from "../models/MoveMeta";
import { MoveMetaCategoryCount } from "../resolvers/outputs/MoveMetaCategoryCount";

@TypeGraphQL.ObjectType("MoveMetaCategory", {})
export class MoveMetaCategory {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  meta?: MoveMeta[];

  @TypeGraphQL.Field(_type => MoveMetaCategoryCount, {
    nullable: true
  })
  _count?: MoveMetaCategoryCount | null;
}
