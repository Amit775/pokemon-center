import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { NatureBattleStylePreferences } from "../models/NatureBattleStylePreferences";
import { Stats } from "../models/Stats";
import { Types } from "../models/Types";
import { NaturesCount } from "../resolvers/outputs/NaturesCount";

@TypeGraphQL.ObjectType("Natures", {})
export class Natures {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  decreased_stat_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  increased_stat_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  hates_flavor_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  likes_flavor_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  decreasedStat?: Stats;

  increasedStat?: Stats;

  battleStylePreferences?: NatureBattleStylePreferences[];

  decreasedStatTypes?: Types[];

  increasedStatTypes?: Types[];

  @TypeGraphQL.Field(_type => NaturesCount, {
    nullable: true
  })
  _count?: NaturesCount | null;
}
