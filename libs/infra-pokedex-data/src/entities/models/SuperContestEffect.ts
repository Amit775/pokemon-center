import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Move } from "../models/Move";
import { SuperContestEffectCount } from "../resolvers/outputs/SuperContestEffectCount";

@TypeGraphQL.ObjectType("SuperContestEffect", {})
export class SuperContestEffect {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  appeal!: number;

  moves?: Move[];

  @TypeGraphQL.Field(_type => SuperContestEffectCount, {
    nullable: true
  })
  _count?: SuperContestEffectCount | null;
}
