import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { MoveFlagMap } from "../models/MoveFlagMap";
import { MoveFlagsCount } from "../resolvers/outputs/MoveFlagsCount";

@TypeGraphQL.ObjectType("MoveFlags", {})
export class MoveFlags {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  flagMap?: MoveFlagMap[];

  @TypeGraphQL.Field(_type => MoveFlagsCount, {
    nullable: true
  })
  _count?: MoveFlagsCount | null;
}
