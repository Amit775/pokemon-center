import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { MoveFlagMap } from "../models/MoveFlagMap";
import { MoveFlagCount } from "../resolvers/outputs/MoveFlagCount";

@TypeGraphQL.ObjectType("MoveFlag", {})
export class MoveFlag {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  flagMap?: MoveFlagMap[];

  @TypeGraphQL.Field(_type => MoveFlagCount, {
    nullable: true
  })
  _count?: MoveFlagCount | null;
}
