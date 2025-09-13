import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { MoveMeta } from "../models/MoveMeta";
import { MoveMetaCategoriesCount } from "../resolvers/outputs/MoveMetaCategoriesCount";

@TypeGraphQL.ObjectType("MoveMetaCategories", {})
export class MoveMetaCategories {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  meta?: MoveMeta[];

  @TypeGraphQL.Field(_type => MoveMetaCategoriesCount, {
    nullable: true
  })
  _count?: MoveMetaCategoriesCount | null;
}
