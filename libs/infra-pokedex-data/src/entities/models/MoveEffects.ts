import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Moves } from "../models/Moves";
import { MoveEffectsCount } from "../resolvers/outputs/MoveEffectsCount";

@TypeGraphQL.ObjectType("MoveEffects", {})
export class MoveEffects {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  moves?: Moves[];

  @TypeGraphQL.Field(_type => MoveEffectsCount, {
    nullable: true
  })
  _count?: MoveEffectsCount | null;
}
