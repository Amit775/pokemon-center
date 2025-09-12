import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Moves } from "../models/Moves";
import { SuperContestEffectsCount } from "../resolvers/outputs/SuperContestEffectsCount";

@TypeGraphQL.ObjectType("SuperContestEffects", {})
export class SuperContestEffects {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  appeal!: number;

  moves?: Moves[];

  @TypeGraphQL.Field(_type => SuperContestEffectsCount, {
    nullable: true
  })
  _count?: SuperContestEffectsCount | null;
}
