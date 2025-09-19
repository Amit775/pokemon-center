import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Move } from "../models/Move";
import { MoveTargetCount } from "../resolvers/outputs/MoveTargetCount";

@TypeGraphQL.ObjectType("MoveTarget", {})
export class MoveTarget {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  moves?: Move[];

  @TypeGraphQL.Field(_type => MoveTargetCount, {
    nullable: true
  })
  _count?: MoveTargetCount | null;
}
