import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Moves } from "../models/Moves";
import { MoveTargetsCount } from "../resolvers/outputs/MoveTargetsCount";

@TypeGraphQL.ObjectType("MoveTargets", {})
export class MoveTargets {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  moves?: Moves[];

  @TypeGraphQL.Field(_type => MoveTargetsCount, {
    nullable: true
  })
  _count?: MoveTargetsCount | null;
}
