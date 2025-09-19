import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Move } from "../models/Move";
import { ContestEffectCount } from "../resolvers/outputs/ContestEffectCount";

@TypeGraphQL.ObjectType("ContestEffect", {})
export class ContestEffect {
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

  moves?: Move[];

  @TypeGraphQL.Field(_type => ContestEffectCount, {
    nullable: true
  })
  _count?: ContestEffectCount | null;
}
