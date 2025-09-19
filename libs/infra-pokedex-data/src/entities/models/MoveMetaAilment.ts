import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { MoveMeta } from "../models/MoveMeta";
import { MoveMetaAilmentCount } from "../resolvers/outputs/MoveMetaAilmentCount";

@TypeGraphQL.ObjectType("MoveMetaAilment", {})
export class MoveMetaAilment {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  meta?: MoveMeta[];

  @TypeGraphQL.Field(_type => MoveMetaAilmentCount, {
    nullable: true
  })
  _count?: MoveMetaAilmentCount | null;
}
