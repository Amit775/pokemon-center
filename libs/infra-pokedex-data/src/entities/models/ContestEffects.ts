import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Moves } from "../models/Moves";
import { ContestEffectsCount } from "../resolvers/outputs/ContestEffectsCount";

@TypeGraphQL.ObjectType("ContestEffects", {})
export class ContestEffects {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  appeal!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  jam!: number;

  moves?: Moves[];

  @TypeGraphQL.Field(_type => ContestEffectsCount, {
    nullable: true
  })
  _count?: ContestEffectsCount | null;
}
