import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { MoveMeta } from "../models/MoveMeta";
import { MoveMetaAilmentsCount } from "../resolvers/outputs/MoveMetaAilmentsCount";

@TypeGraphQL.ObjectType("MoveMetaAilments", {})
export class MoveMetaAilments {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  meta?: MoveMeta[];

  @TypeGraphQL.Field(_type => MoveMetaAilmentsCount, {
    nullable: true
  })
  _count?: MoveMetaAilmentsCount | null;
}
