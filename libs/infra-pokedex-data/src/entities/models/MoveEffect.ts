import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Move } from "../models/Move";
import { MoveEffectCount } from "../resolvers/outputs/MoveEffectCount";

@TypeGraphQL.ObjectType("MoveEffect", {})
export class MoveEffect {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  moves?: Move[];

  @TypeGraphQL.Field(_type => MoveEffectCount, {
    nullable: true
  })
  _count?: MoveEffectCount | null;
}
